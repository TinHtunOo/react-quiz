function Progresss({ index, numQuestions, answer, point, totalPoint }) {
  return (
    <header className="progress">
      <progress
        className=""
        max={numQuestions}
        value={index + Number(answer !== null)}
      />
      <p>
        Question<strong>{index + 1}</strong>/<strong>{numQuestions}</strong>
      </p>
      <p>
        <strong>{point}</strong>/<strong>{totalPoint}</strong>
      </p>
    </header>
  );
}

export default Progresss;
