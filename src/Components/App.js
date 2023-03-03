import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import AllBeers from "./AllBeers";
import Favorites from "./Favorites";
import SingleBeer from "./SingleBeer";
import '../CSS/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      favorites: []
    }
  }

  componentDidMount = () => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
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
            <h2>Welcome to our site! Check out our menu!</h2>
          </Route>
          <Route exact path="/allbeers">
            <AllBeers beers={this.state.beers} addFavorite={this.addFavorite} />
          </Route>
          <Route exact path="/favorites">
            <Favorites favorites={this.state.favorites} beers={this.state.beers} />
          </Route>
          <Route path="/:beername" render={({ match }) => <SingleBeer name={match.params.beername} beers={this.state.beers} />} />
        </Switch>
      </main>
    )
  }
}

export default App