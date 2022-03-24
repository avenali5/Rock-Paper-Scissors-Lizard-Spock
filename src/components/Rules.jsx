import React from "react";
import "../scss/rules.scss";

const closeRules = () => {
  let rulesContainer = document.querySelector(".whole-rules-container");
  rulesContainer.style.display = "none";
};

const Rules = () => {
  return (
    <section className="whole-rules-container">
      <section className="rules-box">
        <div className="title">
          <h2>Rules</h2>
          <svg
            className="close"
            onClick={closeRules}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.25"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.97 0L19.092 2.121L11.667 9.546L19.092 16.971L16.971 19.091L9.546 11.667L2.121 19.092L0 16.97L7.425 9.545L0 2.121L2.121 0L9.546 7.425L16.971 0H16.97Z"
              fill="#3B4262"
            />
          </svg>
        </div>

        <div className="content">
          <img src="./assets/rules.svg" alt="" className="rules-img" />
          <div className="text">
            <h3>You'll get wins and losses.</h3>
            <h3>
              The first that gets to <span>5</span> will determine your fate.
            </h3>
            <h3>Good luck.</h3>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Rules;
