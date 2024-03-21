import React, { useEffect, useState } from "react";
import About from "./About";
import Event from "./Event";
import Main from "./Main";

const App = () => {
  const [check, setcheck] = useState(false);
  useEffect(() => {
    if (window.outerWidth < 1500) {
      setcheck(true);
    } else {
      setcheck(false);
    }
  }, check);
  return (
    <div>
      <Main />
      <About />

      <Event />
    </div>
  );
};

export default App;
