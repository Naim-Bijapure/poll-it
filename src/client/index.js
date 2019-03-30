import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import {StoreContext} from 'redux-react-hook';
import configureStore from '../common/store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationRoutes from './../common/routes';
import './index.css'
const store = configureStore(window.__PRELOADED_STATE__);
 console.log('clientjs code ');
 
hydrate(
  <StoreContext.Provider value={store}>
  {/* <Provider store={store}> */}
    <Router>
      <NavigationRoutes />
    </Router>
   {/* </Provider>, */}
   </StoreContext.Provider>,
  
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}