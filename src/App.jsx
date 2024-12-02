import React from "react";
import { Header } from "./home/header/header";


import "./index.css";
import { CarouselMain } from './home/Carousel/CarouselMain';

function App() {
  return (
    <div className="my-app">
      <Header />
      <CarouselMain/>
    </div>
  );
}

export default App;
