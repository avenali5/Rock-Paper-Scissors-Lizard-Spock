import { React, useContext, useEffect, useState } from "react";
import { mainContext } from "./Main";
import Lizard from "./options/Lizard";
import Paper from "./options/Paper";
import Rock from "./options/Rock";
import Scissors from "./options/Scissors";
import Spock from "./options/Spock";

const Result = () => {
  const {
    setOptionSelected,
    option,
    result,
    setResult,
    wins,
    setWins,
    losses,
    setLosses,
    houseChoice,
    setHouseChoice,
  } = useContext(mainContext);
  const [playerWins, setPlayerWins] = useState(false);
  const [houseWins, setHouseWins] = useState(false);

  const showResult = () => {
    if (option == "rock") {
      if (houseChoice == "paper" || houseChoice === "spock") {
        setResult("YOU LOSE");
        setLosses(losses + 1 / 2);
        setHouseWins(true);
      } else if (houseChoice === "scissors" || houseChoice === "lizard") {
        setResult("YOU WIN");
        setWins(wins + 1);
        setPlayerWins(true);
      }
    } else if (option == "paper") {
      if (houseChoice == "scissors" || houseChoice === "lizard") {
        setResult("YOU LOSE");
        setLosses(losses + 1 / 2);
        setHouseWins(true);
      } else if (houseChoice === "rock" || houseChoice === "spock") {
        setResult("YOU WIN");
        setWins(wins + 1);
        setPlayerWins(true);
      }
    } else if (option == "scissors") {
      if (houseChoice == "rock" || houseChoice === "spock") {
        setResult("YOU LOSE");
        setLosses(losses + 1 / 2);
        setHouseWins(true);
      } else if (houseChoice === "lizard" || houseChoice === "paper") {
        setResult("YOU WIN");
        setWins(wins + 1);
        setPlayerWins(true);
      }
    } else if (option == "lizard") {
      if (houseChoice == "paper" || houseChoice == "spock") {
        setResult("YOU WIN");
        setWins(wins + 1);
        setPlayerWins(true);
      } else if (houseChoice === "scissors" || houseChoice === "rock") {
        setResult("YOU LOSE");
        setLosses(losses + 1 / 2);
        setHouseWins(true);
      }
    } else if (option == "spock") {
      if (houseChoice == "scissors" || houseChoice == "rock") {
        setResult("YOU WIN");
        setWins(wins + 1);
        setPlayerWins(true);
      } else if (houseChoice === "lizard" || houseChoice === "paper") {
        setResult("YOU LOSE");
        setLosses(losses + 1 / 2);
        setHouseWins(true);
      }
    }
    if (option == houseChoice) {
      setResult("IT'S A TIE");
      setPlayerWins(false);
      setHouseWins(false);
    }
  };

  const resetGame = () => {
    setOptionSelected(false);
    setResult("");
    setHouseChoice(null);
    setPlayerWins(false);
    setHouseWins(false);
  };

  return (
    <section className="result-container">
      <div>
        <div className={`my-choice ${playerWins ? "winner" : ""}`}>
          <span>YOU PICKED</span>
          {option === "paper" ? (
            <Paper />
          ) : option === "rock" ? (
            <Rock />
          ) : option === "scissors" ? (
            <Scissors />
          ) : option === "lizard" ? (
            <Lizard />
          ) : option === "spock" ? (
            <Spock />
          ) : (
            ""
          )}
        </div>
        <div className="result">
          <h2>{result}</h2>
          <a className="play-again" onClick={resetGame}>
            PLAY AGAIN
          </a>
        </div>
        <div
          className={`house-choice ${houseWins ? "winner" : ""}`}
          onAnimationStart={showResult}
        >
          <span>HOUSE PICKED</span>
          {houseChoice === "paper" ? (
            <Paper />
          ) : houseChoice === "rock" ? (
            <Rock />
          ) : houseChoice === "scissors" ? (
            <Scissors />
          ) : houseChoice === "lizard" ? (
            <Lizard />
          ) : houseChoice === "spock" ? (
            <Spock />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Result;
