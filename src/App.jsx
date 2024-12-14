import { useState } from "react";
import "./App.css";
import Middle from "./Middle";
import Header from "./header";
import Hero from "./Hero";

function App() {
  // let text = "hello";
  // const [variable, variableUpdater]= useState()
  const [text, setText] = useState("hello");
  const [num, setnum] = useState(0);
  const [display, setdisplay] = useState("white");

  const handleClick = () => {
    if (text === "hello") {
      setText("hi");
    } else {
      setText("hello");
    }
  };
  const increaseNum = () => {
    setnum(num + 1);
  };

  const color = ["slate", "orange", "blue", "red"];

  const changeColor = (color) => {
    setdisplay(color);
  };

  return (
    <main>
      <Header />
      <Middle />
      <Hero />
      <div className="flex justify-center items-center h-[30vh] flex-col">
        <h1 className="text-4xl">{text}</h1>
        <button
          className="bg-blue-400 text-white p-2"
          // onClick={() => alert("you just clicked me!")}
          // or*
          onClick={handleClick}
        >
          click me
        </button>

        <h1 className="text-4xl">{num}</h1>
        <button className="bg-blue-400 text-white p-2" onClick={increaseNum}>
          increase
        </button>
      </div>

      <div className="flex justify-around items-center h-[80vh] w-[100%] flex-row bg-yellow-50">
        <button
          className="bg-slate-500 p-2"
          Key={color}
          onClick={() => changeColor(color)}
        >
          slate
        </button>
        <button
          className="bg-orange-400 p-2"
          key={color}
          onClick={() => changeColor(color)}
        >
          orange
        </button>
        <button
          className="bg-blue-300 p-2"
          key={color}
          onClick={() => changeColor(color)}
        >
          blue
        </button>
        <button
          className="bg-red-400 p-2"
          key={color}
          onClick={() => changeColor(color)}
        >
          red
        </button>
      </div>
    </main>
  );
}

export default App;

// text === "hi"  setText("hello") : setText("hi");
// alert("you just clicked me");
