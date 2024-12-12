import Answer from "./Answer";

function Question({ questions, index, answer, dispatch }) {
  const currentQue = questions.at(index);
  return (
    <div>
      <h3>{currentQue.question}</h3>
      <Answer currentQue={currentQue} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
