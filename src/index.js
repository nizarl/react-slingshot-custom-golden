/*eslint no-unused-vars: */

import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import configureStore, {history} from './store/configureStore';
import Root from './components/Root';
import './styles/styles.scss';
/**
  * We are doing component lazy load on route in App.js. 
  * Therefore, we import component SCSS file below.
  * If we did not lazy load the component import below would not be necessary.
*/
import '../node_modules/@ctech/clinicaldocs-component/es/ClinicalDocs.scss';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import neededStyles from '@ctech/shared-ui';
const store = configureStore();

render(
  <AppContainer>
  <Root store={store} history={history}/>
</AppContainer>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./components/Root', () => {
      const NewRoot = require('./components/Root').default;
      render(
        <AppContainer>
        <NewRoot store={store} history={history}/>
      </AppContainer>, document.getElementById('app'));
    });
}
