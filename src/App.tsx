import React from "react";

// eslint-disable-next-line global-require
const br = require("./images/bottom-right.svg") as string;
// eslint-disable-next-line global-require
const tl = require("./images/top-left.svg") as string;

// import br from "./images/bottom-right.svg";
// import tl from "./images/top-left.svg";

function App() {
  return (
    <>
      <img src={tl} alt="" className="absolute" />
      <img src={br} alt="" className="absolute bottom-0 right-0" />
      <div className="flex min-h-screen items-center justify-center bg-slate-800">
        <h1 className="text-9xl text-white">Hi !</h1>
      </div>
    </>
  );
}

export default App;
