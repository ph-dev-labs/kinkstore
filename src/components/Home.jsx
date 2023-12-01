import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Services from "./Services.jsx";
import Aside from "./Aside.jsx";
import Collections from "./Collection.jsx";
import BestSelling from "./BestSelling.jsx";
import SellingProductsContainer from "./SellingProductsContainer.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Services />
      <Collections />
      <BestSelling />
      <SellingProductsContainer />
      <Footer />
    </div>
  );
}

export default Home;
