import { useEffect } from "react";

function Timer({ dispatch, timer }) {
  const min = Math.floor(timer / 60);
  const sec = timer % 60;
  useEffect(
    function () {
      let time = setInterval(function () {
        dispatch({ type: "timer" });
      }, 1000);
      return () => clearInterval(time);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;
