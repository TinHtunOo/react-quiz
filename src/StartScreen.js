import { useQuiz } from "./context/QuizContext";

function StartScreen() {
  const { dispatch, questions } = useQuiz();
  return (
    <>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questions.length} questions to test your react mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: "start-quiz" })}>
        Let's Start!
      </button>
    </>
  );
}

export default StartScreen;
