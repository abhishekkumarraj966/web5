import React from "react";
import Home from "./Home";

import Hero from "./Hero";
import Product from "./Product";
import Categories from "./Categories";
import Articles from "./Articles";
import Galleary from "./Gallery";
import Reviews from "./Reviews";
import Feedbackform from "./Feedbackform";
import Appoinment from "./Appoinment";
import BussinessHours from "./BussinessHours";
import ContactUs from "./ContactUs";
const Layout = () => {
  return (
    <div>
      <Home />
      <Hero />
      <Product />
      <Categories />
      <Articles />
      <Galleary />
      <Feedbackform />
      <Reviews />
      <BussinessHours />
      <ContactUs />
      <Appoinment />
    </div>
  );
};

export default Layout;
