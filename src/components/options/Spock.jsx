import { React, useContext } from "react";
import "../../scss/options.scss";
import { mainContext } from "../Main";

const Spock = () => {
  const { option, setOption, setOptionSelected } = useContext(mainContext);

  const chooseOption = () => {
    setOption("spock");
    setOptionSelected(true);
  };

  return (
    <div className="spock option" onClick={chooseOption}>
      <span>SPOCK</span>
      <div className="inner-circle">
        <img src="./assets/spock.svg" alt="" />
      </div>
    </div>
  );
};

export default Spock;
