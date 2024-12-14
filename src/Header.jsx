import "./App.css";
import Button from "./Button";
import { useState } from "react";

function Header() {
  const ButtonText = "GET IN TOUCH";
  return (
    <header className="h-[10vh] w-100% bg-yellow-200 flex justify-between px-48 items-center text-gray-700 px-20 ">
      <strong className="uppercase  ">Conversional</strong>

      <div className=" w-[45%] flex justify-evenly">
        <nav className="flex gap-5 items-center   ">
          <a href="">WHY</a>
          <a href="">HOME</a>
          <a href="">TESTING</a>
          <a href="">BLOG</a>
        </nav>

        <Button ButtonText={ButtonText} />
      </div>
    </header>
  );
}

export default Header;
