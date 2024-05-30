import React, { useContext, useEffect, useState } from "react";
import logo from "../images/logo.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";

import { useLocation, useNavigate } from "react-router-dom";
import Rules from "./Rules";
import RenderChoice from "./RenderChoice";
import { ScoreContext } from "../ScoreContext";

const choices = {
  rock: { name: "rock", beats: "scissors" },
  paper: { name: "paper", beats: "rock" },
  scissors: { name: "scissors", beats: "paper" },
};

export default function Result() {
  const { score, setScore } = useContext(ScoreContext);
  const location = useLocation();
  const userChoice = location.state?.choice;
  const [houseChoice, setHouseChoice] = useState(null);
  const [result, setResult] = useState("");

  const getRandomChoice = () => {
    return Math.floor(Math.random() * 3);
  };

  const settingHouseChoice = (randChoice) => {
    if (randChoice === 0) {
      setHouseChoice("paper");
    } else if (randChoice === 1) {
      setHouseChoice("rock");
    } else if (randChoice === 2) {
      setHouseChoice("scissors");
    }
  };

  const determineWinner = (user, house) => {
    if (user === house) {
      setResult("draw");
    } else if (choices[user].beats === house) {
      setResult("win");
      setScore(score + 1);
    } else {
      setResult("lose");
    }
  };

  useEffect(() => {
    settingHouseChoice(getRandomChoice());
  }, []);

  useEffect(() => {
    if (houseChoice !== null) {
      determineWinner(userChoice, houseChoice);
    }
  }, [houseChoice]);

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className=" w-screen h-screen bg-Background grid place-items-center grid-rows-[1fr_2fr]">
      <div className=" w-full h-full grid place-items-center">
        <div className=" w-1/2 h-2/3 grid grid-cols-2 border-4 border-white rounded-2xl p-10">
          <img className=" place-self-start h-full" src={logo} alt="logo" />
          <div className="place-self-end grid grid-rows-[1fr_2fr] place-items-center bg-white rounded-xl h-full w-1/3 p-5">
            <p>SCORE</p>
            <h3 className=" text-5xl">{score}</h3>
          </div>
        </div>
      </div>
      <div className=" w-full h-full grid place-items-center">
        <div className=" w-2/3 h-full grid place-items-center grid-cols-2">
          <RenderChoice choice={userChoice} />
          <RenderChoice choice={houseChoice} />
        </div>
        <p>{result}</p>
        <div>
          <button
            onClick={handleReturn}
            className="text-white border-2 border-white px-10 py-1 m-10 rounded-xl"
          >
            Return
          </button>
          <Rules />
        </div>
      </div>
    </div>
  );
}
