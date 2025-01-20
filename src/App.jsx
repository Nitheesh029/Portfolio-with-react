import { useState } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";
import Contact from "./components/Contact";

function App() {
  const navMenus = ["Home", "About", "Experience", "Projects", "Contacts"];
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [showModel, setShowModel] = useState(false);
  function toggleShowModel() {
    setShowModel(!showModel);
  }

  return (
    <div>
      <NavBar
        toggleShowModel={toggleShowModel}
        navMenus={navMenus}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      {showModel && (
        <SideBar
          toggleShowModel={toggleShowModel}
          navMenus={navMenus}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      )}
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
