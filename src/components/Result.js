import React from "react";
import logo from "../images/logo.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";

import rules from "../images/image-rules.svg";
import closeBtn from "../images/icon-close.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Result() {
  return (
    <div className=" w-screen h-screen bg-Background grid place-items-center grid-rows-[1fr_2fr]">
      <div className=" w-full h-full grid place-items-center">
        <div className=" w-1/2 h-2/3 grid grid-cols-2 border-4 border-white rounded-2xl p-10">
          <img className=" place-self-start h-full" src={logo} alt="logo" />
          <div className="place-self-end grid grid-rows-[1fr_2fr] place-items-center bg-white rounded-xl h-full w-1/3 p-5">
            <p>SCORE</p>
            <h3 className=" text-5xl">12</h3>
          </div>
        </div>
      </div>
      <div className=" w-full h-full grid place-items-center">
        <div className=" w-2/3 h-full grid place-items-center grid-cols-2">

        </div>

        <div>
          <Popup
            contentStyle={{ width: "30%", borderRadius: "10px" }}
            trigger={
              <button className="place-self-end text-white border-2 border-white px-10 py-1 m-10 rounded-xl">
                Rules
              </button>
            }
            modal
          >
            {(close) => (
              <div className=" grid place-items-center">
                <div className="bg-white rounded-lg p-8 max-w-md w-full">
                  <button
                    className="absolute top-1 right-1 p-2 text-gray-600 hover:text-gray-800"
                    onClick={close}
                  >
                    <img src={closeBtn} alt="close" />
                  </button>
                  <img src={rules} alt="rules" className="w-full" />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
}
