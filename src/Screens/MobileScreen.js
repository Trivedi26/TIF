import React from 'react'
import {Header} from '../MobileComponents/Header/Header'
import { AboutUs } from "../MobileComponents/AboutUs/AboutUs";
import { Footer } from "../MobileComponents/Footer/Footer";
import { Carousel } from "../MobileComponents/Carousel/Carousel";

export default function MobileScreen() {
  return (
    <div>
    <Header />
    <AboutUs/>
    <Carousel/>
    <Footer/>
  </div>
  )
}
