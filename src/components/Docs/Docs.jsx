import YouTubeEmbed from "../video/YouTubeEmbed";

const Docs = () => {
  return (
    <div className=" py-[5.6rem] text-sm">
      <div className="mx-auto max-w-[120rem] px-8 flex flex-col space-y-[80px] ">
        <h2 className="text-3xl font-bold ">Let Us help you to use this</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Main />
      </div>
    </div>
  );
};

const Main = () => {
  const faq = [
    {
      question: "What is the session feature?",
      answer:
        "The session feature is a unique session Id that is generated for every session. This allows the application to save and load messages from the backend according to the session Id.",
    },
    {
      question: "What AI model is used?",
      answer:
        "The AI model used is Open AI's GPT-3.5-turbo model. It is super fast and cost effective (10X cheaper than text-davinchi model).",
    },
    {
      question: "Can I save my sessions?",
      answer:
        "Yes, you can save your sessions by clicking on the save 💖 icon.",
    },
    {
      question: "Does the AI remember previous responses?",
      answer:
        "Yes, the AI can currently remember last 2 responses. This number can be increased at backend.",
    },
    {
      question: "Is there a voice writing feature?",
      answer: "Yes, there is a voice writing feature available.",
    },
  ];

  return (
    <div className="">
      <div className="my-10">
        <div className="flex flex-col max-w-7xl mx-auto">
          <FaqSection data={faq} />
        </div>
      </div>
    </div>
  );
};
const FaqSection = ({ data }) => {
  return (
    <div>
      <div className="">
        <div className="">
          <p className="text-3xl font-bold text-center mb-4">
            Related questions
          </p>
        </div>
        <div className="mx-2">
          {data.map((f) => (
            <details
              className="py-3 border-b md:w-80 hover:cursor-pointer"
              key={f.question}
            >
              <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
                {f.question}
              </summary>
              <p className="text-dark-grayish-blue text-xs font-normal">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Docs;
