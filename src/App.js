import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import {
  Landing,
  Cart,
  Details
} from './app/pages';

import {
  Header,
  Footer
} from './app/components'

import store from './store';


const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Landing} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Footer />
      </div>
    </Router>
  </Provider>
);



export default App;