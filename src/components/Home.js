import React, { useContext } from "react";
import triangle from "../images/bg-triangle.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";

import { useNavigate } from "react-router-dom";
import Rules from "./Rules";
import { ScoreContext } from "../ScoreContext";

import Score from "./Score";

export default function Home() {
  const { score } = useContext(ScoreContext);
  const navigate = useNavigate();

  const handleChoice = (selectedChoice) => {
    navigate("./result", { state: { choice: selectedChoice } });
  };

  return (
    <div className="w-screen h-screen bg-Background grid place-items-center grid-rows-[1fr_2fr]">
      <div className="w-full h-full grid place-items-center">
        <Score score={score} />
      </div>
      <div className="w-full h-full grid place-items-center">
        <div className="w-1/2 h-full grid place-items-center grid-cols-2 grid-rows-2">
          <img className="fixed" src={triangle} alt="bg-rectangle" />
          <button
            onClick={() => handleChoice("paper")}
            className="z-0 bg-primary-Paper rounded-full p-5"
          >
            <div className="w-fit h-fit p-10 rounded-full bg-white">
              <img src={paper} alt="paper" />
            </div>
          </button>
          <button
            onClick={() => handleChoice("scissors")}
            className="z-0 bg-primary-Scissors rounded-full p-5"
          >
            <div className="w-fit h-fit p-10 rounded-full bg-white">
              <img src={scissors} alt="scissors" />
            </div>
          </button>
          <button
            onClick={() => handleChoice("rock")}
            className="z-0 col-start-1 col-end-3 bg-primary-Rock rounded-full p-5"
          >
            <div className="w-fit h-fit p-10 rounded-full bg-white">
              <img src={rock} alt="rock" />
            </div>
          </button>
        </div>
        <div>
          <Rules />
        </div>
      </div>
    </div>
  );
}
