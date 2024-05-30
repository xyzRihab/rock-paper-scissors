import React from "react";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";
import { useNavigate } from "react-router-dom";

export default function ChoiceButton({ choice, className }) {
  const imageSrc = {
    paper: paper,
    rock: rock,
    scissors: scissors,
  }[choice];

  const navigate = useNavigate();

  const handleChoice = (selectedChoice) => {
    navigate("./result", { state: { choice: selectedChoice } });
  };

  return (
    <button
      onClick={() => handleChoice(choice)}
      className={`z-0 rounded-full p-7 bg-primary-${
        choice && choice.charAt(0).toUpperCase() + choice.slice(1)
      } ${className}`}
    >
      <div className="w-fit h-fit p-14 rounded-full bg-white">
        <img src={imageSrc} alt={choice} />
      </div>
    </button>
  );
}
