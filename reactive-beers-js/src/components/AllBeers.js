import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import ApiHandler from "../ApiHandler";
const api = new ApiHandler();

class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    api.getAllBeers().then(beers => {
      console.log(beers);

      this.setState({
        beers: beers.data.splice(0, 15)
      });
    });
  }

  render() {
    console.log(this.state.beers);
    return (
      <div className="page-container">
        <NavBar />
        <div className="all-beer-container">
          {this.state.beers.map(beer => (
            <Link key={beer._id} to={`/beers/${beer._id}`}>
              <div className="beer-container">
                <img alt="picturebier" src={beer.image_url} />
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
export default AllBeers;
