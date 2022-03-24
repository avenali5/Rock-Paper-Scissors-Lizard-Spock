import { React, useContext } from "react";
import "../../scss/options.scss";
import { mainContext } from "../Main";

const Scissors = () => {
  const { option, setOption, setOptionSelected } = useContext(mainContext);

  const chooseOption = () => {
    setOption("scissors");
    setOptionSelected(true);
  };

  return (
    <div className="scissors option" onClick={chooseOption}>
      <span>SCISSORS</span>
      <div className="inner-circle">
        <img src="./assets/scissors.svg" alt="" />
      </div>
    </div>
  );
};

export default Scissors;
