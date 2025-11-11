import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/style.css";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);
//  useEffect(() => {
//    AOS.init({
//      duration: 1000,
//      once: true,
//      offset: 100,
//    });

//    setTimeout(() => AOS.refresh(), 500);
  //  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true, 
        offset: 100, 
      });

      window.addEventListener("load", () => AOS.refresh());
    }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Footer/>
    </>
  );
}

export default App;
