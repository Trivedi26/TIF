import { makeStyles } from "@mui/styles";

const HeaderStyle=makeStyles({
mainContainer:{
width:'100%',
display:'flex',
flexDirection:'row',
marginBottom:'15vh'
},
subContainer1:{
   width:'100%',
   height:'80vh', 
   paddingLeft:'10%',
   paddingTop:'3%',
   display:'flex',
   flexDirection:'column',
},

subContainer2:{
    width:'100%',
    height:'80vh', 
    display:'flex',
    justifyContent:'flex-end',
    position:'relative',
},

svgs:{
    width:'100%',
    height:'100%',
    position:'absolute',
 right:0,
 top:0,
},
img:{
    width:'98%',
    height:'98%',
},
button:{
    padding:'0.6vw',
    border:'1px solid #fff',
    borderRadius:21,
    color:'#fff',
    fontSize:'1.1vw',
    fontFamily: "Source Sans Pro",
    fontWeight:600,
    letterSpacing:0.48,
    position:'absolute',
    marginTop:'4%',
    marginRight:'3%'
},
truck:{
    width:'15%',
    height:'15%',
    marginBottom:'5%'
},
truckImg:{
    width:'100%',
    height:'100%',
},
head:{
    width:'50%',
    color: "#0E2368",
fontFamily: "Source Sans Pro",
fontSize: "3.5vw",
fontStyle: "normal",
fontWeight: 700,
},
content:{
    width:'50%',
    color: "#444957",
fontFamily: "Open Sans",
fontSize: "1vw",
fontStyle: "normal",
fontWeight: 400,
marginTop:'2%'
},
explore:{
    display: "flex",
    width:'16%',
    padding: "14px 34px",
    alignItems: "flex-start",
    flexShrink: 0,
    borderRadius: 34,
    background: "#E23744",
    color: "#FFF",
fontFamily: "Open Sans",
fontSize: '1.2vw',
fontStyle: "normal",
fontWeight: 700,
letterSpacing: 0.18,
marginTop:'5%'
    }

})

export default HeaderStyle;