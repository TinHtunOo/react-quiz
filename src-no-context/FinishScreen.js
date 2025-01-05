function FinishScreen({ point, totalPoint, highscore, dispatch }) {
  const percent = Math.ceil((point / totalPoint) * 100);
  return (
    <>
      <p className="result">
        You score {point} out of {totalPoint} ({percent}%)
      </p>
      <h4 className="highscore">highscore : {highscore}</h4>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "resetQuiz" })}
      >
        Reset
      </button>
    </>
  );
}

export default FinishScreen;
