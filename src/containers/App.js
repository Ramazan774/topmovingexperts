import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Paragraph from "../components/Paragraph";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Footer from "../components/Footer";
import MainParagraph from "../components/MainParagraph";
import "./App.css";

class App extends Component {

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        return (
            <div className="main-container" style={{backgroundColor: "#fffafa"}}>
                <NavBar>
                    <SearchBox searchChange={this.onSearchChange} />
                </NavBar>
                <Paragraph />
                <Scroll>
                    <CardList />
                    <MainParagraph />
                    <Footer />
                </Scroll>              
            </div>
        );
    }
}

export default App;