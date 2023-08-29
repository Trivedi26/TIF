import { makeStyles } from "@mui/styles";

const CarouselStyle=makeStyles({
container:{
    width:'100%',
    marginTop:'10vh'
},
heading:{ 
        width: "40%",
        marginLeft:'8%',
        flexShrink: 0,
        color: "#0E2368",
        fontFamily: "Source Sans Pro",
        fontSize: "3vw",
        fontStyle: "normal",
        fontWeight: 600,
        letterSpacing: 2.24,      
},
mainCon:{
    width:'80%',
    marginRight:'8%',
    marginLeft:'8%',
    display:'flex',
    flexDirection:'row',
    marginTop:'3%'
},
card:{
    width: "23vw",
height: "70vh",
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
        fontSize: "1.4vw",
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
fontSize: "1vw",
fontStyle: "normal",
fontWeight: 400,
letterSpacing: "-0.3px",
display:'flex',
alignSelf:'center'
},
rmButton:{
    display: "flex",
    width: "26%",
    height: "7%",
    padding: "1% 3%",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 21,
    border: "1px solid #424961",
    color: "#424961",
fontFamily: "Source Sans Pro",
fontSize: "1.1vw",
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
    height:'4%',
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    marginTop:'5%'
},
buttonAr:{
    width:'2%',
    height:'100%',
    background:'transparent',
    border:'1px solid #424961',
    color:'#424961',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
},
buttonArD:{
    width:'2%',
    height:'100%',
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
    fontSize: "1.4vw",
    fontStyle: "normal",
    fontWeight: 400,
    marginRight:'1%',
    marginLeft:'1%',
    },


})

export default CarouselStyle;