import React from "react";
import Header from "../../Components/Header";
import Slider from "../Dashboard/Components/Slider";
import Partners from "./Components/Partners";
import Hiring from "./Components/Hiring";
import Countries from "./Components/Countries";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import "./Components/Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Slider />
      <Partners />
      <Hiring />
      <Search />
      <Countries />
      <Footer />
    </>
  );
}
