import { React, useContext, useState, useEffect } from "react";
import "../scss/ending.scss";
import { mainContext } from "./Main";

const Ending = () => {
  const { wins, losses } = useContext(mainContext);
  const [finalResult, setFinalResult] = useState("");

  useEffect(() => {
    if (wins == 5) {
      setFinalResult("win");
    } else if (losses == 5) {
      setFinalResult("loss");
    }
  });

  return (
    <section
      className={`whole-ending-container ${
        finalResult.length > 0 ? "ending-visible" : ""
      }`}
    >
      {finalResult == "win" ? (
        <section className="ending-box">
          <h2>Amazing job!</h2>
          <span>
            Here, have some cookies <img src="./assets/cookies.png" alt="" />
          </span>
          <a href="" className="play-again">
            PLAY AGAIN
          </a>
        </section>
      ) : (
        <section className="ending-box">
          <h2>Uhh.. what just happened?</h2>
          <span>C’mon you can do it better</span>
          <a href="" className="play-again">
            PLAY AGAIN
          </a>
        </section>
      )}
    </section>
  );
};

export default Ending;
