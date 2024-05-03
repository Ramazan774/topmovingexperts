import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Paragraph from "../components/Paragraph";
import CardList from "../components/CardList";
import MainParagraph from "../components/MainParagraph";
import Footer from "../components/Footer";
import "./App.css";

class App extends Component {    
    render() {
        return (
            <div className="tc" style={{background: "linear-gradient(to right, #fdfcfb, #e2d1c3)"}}>
                <NavBar />
                <Paragraph />
                <CardList />
                <MainParagraph />
                <Footer />             
            </div>
        );
    }
}

export default App;