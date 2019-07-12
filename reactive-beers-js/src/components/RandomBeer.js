import React, { Component } from "react";
// import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import APIHandler from "../ApiHandler";
const api = new APIHandler();

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: []
    };
  }
  componentDidMount() {
    api.getRandomBeer().then(beer => {
      this.setState({ beer: beer.data });
    });
  }

  render() {
    console.log(this.state.beer);
    return (
      <div className="page-container">
        <NavBar />
        <div className="beer-container">
          <img alt="picturebier" src={this.state.beer.image_url} />
          <h3>{this.state.beer.name}</h3>
          <p>{this.state.tagline}</p>
          <p>{this.state.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
