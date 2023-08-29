import { makeStyles } from "@mui/styles";

const HeaderStyle=makeStyles({
mainContainer:{
width:'100%',
display:'flex',
flexDirection:'row',
marginBottom:'40px'
},
subContainer1:{
   width:'100%',
   height:'220px',
   paddingTop:'3%',
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center'
},

subContainer2:{
    width:'100%',
    height:'414px', 
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
    padding:"4px 33px",
    border:'1px solid #fff',
    borderRadius:21,
    color:'#fff',
    fontSize:'10px',
    fontFamily: "Source Sans Pro",
    fontWeight:600,
    letterSpacing:0.48,
    position:'absolute',
    marginTop:'4%',
    marginRight:'3%'
},
head:{
    color: "#0E2368",
fontFamily: "Source Sans Pro",
fontSize: "38px",
fontStyle: "normal",
fontWeight: 700,
},
content:{
    width:'60%',
    color: "#444957",
fontFamily: "Open Sans",
fontSize: "11px",
fontStyle: "normal",
fontWeight: 400,
marginTop:'2%'
},
explore:{
    display: "flex",
    width:'120px',
    height: "30px",
    padding: "12px 30px",
    justifyContent: "center",
alignItems: "center",
    flexShrink: 0,
    borderRadius: 34,
    background: "#E23744",
    color: "#FFF",
fontFamily: "Open Sans",
fontSize: '12px',
fontStyle: "normal",
fontWeight: 700,
letterSpacing: 0.18,
marginTop:'5%'
    }

})

export default HeaderStyle;