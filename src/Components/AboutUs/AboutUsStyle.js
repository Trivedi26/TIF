import { makeStyles } from "@mui/styles";

const AboutUsStyle=makeStyles({

aboutMain:{
width:'100%',
display:"flex",
flexDirection:'row',
background: "linear-gradient(90deg, rgba(30, 42, 93, 0.04) 0%, rgba(48, 62, 130, 0.04) 55.51%, rgba(60, 80, 157, 0.04) 100%)"
},

con:{
width:'100%',
height:'50vh',
display:'flex',
flexDirection:'column'
},

 pic:{
    width:'100%',
   height:'50vh',
   display:'flex',
   justifyContent:'center',
}
,
    aboutUs:{
    display: "flex",
    height:'24%',
    alignItems: "flex-start",
    color: "#0E2368",
    fontFamily: "Poppins",
    fontSize: '2.7vw',
    fontStyle: "normal",
    fontWeight: "300",
    marginTop:"4%",
      },

 content:{
width: "60%",
height: "40%",
color: "var(--body, #444957)",
fontFamily: "Open Sans",
fontSize: "1vw",
fontStyle: "normal",
fontWeight: '400',
lineHeight: "180%",
      },

      button:{
width:'100%',
height:'30%'
      },

      buttonA:{
   height:"40%",
      width:"15%",
      borderRadius:20,
      border: 2,
      borderColor:'#000',
      backgroundColor:'#c7344e',
      color:'#fff',
      marginTop:"3%",
      fontSize:'1vw'

      },
    
})

export default AboutUsStyle;