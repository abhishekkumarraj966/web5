import React from "react";
import Home from "./Home";

import Hero from "./Hero";

import Categories from "./Categories";
import Articles from "./Articles";
import Galleary from "./Gallery";
import Reviews from "./Reviews";
import Feedbackform from "./Feedbackform";
import Appoinment from "./Appoinment";
import BussinessHours from "./BussinessHours";
import ContactUs from "./ContactUs";
import Certificates from "./Certificates";
import Offers from "./Offers";
import Product from "./Product";
const Layout = () => {
  return (
    <div>
      <Home />
      <Hero />
      <Product />
      <Categories />
      <Offers />
      <Articles />
      <Galleary />
      <BussinessHours />
      <Certificates />
      <Feedbackform />
      <Reviews />
      <Appoinment />
      <ContactUs /> 
    </div>
  );
};

export default Layout;
