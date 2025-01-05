function Answer({ currentQue, answer, dispatch }) {
  const isAnswer = answer !== null;
  return (
    <div className="options">
      {currentQue.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            isAnswer
              ? index === currentQue.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={isAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Answer;
