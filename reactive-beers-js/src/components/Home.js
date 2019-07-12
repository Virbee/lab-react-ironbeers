import React from "react";
import { Link } from "react-router-dom";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import AllBeers from "./AllBeers";

function Home() {
  return (
    <section className="nav-container">
      <Link to="/beers" component={AllBeers}>
        <div className="part-container">
          <img src="./img/beers.png" alt="nice pic" />
          <div>
            <h1>All Beers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
              amet mattis tellus, eu fringilla ante. In rhoncus ante porta ipsum
              molestie, eleifend eleifend est elementum.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/random-beer" component={RandomBeer}>
        <div className="part-container">
          <img src="./img/random-beer.png" alt="nice pic" />
          <div>
            <h1>Random Beer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
              amet mattis tellus, eu fringilla ante. In rhoncus ante porta ipsum
              molestie, eleifend eleifend est elementum.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/new-beer" component={NewBeer}>
        <div className="part-container">
          <img src="./img/new-beer.png" alt="nice pic" />
          <div>
            <h1>New Beer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
              amet mattis tellus, eu fringilla ante. In rhoncus ante porta ipsum
              molestie, eleifend eleifend est elementum.
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Home;
