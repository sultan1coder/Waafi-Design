import { useState } from "react";
import "./styles/style.css";
import "./styles/hero2.css"
import "./styles/hero3.css"
import Header from "./components/header";
import Hero from "./components/hero";
import Hero2 from "./components/hero2"
import Hero3 from "./components/hero3";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <div>
      <Header toggleMenu={toggleMenu} />
      <Hero isMenuVisible={isMenuVisible} />
      <Hero2 />
      <Hero3 />
    </div>
  );
}

export default App;