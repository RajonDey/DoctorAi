import { useForm } from "react-hook-form";
import { AiContext } from "../../../Contexts/FormContext/FormContext";
import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import axios from "axios";
import DrawerToggle from "../../../layout/Dashboard/DrawerToggle";
import { ChatContext } from "../../../Contexts/SessionContext/SessionContext";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";

export default function AiSetting() {
  const { setAiConfig, setModalState, aiConfig } = useContext(AiContext);
  const { setMessages, sesstionData, setSessionData } = useContext(ChatContext);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      subjectSelection: aiConfig?.subjectSelection || "",
      assistanceLevel: aiConfig?.assistanceLevel || "",
      additionalInstruction: aiConfig?.additionalInstruction || "",
    },
  });
  useEffect(() => {
    // Set default values for subjectSelection and assistanceLevel
    const defaultSub = aiConfig?.subjectSelection || "";
    const defaultAssist = aiConfig?.assistanceLevel || "";
    const defaultAdditional = aiConfig?.additionalInstruction || "";

    reset({
      subjectSelection: defaultSub,
      assistanceLevel: defaultAssist,
      additionalInstruction: defaultAdditional,
    });
  }, [reset, aiConfig?.sessionId]);

  const onSubmit = async (data) => {
    if (
      data?.subjectSelection == aiConfig?.subjectSelection &&
      data?.assistanceLevel == aiConfig?.assistanceLevel &&
      data?.additionalInstruction == aiConfig?.additionalInstruction
    ) {
      setModalState(false);
      toast.warning("No changes made!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    const dataId = uuidv4();
    data = { ...data, sessionId: dataId };

    if (
      data?.subjectSelection !== "" ||
      data?.assistanceLevel !== "" ||
      data?.additionalInstruction !== ""
    ) {
      setMessages([]);
      toast.success("New session created!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
        const { data: dataGet } = await axios.post(
          "https://neuronex-server.vercel.app/session",
          {
            sessionTitle: data?.additionalInstruction || "",
            subjectSelection: data?.subjectSelection,
            assistanceLevel: data?.assistanceLevel,
            additionalInstruction: data?.additionalInstruction,
            sessionId: dataId,
            uid: user?.uid,
          },
          config
        );
        setAiConfig(dataGet);
        // push data to sessiondata
        console.log(data);
        console.log(dataGet);
        console.log(sesstionData);
        if (sesstionData?.length === 0) {
          setSessionData([dataGet]);
        } else {
          setSessionData([dataGet, ...sesstionData]);
        }
      } catch (error) {
        console.log(error);
        toast({
          title: "Error Occurred!",
          description: "Failed to send the message.",
          status: "error",
          duration: 4000,
          isClosable: true,
          theme: "dark",
        });
      }
      setModalState(false);
      return;
    }
    if (
      data?.subjectSelection === "" ||
      data?.assistanceLevel === "" ||
      data?.additionalInstruction === ""
    ) {
      console.log("fill all fields");
      setModalState(true);
      toast.warning("Please fill all the fields!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="card  w-full my-6 max-w-7xl">
      {/* <ToastContainer /> */}
      <div className="card-body custom-body">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="">
            <h1 className="text-4xl font-bold">AI Configure</h1>
            <div className="mb-2">
              <DrawerToggle></DrawerToggle>
            </div>
          </div>

          <div className="mb-4 form-control">
            <label className=" flex flex-col">
              <span className="label text-gray-700 text-lg flex justify-start gap-2">
                <span>Choose Your Topic:</span>
              </span>
              <select
                {...register("subjectSelection", {
                  required: "Please select an item.",
                })}
                {...register("subjectSelection", {})}
                aria-invalid={errors["subjectSelection"] ? "true" : "false"}
                defaultValue={aiConfig?.subjectSelection}
                className="form-select select text-sm h-8 w-full select-ghost  border-secondary text-gray-700"
              >
                <option disabled selected>
                  Subject Selection
                </option>
                <option value="Mathematics">Mathematics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Literature">Literature</option>
                <option value="IT">IT</option>
                <option value="Biology">Biology</option>
                <option value="History">History</option>
                <option value="Psychology">Psychology</option>
                <option value="Economics">Economics</option>
                <option value="Sociology">Sociology</option>
                <option value="Political Science">Political Science</option>
                <option value="Philosophy">Philosophy</option>
                <option value="Art">Art</option>
                <option value="Music">Music</option>
                <option value="Geography">Geography</option>
              </select>
              {errors["subjectSelection"] && (
                <p role="alert" className="text-error mt-2">
                  {errors["subjectSelection"]?.message}
                </p>
              )}
            </label>
          </div>

          {
            // errors will return when field validation fails
            errors["additionalInstruction"] && (
              <p role="alert" className="text-error">
                {errors["additionalInstruction"]?.message}
              </p>
            )
          }

          <div className="flex justify-between mt-2 w-full">
            <p className="mt-4">
              <span className="text-gray-700 text-sm">Step 1 of 2</span>
            </p>
            <button
              disabled={isSubmitting}
              className="btn modal-action btn-secondary text-md shadow-sm tracking-wide font-semibold focus:shadow-primary-text  hover:shadow-primary hover:shadow-info border border-secondary btn-lg"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
