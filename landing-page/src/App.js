import React from "react";
import "./index.css";
import Nav from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Cards";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Nav />
      <Jumbotron />
      <Card
    title="Card Title"
    description1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
    description2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
    buttonLabel="Find Out More!"
    imgURL="http://placehold.it/500x325"/>
      <Footer />
    </>
  );
}

export default App;