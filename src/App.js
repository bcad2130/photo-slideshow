import "./styles.css";
import React, { useState } from "react";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

const Loading = () => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value="50"></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project <br /> by Ella Fieldling
        </h2>
      </header>

      <figure>
        <Loading />
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        <img alt="" onClick={handleClick} src={images[currentImage]} />
      </figure>
    </section>
  );
};

export default App;
