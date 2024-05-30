import React from "react";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";

export default function RenderChoice({ choice }) {
  const imageSrc = {
    paper: paper,
    rock: rock,
    scissors: scissors,
  }[choice];

  return (
    <div
      className={`z-0 rounded-full p-7 bg-primary-${
        choice && choice.charAt(0).toUpperCase() + choice.slice(1)
      }`}
    >
      <div className="w-fit h-fit p-14 rounded-full bg-white">
        <img src={imageSrc} alt={choice} />
      </div>
    </div>
  );
}
