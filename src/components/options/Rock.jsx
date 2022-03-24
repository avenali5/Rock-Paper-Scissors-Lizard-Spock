import { React, useContext } from "react";
import "../../scss/options.scss";
import { mainContext } from "../Main";

const Rock = () => {
  const { option, setOption, setOptionSelected } = useContext(mainContext);

  const chooseOption = () => {
    setOption("rock");
    setOptionSelected(true);
  };

  return (
    <div className="rock option" onClick={chooseOption}>
      <span>ROCK</span>
      <div className="inner-circle">
        <img src="./assets/rock.svg" alt="" />
      </div>
    </div>
  );
};

export default Rock;
