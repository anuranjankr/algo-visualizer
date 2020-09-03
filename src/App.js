import React from "react";
import Bread from "./components/layout/Bread";
import "./App.css";

export default function TemporaryDrawer() {
  return (
    <>
      <div className="app__header">
        <p>~ 𝓐𝓵𝓰𝓸𝓻𝓲𝓽𝓱𝓶&nbsp;&nbsp;𝓥𝓲𝓼𝓾𝓪𝓵𝓲𝔃𝓮𝓻 ~</p>
      </div>
      <div>
        <Bread />
      </div>
    </>
  );
}
