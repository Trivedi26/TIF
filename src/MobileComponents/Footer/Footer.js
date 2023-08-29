import React from "react";
import FooterStyle from "./FooterStyle";
import FoodTruck from "../../images/FoodTruck.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Grid } from "@mui/material";

export const Footer = () => {
  const classes = FooterStyle();

  return (
    <div className={classes.footerParent}>
      <div className={classes.footerImage}>
        <img src={FoodTruck} alt="Food Truck" className={classes.image}/>
      </div>
      <div className={classes.contactUs}>
        <div className={classes.heading}>Contact Us</div>

        <div className={classes.cont1}>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,XYZ-343434 
        </div>
        <div className={classes.cont1}>
        example2020@gmail.com
        </div>
        <div className={classes.cont1}>
        (904) 443-0343
        </div>
      </div>
      <div className={classes.more}>
        <div className={classes.heading}>More</div>
          <div className={classes.cont1}>About Us</div>
          <div className={classes.cont1}>Products</div>
          <div className={classes.cont1}>Career</div>
          <div className={classes.cont1}>Contact Us</div>
      </div>
      <div className={classes.links}>
      <div className={classes.cont2}>© 2022 Food Truck Example</div>
        <div className={classes.icons}>
          <InstagramIcon sx={{fontSize:'12px'}}/>
          <TwitterIcon sx={{fontSize:'12px'}}/>
          <FacebookIcon sx={{fontSize:'12px'}}/>
        </div>
      </div>
    </div>
  );
};
