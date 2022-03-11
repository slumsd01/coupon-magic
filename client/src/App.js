import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CouponEntry from './pages/CouponEntry';
import CouponDisplay from './pages/CouponDisplay';
import Login from './pages/Login';
import Signup from './pages/Signup';

// establish a new link to graphql server
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
// instantiate the apollo client instance and create connect to the api endpoint
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/couponentry/:id" component={CouponEntry} />
              {/* <Route exact path="/profile/:username?" component={Profile} /> */}
              <Route exact path="/profile/" component={Profile} />
              {/* <Route exact path="/coupondisplay/:id" component={CouponDisplay} /> */}
              <Route exact path="/coupondisplay/" component={CouponDisplay} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
