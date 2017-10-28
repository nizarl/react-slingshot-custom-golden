/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FuelSavingsPage from '../containers/FuelSavingsPage';
import AboutPage from './AboutPage';
//import ClinicalDocs from '@ctech/clinicaldocs-component';
import MyContainer from '../containers/MyContainer';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'red' };
    return (
      <div>
        <div className="carepro-navbar"> 
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/clinical" activeStyle={activeStyle}>Clinical</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/clinical" component={MyContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
