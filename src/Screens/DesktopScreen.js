import React from 'react'
import {Header} from '../DesktopComponents/Header/Header'
import { AboutUs } from "../DesktopComponents/AboutUs/AboutUs";
import { Footer } from "../DesktopComponents/Footer/Footer";
import { Carousel } from "../DesktopComponents/Carousel/Carousel";

export default function DesktopScreen() {
  return (
    <div>
    <Header />
    <AboutUs/>
    <Carousel/>
    <Footer/>
  </div>
  )
}
