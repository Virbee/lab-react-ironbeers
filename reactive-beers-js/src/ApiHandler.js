import axios from "axios";

class APIHandler {
  constructor() {
    this.BASE_URL = "https://ih-beer-api.herokuapp.com/beers";
    this.api = axios.create({ baseURL: this.BASE_URL });
  }
  getAllBeers() {
    return this.api.get("/");
  }

  getOneBeer(id) {
    return this.api.get(id);
  }

  getRandomBeer() {
    return this.api.get("/random");
  }
}

export default APIHandler;
//get all Beers()

//get random beer()

//get one Beer()

//post new
