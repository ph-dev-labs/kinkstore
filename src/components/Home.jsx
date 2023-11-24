import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Services from "./Services.jsx";
import Aside from "./Aside.jsx";
import Button from './Collection.jsx'
function Home() {
  return (
    <div>
      <Aside/>
      <Header />
      <Main />
      <Services />
    </div>
  );
}

export default Home;
