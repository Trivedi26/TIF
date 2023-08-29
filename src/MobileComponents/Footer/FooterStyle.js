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
    width: "80%",
    flexShrink: 0,
    height:'30%',
    marginRight:'20%'
  },

  more: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: "30%",
    flexShrink: 0,
    marginRight:'20%'
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
    marginBottom:'6%'
  },
  cont2: {
    color: "#646874",
    fontFamily: "Source Sans Pro",
    fontSize: "8.762px",
    fontStyle: "normal",
    fontWeight: 400,
    marginBottom:'6%'
  },
  icons: {
    width:'30%',
    marginBottom: "7%",
    color: "#0E2368",
  display:'flex',
  justifyContent:'space-between',
  },
});

export default FooterStyle;
