import { makeStyles } from "@mui/styles";

const FooterStyle = makeStyles({
  footerParent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingTop:'15vh',
  },

  footerImage: {
    height:'40vh',
    width: "100%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginRight:'5%'
  },

  image:{
width:'50%',
height:'40%'
  },

  heading: {
    color: "#0E2368",
    fontFamily: "Source Sans Pro",
    fontSize: "1.2vw",
    fontStyle: "normal",
    fontWeight: 600,
    letterSpacing: 0.565,
    marginBottom: "7%",
  },

  contactUs: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "40vh",
    flexShrink: 0,
    paddingRight: "10%",
  },

  more: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "40vh",
    flexShrink: 0,
  },
  links: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "40vh",
    flexShrink: 0,
  },
  cont1: {
    width: "100%",
    color: "#646874",
    fontFamily: "Source Sans Pro",
    fontSize: "1.2vw",
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
