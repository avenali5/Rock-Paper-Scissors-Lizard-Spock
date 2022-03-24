import { React, useContext, useEffect } from "react";
import "../scss/topbar.scss";
import { mainContext } from "./Main";

const Topbar = () => {
  const { wins, losses } = useContext(mainContext);

  return (
    <section className="whole-top-bar-container">
      <article className="top-bar-container">
        <div className="logo-container">
          <img src="./assets/logo.svg" alt="" />
        </div>
        <div className="losses score">
          <span>WINS</span>
          <h3>{wins}</h3>
        </div>
        <div className="score wins">
          <span>LOSSES</span>
          <h3>{losses}</h3>
        </div>
      </article>
    </section>
  );
};

export default Topbar;
