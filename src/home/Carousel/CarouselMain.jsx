import React from "react";
import { Carousel } from "./Carousel";
import { CarouselImg } from './CarImages';


import "../home.css";



export const CarouselMain =() =>{
    return(
        <section className="flex items-center justify-center">
            <Carousel/>
            <CarouselImg/>

        </section>
        

    )
}