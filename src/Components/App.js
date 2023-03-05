import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import AllBeers from "./AllBeers";
import Favorites from "./Favorites";
import SingleBeer from "./SingleBeer";
import '../CSS/App.css';
import fetchBeerData from "../APIFetchCall";

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      favorites: []
    }
  }

  componentDidMount = () => {
    fetchBeerData()
      .then(data => this.setState({ beers: data }))
  }

  addFavorite = (newFavorite) => {
    const find = this.state.favorites.find(favorite => newFavorite === favorite)

    if (find === undefined) {
      this.setState({ favorites: [...this.state.favorites, newFavorite] })
    }
  }

  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/">
            <section className="info-text-container">
              <h2>Welcome to the BierGarten!</h2>
              <h2> For information about all of our beers, click the beers tab in the menu</h2>
              {/* <h2>If you would like to favorite a beer, simply click the add to favorite button on your desired brew</h2> */}
            </section>
          </Route>
          <Route exact path="/allbeers">
            <AllBeers beers={this.state.beers} addFavorite={this.addFavorite} />
          </Route>
          <Route exact path="/favorites">
            <Favorites favorites={this.state.favorites} beers={this.state.beers} />
          </Route>
          <Route path="/beers/:beerid" render={({ match }) => <SingleBeer id={match.params.beerid} />} />
        </Switch>
      </main>
    )
  }
}

export default App