import React, { Component } from "react";
import NavBar from "./NavBar";
import ApiHandler from "../ApiHandler";
const api = new ApiHandler();

class OneBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: []
    };
  }

  componentDidMount() {
    api
      .getOneBeer(`/${this.props.match.params.id}`)
      .then(beer => {
        this.setState({ beer: beer.data });
      })
      .catch(apiError => console.error(apiError));
  }

  render() {
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

export default OneBeer;
