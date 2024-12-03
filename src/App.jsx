import React from "react";
import { Header } from "./home/header/header";
import {ShopSweater} from './home/ShopSweaters/ShopSweaters'
import {MenWomen} from './home/MenWomen/MenWomen'
import {Press} from './home/Press/Press'
import {WomenModel} from './home/WomenModel/WomenModel'

import "./index.css";
import { CarouselMain } from './home/Carousel/CarouselMain';

function App() {
  return (
    <div className="my-app">
      <Header />
      <CarouselMain/>
      <ShopSweater/>
      <MenWomen/>
      <Press/>
      <WomenModel/>
    </div>
  );
}

export default App;
