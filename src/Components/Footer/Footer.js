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
       <Grid container spacing={{ xs:2,sm:2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       <Grid item xs={12} sm={3} md={3}>
      <div className={classes.footerImage}>
        <img src={FoodTruck} alt="Food Truck" className={classes.image}/>
      </div>
</Grid>
 <Grid item xs={12} sm={3} md={3}>
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
</Grid>
 <Grid item xs={12} sm={3} md={3}>
      <div className={classes.more}>
        <div className={classes.heading}>More</div>
          <div className={classes.cont1}>About Us</div>
          <div className={classes.cont1}>Products</div>
          <div className={classes.cont1}>Career</div>
          <div className={classes.cont1}>Contact Us</div>
      </div>
</Grid>
 <Grid item xs={12} sm={3} md={3}>
      <div className={classes.links}>
        <div className={classes.heading}>Social Links</div>

        <div className={classes.icons}>
          <InstagramIcon sx={{fontSize:'2vw'}}/>
          <TwitterIcon sx={{fontSize:'2vw'}}/>
          <FacebookIcon sx={{fontSize:'2vw'}}/>
        </div>

        <div className={classes.cont1}>© 2022 Food Truck Example</div>
      </div>
      </Grid>
      </Grid>
    </div>
  );
};
