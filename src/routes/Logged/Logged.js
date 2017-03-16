import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { observer } from 'mobx-react'

import NavBar from 'Components/NavBar';

import NotFound from '../NotFound';
import Matches from '../Matches';
import Home from './screens/Home';

import RecsStore from 'stores/RecsStore';
import MatchStore from 'stores/MatchStore';

@observer
class Logged extends Component {
  constructor(props) {
    super(props);

    this.recsStore = new RecsStore();
  }

  initMatchUpdate() {
    MatchStore.initUpdate();
  }

  componentDidMount() {
    this.recsStore.fetchCore()
    this.initMatchUpdate();
  }

  render() {
    return (
      <div>
        <NavBar />
        assasa
        <Switch>
          <Route exact path="/" render={() => <Home recsStore={this.recsStore} />} />
          <Route exact path="/home" render={() => <Home recsStore={this.recsStore} />} />
          <Route path="/matches" component={Matches} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Logged;
