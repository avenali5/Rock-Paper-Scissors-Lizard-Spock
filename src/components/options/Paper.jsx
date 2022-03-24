import { React, useContext } from "react";
import "../../scss/options.scss";
import { mainContext } from "../Main";

const Paper = () => {
  const { option, setOption, setOptionSelected } = useContext(mainContext);

  const chooseOption = () => {
    setOption("paper");
    setOptionSelected(true);
  };

  return (
    <div className="paper option" onClick={chooseOption}>
      <span>PAPER</span>
      <div className="inner-circle">
        <img src="./assets/paper.svg" alt="" />
      </div>
    </div>
  );
};

export default Paper;
