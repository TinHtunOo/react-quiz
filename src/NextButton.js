import { useQuiz } from "./context/QuizContext";
function NextButton() {
  const { dispatch, answer, index, questions } = useQuiz();

  if (answer === null) return;
  if (index < questions.length - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === questions.length - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finishQuiz" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
