import React, { useState } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import ImageLinkForm from "./ImageLinkForm";
import Rank from "./Rank";

function App() {
  const [input, setInput] = useState("");

  // function handleInput(e) {
  //   setInput(e.target.value);
  // }
  // console.log(onChange);
  return (
    <div>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onChange={(e) => setInput(e.target.value)} />
      {/* You should import and render FaceRecognition here */}
    </div>
  );
}

export default App;
