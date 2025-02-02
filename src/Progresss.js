import { useQuiz } from "./context/QuizContext";

function Progresss() {
  const { index, questions, answer, point, totalPoint } = useQuiz();
  return (
    <header className="progress">
      <progress
        className=""
        max={questions.length}
        value={index + Number(answer !== null)}
      />
      <p>
        Question<strong>{index + 1}</strong>/<strong>{questions.length}</strong>
      </p>
      <p>
        <strong>{point}</strong>/<strong>{totalPoint}</strong>
      </p>
    </header>
  );
}

export default Progresss;
