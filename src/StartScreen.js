function StartScreen({ dispatch, length }) {
  return (
    <>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{length} questions to test your react mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: "start-quiz" })}>
        Let's Start!
      </button>
    </>
  );
}

export default StartScreen;
