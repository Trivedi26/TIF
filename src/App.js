import React from "react";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Carousel } from "./Components/Carousel/Carousel";

function App() {
  return (
  <div>
    <Header />
    <AboutUs/>
    <Carousel/>
    <Footer/>
  </div>
  )
}

export default App;
