import React from "react";
import rules from "../images/image-rules.svg";
import closeBtn from "../images/icon-close.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Rules() {
  return (
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
  );
}
