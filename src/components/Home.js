import React from "react";
import logo from "../images/logo.svg";
import triangle from "../images/bg-triangle.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";

import { useNavigate } from "react-router-dom";
import Rules from "./Rules";

export default function Home() {
  const navigate = useNavigate();

  const handleChoice = (selectedChoice) => {
    navigate("./result", { state: { choice: selectedChoice } });
  };

  return (
    <div className="w-screen h-screen bg-Background grid place-items-center grid-rows-[1fr_2fr]">
      <div className="w-full h-full grid place-items-center">
        <div className="w-1/2 h-2/3 grid grid-cols-2 border-4 border-white rounded-2xl p-10">
          <img className="place-self-start h-full" src={logo} alt="logo" />
          <div className="place-self-end grid grid-rows-[1fr_2fr] place-items-center bg-white rounded-xl h-full w-1/3 p-5">
            <p>SCORE</p>
            <h3 className=" text-5xl">12</h3>
          </div>
        </div>
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
