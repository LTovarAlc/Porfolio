import React from "react";
import "./home.css";
import Presentation from "../Components/Presentation/presentation";
import About from "../Components/About/about";
import Trailer from "../trailer";

const Home = () => {
  return (
    <>
      <section className="presentation-about__container">
        <Presentation />
        <About />
        <Trailer />
      </section>
    </>
  );
};

export default Home;
