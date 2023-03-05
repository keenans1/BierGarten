import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import AllBeers from "./AllBeers";
import Favorites from "./Favorites";
import SingleBeer from "./SingleBeer";
import Error from "./Error";
import Home from "./Home";
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
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/allbeers" render={() => <AllBeers beers={this.state.beers} addFavorite={this.addFavorite} />} />
          <Route exact path="/favorites" render={() => <Favorites favorites={this.state.favorites} beers={this.state.beers} />} />
          <Route path="/beers/:beerid" render={({ match }) => <SingleBeer id={match.params.beerid} />} />
          <Route path="/:error" render={() => <Error />} />
        </Switch>
      </main>
    )
  }
}

export default App