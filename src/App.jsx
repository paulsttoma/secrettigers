import { useState } from "react";

import Founder from "./components/Founder";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  const [mmAccount, setMmAccount] = useState("");
  const [state, setState] = useState(false);
  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <div className="App">
      <Header
        handleOpen={state}
        toggleDrawer={toggleDrawer}
        mmAccount={mmAccount}
        setMmAccount={setMmAccount}
      />
      <Hero mmAccount={mmAccount} setMmAccount={setMmAccount} />
      <Social />
      <Founder />
      <Footer />
    </div>
  );
}

export default App;
