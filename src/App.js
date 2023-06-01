/** @format */
import React, { useEffect } from "react";
import Img1 from "./images/img1.jpg";
import Img2 from "./images/img2.jpg";
import Dist from "./images/overlay.png";
import hoverEffect from "hover-effect";
import "./App.css";

function App() {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(".img-section"),
      image1: Img1,
      image2: Img2,
      displacementImage: Dist,
    });
  });
  return (
    <div className="App">
      <div className="container">
        <div className="text-section">
          <p className="heading">Image Distortion Effect on Hover..</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis erat sit amet turpis consectetur, vitae varius leo
            placerat. Proin eu maximus libero, at gravida est. Vestibulum arcu
            enim, egestas nec gravida eget, scelerisque nec erat. Fusce volutpat
            ipsum vitae eros maximus, in placerat arcu dignissim. Aenean vitae
            augue leo. Fusce tincidunt porttitor aliquam. Vivamus ante erat,
            placerat a tincidunt vitae, facilisis non velit. Duis mollis massa
            lacus, in vehicula ipsum consequat nec.
          </p>
        </div>
        <div className="img-section"></div>
      </div>
    </div>
  );
}

export default App;
