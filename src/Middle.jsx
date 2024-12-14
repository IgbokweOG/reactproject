import React from "react";
import Button from "./Button";

function Middle() {
  const ButtonText = " GET HELP WITH LANDING PAGES";
  return (
    <div className="  bg-blue-500 w-[100%] flex justify-center">
      <div className="w-[80%] flex  items-center">
        <img src="public/portraitman.png" alt="" />

        <div className="flex  h-[100%] flex-col px-2 justify-center gap-2">
          <strong className="text-[1.5rem] text-white">
            Get higher conversion <br />
            rates on landing pages
          </strong>

          <h1>
            we help you get more leads by creating and managing high performing
            landing page
          </h1>

          {/* <button className="bg-[orangered] text-white px-3 py-1 rounded-md shadow-lg w-[70%]">
            GET HELP WITH LANDING PAGES
          </button> */}

          <Button ButtonText={ButtonText} />
        </div>
      </div>
    </div>
  );
}

export default Middle;
