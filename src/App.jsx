import React from "react";
import { Header } from "./home/header/header";
import {ShopSweater} from './home/ShopSweaters/ShopSweaters'
import {MenWomen} from './home/MenWomen/MenWomen'
import {Press} from './home/Press/Press'
import {WomenModel} from './home/WomenModel/WomenModel'

import "./index.css";
import { CarouselMain } from './home/Carousel/CarouselMain';
import { Cotton } from "./home/Cotton/Cotton";
import { Features } from "./home/Features/Features";
import { Footer } from './home/Footer/Footer';
function App() {
  return (
    <div className="my-app">
      <Header />
      <CarouselMain/>
      <ShopSweater/>
      <MenWomen/>
      <Press/>
      <WomenModel/>
      <Cotton/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
