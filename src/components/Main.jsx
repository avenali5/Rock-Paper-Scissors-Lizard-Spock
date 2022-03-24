import React, { Component, createContext, useState } from "react";
import Ending from "./Ending";
import Game from "./Game";
import Result from "./Result";
import Rules from "./Rules";
import Topbar from "./TopBar";

export const mainContext = createContext(null);

const Main = () => {
  const [option, setOption] = useState("");
  const [optionSelected, setOptionSelected] = useState(false);
  const [losses, setLosses] = useState(0);
  const [wins, setWins] = useState(0);
  const [result, setResult] = useState("");
  const [houseChoice, setHouseChoice] = useState("");

  const openRules = () => {
    let rulesContainer = document.querySelector(".whole-rules-container");
    rulesContainer.style.display = "flex";
  };

  return (
    <mainContext.Provider
      value={{
        option,
        setOption,
        optionSelected,
        setOptionSelected,
        losses,
        setLosses,
        wins,
        setWins,
        result,
        setResult,
        houseChoice,
        setHouseChoice,
      }}
    >
      <img src="./assets/glass.png" className="glass" />
      <div className="game-container">
        <Rules />
        <Topbar />
        <Game />
        <Ending />
        {optionSelected ? <Result /> : ""}
        <div className="rules-button" onClick={openRules}>
          RULES
        </div>
      </div>
    </mainContext.Provider>
  );
};

export default Main;
