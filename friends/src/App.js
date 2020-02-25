import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import { Grommet, Box, Anchor } from 'grommet';
import theme from './theme';
import { Favorite } from 'grommet-icons';

import PrivateRoute from './components/PrivateRoute';
import AppBar from './components/AppBar';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

const StyledLink = (props) => (
  <Link to={props.to} style={{ textDecoration: 'none' }}>
    <Anchor margin='medium'> {props.children} </Anchor>
  </Link>
)

function App() {
  return (
    <Router>
      <Grommet theme={theme}>
        <Box flex>
          <AppBar icon={<Favorite />}>
            <StyledLink to='/friendslist'>Friendslist</StyledLink>
            <StyledLink to='/login'>Login</StyledLink>
          </AppBar>
          <Switch>
            <PrivateRoute path="/friendslist" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
          </Switch>
        </Box>
      </Grommet>
    </Router>

  );
}

export default App;
