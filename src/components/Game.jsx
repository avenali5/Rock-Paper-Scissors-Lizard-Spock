import { React, useContext, useEffect, useState } from "react";
import "../scss/game.scss";
import { mainContext } from "./Main";
import Lizard from "./options/Lizard";
import Paper from "./options/Paper";
import Rock from "./options/Rock";
import Scissors from "./options/Scissors";
import Spock from "./options/Spock";

const Game = () => {
  const { option, setOption, optionSelected, houseChoice, setHouseChoice } =
    useContext(mainContext);

  useEffect(() => {
    const options = ["rock", "paper", "scissors", "lizard", "spock"];
    setHouseChoice(options[Math.floor(Math.random() * options.length)]);
  }, [houseChoice]);

  return (
    <main>
      {!optionSelected ? (
        <section className="selection">
          <div className="options">
            <img src="./assets/pentagon.png" alt="" className="pentagon" />
            <Paper />
            <Scissors />
            <Rock />
            <Lizard />
            <Spock />
          </div>
        </section>
      ) : (
        ""
      )}
    </main>
  );
};

export default Game;
