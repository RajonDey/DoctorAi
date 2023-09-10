import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useContext, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../../Contexts/UserContext/UserContext";
import AuthProvider from "../../../../components/Authentication/AuthProvider/AuthProvider";
import app from "../../../../configs/firebase.config";
import logo from "../../../../assets/img/logo.png";

const auth = getAuth(app);
const LoginForm = () => {
  const { signin } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //! login By User Email
    signin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Login.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        const addedUser = {
          name: user.displayName,
          email: user.email,
          pic: user.photoURL,
          uid: user?.uid,
          userAbout: "user",
          verified: user?.emailVerified,
        };

        //! Save User info to the database....
        fetch("https://neuronex-server.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addedUser),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            localStorage.setItem("token", result.token);
            localStorage.setItem("user_id", result._id);
            navigate(from, { replace: true });
          });
      })

      .catch((error) => {
        console.log(error);
        toast.error("Something is wrong! Please Check and Try again", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleTestUser = () => {
    const userEmail = "paradoxtechbd@outlook.com";
    const userPassword = "neuronex";

    // Call handleLogin with the test user credentials
    handleLogin({
      preventDefault: () => {},
      target: {
        email: { value: userEmail },
        password: { value: userPassword },
      },
    });
  };

  //! handle Forget Password
  const handleEmailForResetPassword = (e) => {
    const email = e.target.value;
    setUserEmail(email);

    console.log(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      toast.error("Please enter your email address", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      sendPasswordResetEmail(auth, userEmail)
        .then(() => {
          toast.info("password reset sent", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((er) => {
          toast.error(er.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.error(er);
        });
    }
  };

  if (user?.uid && localStorage.getItem("token")) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div
      className=" lg:flex  justify-center  w-3/4 bg-grey mx-auto border rounded-xl border-grey pl-10 "
      style={{
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        background:
          'url("http://rdcircles.com/wp-content/uploads/2023/09/Ellipse-Round-Square-Pattern.png")',
      }}
    >
      <ToastContainer />

      <div className="lg:w-1/2 h-[80vh] lg:flex items-center relative ">
        <div className=" ">
          <img src={logo} alt="" className="w-14 h-14 " />
          <h1 className="font-serif font-bold text-left text-5xl text-white w-full  pb-0">
            DoctorAi
          </h1>
          <p className="font-serif  text-left text-sm text-white w-full pb-10 pt-0  ">
            Assistance for Your Questions
          </p>
          <p className="text-md pb-16 pr-8">
            Welcome to DoctorAi, your trusted source of medical assistance for
            all your questions and concerns. Our Login Page is your gateway to a
            world of healthcare knowledge and support. Whether you're a
            healthcare professional, a patient, or simply curious, we're here to
            provide you with the answers and guidance you need. Join us today
            and take the first step towards a healthier, more informed tomorrow.
            Login and let's embark on this journey together.
          </p>

          <div className="absolute lg:bottom-0 lg:left-0 font-serif  text-left text-sm text-white w-full pb-6 ">
            <p>Contact</p>
            <p>info@doctorai.com | 753-961-7319</p>
          </div>
        </div>
      </div>
      <div className=" lg:flex items-center justify-center lg:h-[85vh]  lg:w-1/2  ">
        <div className="max-w-xl border rounded-2xl w-full ">
          <div className="card shadow-transparent/20 shadow-primary border rounded-2xl  ">
            <div className="card-body  bg-off-white border rounded-2xl  ">
              <h3 className="font-serif font-semibold text-center text-2xl text-black w-full  ">
                Login
              </h3>
              <p className="text-black pb-10 text-center">
                Welcome back, Please login to your account.
              </p>
              <form onSubmit={handleLogin}>
                <div className="form-control pb-5">
                  {/* <label className="label">
                    <span className="label-text text-md text-secondary mb-1">
                      Email
                    </span>
                  </label> */}
                  <input
                    onBlur={handleEmailForResetPassword}
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-secondary border-white  focus:border-l-2  focus:border-l-black  border-solid  bg-white  text-md py-5 text-black"
                  />
                </div>

                <div className="form-control my-2">
                  {/* <label className="label">
                    <span className="label-text text-md text-secondary mb-1">
                      Password
                    </span>
                  </label> */}
                  <div className="flex text-xl bg-white border border-white border-solid rounded-lg  ">
                    <input
                      type={changePassword ? "password" : "text"}
                      name="password"
                      placeholder="password"
                      className="input focus:outline-none bg-white  w-full text-black text-lg py-5 focus:border-l-black focus:border-l-2 border-white  "
                    />
                    <span
                      className=" flex items-center mx-2  cursor-pointer text-black"
                      onClick={() => {
                        setChangePassword(changeIcon);
                      }}
                    >
                      {changeIcon ? <BsEyeSlashFill /> : <BsEyeFill />}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <label className="label">
                      <p
                        onClick={handleForgetPassword}
                        className="label-text-alt  text-black text-sm link link-hover hover:underline text-start py-5 "
                      >
                        Forgot password?
                      </p>
                    </label>
                    <label className="label">
                      <p className="label-text-alt text-black link text-sm link-hover hover:underline text-start py-5">
                        <Link to="/register">create a new account</Link>
                      </p>
                    </label>
                  </div>
                </div>

                <div className="form-control mt-6 ">
                  <button className="btn text-md  btn-black text-white  w-full hover:bg-white hover:border-black hover:border-solid hover:text-black  ">
                    Login
                  </button>
                </div>
              </form>
              <button
                onClick={handleTestUser}
                className="btn mt-2 text-md  bg-white text-black border-solid  border-black w-full  hover:text-white rounded-lg  "
              >
                Test Account
              </button>
              <div className="divider text-md mt-6  text-black ">
                Or Login with
              </div>
              <AuthProvider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
