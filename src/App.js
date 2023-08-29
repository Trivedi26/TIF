import React from "react";
import DesktopScreen from "./Screens/DesktopScreen";
import MobileScreen from "./Screens/MobileScreen";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return width < breakpoint ? <MobileScreen/> : <DesktopScreen />;
}

export default App;
