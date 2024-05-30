import React from "react";
import logo from "../images/logo.svg";

export default function Score({ score }) {
  return (
    <div className=" w-1/2 h-2/3 grid grid-cols-2 border-4 border-white rounded-2xl p-10">
      <img className=" place-self-start h-full" src={logo} alt="logo" />
      <div className="place-self-end grid grid-rows-[1fr_2fr] place-items-center bg-white rounded-xl h-full w-1/3 p-5">
        <p>SCORE</p>
        <h3 className=" text-5xl">{score}</h3>
      </div>
    </div>
  );
}
