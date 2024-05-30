import React, { useContext } from "react";
import triangle from "../images/bg-triangle.svg";

import Rules from "./Rules";
import { ScoreContext } from "../ScoreContext";

import Score from "./Score";
import ChoiceButton from "./ChoiceButton";

export default function Home() {
  const { score } = useContext(ScoreContext);

  return (
    <div className="w-screen h-screen bg-Background grid place-items-center grid-rows-[1fr_2fr]">
      <div className="w-full h-full grid place-items-center">
        <Score score={score} />
      </div>
      <div className="w-full h-full grid place-items-center">
        <div className="w-1/2 h-full grid place-items-center grid-cols-2 grid-rows-2">
          <img className="fixed" src={triangle} alt="bg-rectangle" />
          <ChoiceButton choice="paper" />
          <ChoiceButton choice="scissors" />
          <ChoiceButton choice="rock" className=" col-start-1 col-end-3" />
        </div>
        <div>
          <Rules />
        </div>
      </div>
    </div>
  );
}
