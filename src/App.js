import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import Faculty from "./components/Faculty";
import Card from "./components/Card";
import Admission from "./components/Admission";
import Contct from "./components/Conatct";
function App() {
  return (
<div>
  <Navbar></Navbar>
  <Hero></Hero>
  <About></About>
  <Academics></Academics>
  <Faculty></Faculty>
  <Card></Card>
  <Admission></Admission>
  <Contct></Contct>
</div>
  );
}

export default App;
