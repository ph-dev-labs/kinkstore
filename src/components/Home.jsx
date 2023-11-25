import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Services from "./Services.jsx";
import Aside from "./Aside.jsx";
import Collections from "./Collection.jsx";
function Home() {
  return (
    <div>
      <Aside />
      <Header />
      <Main />
      <Services />
      <Collections />
    </div>
  );
}

export default Home;
