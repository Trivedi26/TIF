import React from 'react'
import AboutUsStyle from './AboutUsStyle'
import aboutus from '../../images/AboutUs.png'
import { Grid } from '@mui/material';

export const AboutUs = () => {

    const classes=AboutUsStyle()
    
  return (
    <div className={classes.aboutMain}>
    <Grid container spacing={{ xs:2,sm:2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid item xs={12} sm={6} md={6}>
    <div className={classes.pic}>
     <img src={aboutus} alt='truck'/>
    </div>
    </Grid>
    <Grid item xs={12} sm={6} md={6}>
    <div className={classes.con}>
    <div className={classes.aboutUs}>
       About Us
    </div>

    <div className={classes.content}>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. t has survived not only five
      centuries.
    </div>
    <div className={classes.button} >
    <button className={classes.buttonA}>Read More</button>
    </div>
    </div>
    </Grid>
    </Grid>
  </div>
  )
}
