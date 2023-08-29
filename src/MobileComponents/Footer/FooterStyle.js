import { makeStyles } from "@mui/styles";

const FooterStyle = makeStyles({
  footerParent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    paddingTop:'60px',
    height:'608px'
  },

  footerImage: {
    width: "100%",
    height:'20%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },

  image:{
width:'75px',
height:'58px'
  },

  heading: {
    color: "#0E2368",
    fontFamily: "Source Sans Pro",
    fontSize: "15.771px",
    fontStyle: "normal",
    fontWeight: 600,
    letterSpacing: 0.565,
    marginBottom: "7%",
  },

  contactUs: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    flexShrink: 0,
    height:'20%',
    marginLeft:'10%',
  },

  more: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: "20%",
    flexShrink: 0,
    marginLeft:'10%'
  },
  links: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "20%",
    flexShrink: 0,
    justifyContent:'center',
    alignItems:'center'
  },
  cont1: {
    width: "100%",
    color: "#646874",
    fontFamily: "Source Sans Pro",
    fontSize: "8.762px",
    fontStyle: "normal",
    fontWeight: 400,
    marginBottom:'2%'
  },
  cont2: {
    color: "#646874",
    fontFamily: "Source Sans Pro",
    fontSize: "8.762px",
    fontStyle: "normal",
    fontWeight: 400,
    marginBottom:'4%'
  },
  icons: {
    width:'20%',
    marginBottom: "7%",
    color: "#0E2368",
  display:'flex',
  justifyContent:'space-between',
  },
});

export default FooterStyle;
