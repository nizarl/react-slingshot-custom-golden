/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ClinicalDocs from '../containers/ClinicalDocsPage';
import NotFoundPage from './NotFoundPage';
import {appInfo} from '../utils/appinfo.service';
import {patientData} from '../utils/patientdata.service';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
    

class App extends React.Component {
  constructor(props) {
    super(props);
    this.appSettings().set();
    this.patientSettings().set();
    this.state = {patientId: this.patientSettings().get()}; 
  }

  appSettings() {
    return appInfo();
  }

  patientSettings() {
    return patientData();
  }

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
          <Route path="/clinical" render={()=><ClinicalDocs patientId={this.state.patientId}/>} />
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
