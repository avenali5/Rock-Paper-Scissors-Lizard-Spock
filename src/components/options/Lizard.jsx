import { React, useContext } from "react";
import "../../scss/options.scss";
import { mainContext } from "../Main";

const Lizard = () => {
  const { option, setOption, setOptionSelected } = useContext(mainContext);

  const chooseOption = () => {
    setOption("lizard");
    setOptionSelected(true);
  };

  return (
    <div className="lizard option" onClick={chooseOption}>
      <span>LIZARD</span>
      <div className="inner-circle">
        <img src="./assets/lizard.svg" alt="" />
      </div>
    </div>
  );
};

export default Lizard;
