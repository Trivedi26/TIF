import React from 'react'
import HeaderStyle from './HeaderStyle'
import sg from './sidebar.svg'
import pizza from '../../images/PizzaHeader.png'
import truck from '../../images/FoodTruck.png'
import { Grid } from '@mui/material'

export const Header = () => {

    const classes = HeaderStyle();
    
  return (
    <div className={classes.mainContainer}>
        <Grid container spacing={{ xs:2,sm:6, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid item xs={12} sm={6} md={6}>
    <div className={classes.subContainer2}>
    <img src={sg} alt='logo' className={classes.svgs}/>
<img src={pizza} alt='Pizza' className={classes.img}/>
<div className={classes.button}>
  Get In Touch
</div>
    </div>
    </Grid>
        <Grid item xs={12} sm={6} md={6}>
    <div className={classes.subContainer1}>
<div className={classes.head}>
Discover the
</div>
<div className={classes.head}>
<span style={{color:'#E23744'}}>Best</span> Food
</div>
<div className={classes.head}>
and Drinks
</div>

<div className={classes.content}>
Naturally made Healthcare Products for the better care & support of your body.
</div>
<div className={classes.explore}>
  Explore Now
</div>
    </div>
    </Grid>
</Grid>
    </div>
  )
}
