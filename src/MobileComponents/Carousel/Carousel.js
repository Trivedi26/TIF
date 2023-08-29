import React,{useState} from 'react';
import CarouselStyle from './CarouselStyle';
import { Grid } from '@mui/material';
import CData from './CarouselData';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const Carousel = () => {

  const [shown,setShown]=useState(1)
  const [leftDisabled,setLeftDisabled]=useState(true)
  const [rightDisabled,setRightDisabled]=useState(false)

    const classes=CarouselStyle()

    const len=CData.length

    const handleChange=(item)=>{
      if(item==='l')
      {
        setShown(sh=>sh-1)  
      }
      else
      {
        setShown(sh=>sh+1)
      }
    }

    React.useEffect(()=>{
if(shown===1)
{
  setLeftDisabled(true)
  setRightDisabled(false)
}
else if(shown===len)
{
  setLeftDisabled(false)
  setRightDisabled(true)
}
else{
  setLeftDisabled(false)
  setRightDisabled(false)
}
    },[shown,len])

  return (
    <div className={classes.container}>
    <div className={classes.heading}>
      Latest Articles
    </div>
     {CData.map((item,index)=>(
    <div index={index} className={item.setId===shown?classes.mainCon:classes.noDisplay}>
    <Grid container spacing={{ xs:2,sm:6, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       { item.items.map((data,id)=>(
          <Grid item xs={12} sm={4} md={4} index={id}>
            <div className={classes.card}>
            <div className={classes.imgContainer}>
              <img src={data.image} alt="img" className={classes.Cimg}/>
              </div>
              <div className={classes.title}>
              {data.title}
              </div>
              <div className={classes.contents}>
              PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
              </div>
              <div className={classes.rmButton}>
                Read more
              </div>
            </div>
          </Grid>
          ))}
      </Grid>
      </div>
      ))}

      <div className={classes.navigate}>
       <button disabled={leftDisabled} onClick={()=>handleChange('l')} className={leftDisabled===true?classes.buttonArD:classes.buttonAr}>
        <ChevronLeftIcon sx={{fontSize:'10px'}}/>
       </button>
       <div className={classes.number}>
        {shown}/{len}
       </div>
       <button disabled={rightDisabled} onClick={()=>handleChange('r')} className={rightDisabled===true?classes.buttonArD:classes.buttonAr}>
        <ChevronRightIcon sx={{fontSize:'10px'}}/>
       </button>
      </div>
      </div>
  )
}
