import { makeStyles } from "@mui/styles";

const AboutUsStyle=makeStyles({

aboutMain:{
width:'100%',
display:"flex",
background: "linear-gradient(90deg, rgba(30, 42, 93, 0.04) 0%, rgba(48, 62, 130, 0.04) 55.51%, rgba(60, 80, 157, 0.04) 100%)"
},

con:{
width:'100%',
height:'516px',
display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:'center'
},
    aboutUs:{
    display: "flex",
    height:'14%',
    alignItems: "flex-start",
    color: "#0E2368",
    fontFamily: "Poppins",
    fontSize: '26px',
    fontStyle: "normal",
    fontWeight: 600,
      },

 content:{
width: "100%",
height: "40%",
color: "var(--body, #444957)",
fontFamily: "Open Sans",
fontSize: "11px",
fontStyle: "normal",
fontWeight: 400,
lineHeight: "180%",
      },

      button:{
width:'100%',
height:'30%',
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
      fontSize:'11px',
      fontWeight:600
      },
    
})

export default AboutUsStyle;