import { makeStyles } from "@mui/styles";

const CarouselStyle=makeStyles({
container:{
    width:'100%',
    marginTop:'50px'
},
heading:{ 
        width: "100%",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexShrink: 0,
        color: "#0E2368",
        fontFamily: "Source Sans Pro",
        fontSize: "28px",
        fontStyle: "normal",
        fontWeight: 600,
        letterSpacing: 2.24,      
},
mainCon:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    marginTop:'3%',
    justifyContent:'center'
},
card:{
    width: "70%",
    alignSelf:'center',
height: "484px",
flexShrink: 0,
borderRadius: "20.937px",
border: "1.37px solid rgba(147, 162, 211, 0.38)",
background: "#FFF",
padding:'6%',
display:'flex',
flexDirection:'column'
},
imgContainer:{
    width:'100%',
    height:'60%'
},
Cimg:{
    width:'100%',
    height:'100%'
},
title:{
    
        color: "#0E2368",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 700,
        marginTop:'4%',
        marginLeft:'2%',
        marginBottom:'3%'
},

contents:{
    width: "96%",
color: "#444957",
fontFamily: "Open Sans",
fontSize: "12px",
fontStyle: "normal",
fontWeight: 400,
letterSpacing: "-0.3px",
display:'flex',
alignSelf:'center'
},
rmButton:{
    display: "flex",
    width: "40%",
    height: "7%",
    padding: "1% 3%",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 21,
    border: "1px solid #424961",
    color: "#424961",
fontFamily: "Source Sans Pro",
fontSize: "11px",
fontStyle: "normal",
fontWeight: 600,
letterSpacing: 0.493,
marginTop:'6%'
},
noDisplay:{
    display:'none'
},
navigate:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:'5%'
},
buttonAr:{
    width:'12px',
    height:'12px',
    background:'transparent',
    border:'1px solid #424961',
    color:'#424961',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
},
buttonArD:{
    width:'12px',
    height:'12px',
    background:'transparent',
    border:'1px solid #AFAFAF',
    color:'#AFAFAF',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
},
number:{
    color: "#424961",
    fontFamily: "Source Sans Pro",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    marginRight:'1%',
    marginLeft:'1%',
    },


})

export default CarouselStyle;