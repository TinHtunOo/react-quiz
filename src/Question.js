import Answer from "./Answer";
import { useQuiz } from "./context/QuizContext";

function Question() {
  const { questions, index, answer, dispatch } = useQuiz();
  const currentQue = questions.at(index);
  return (
    <div>
      <h3>{currentQue.question}</h3>
      <Answer currentQue={currentQue} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
