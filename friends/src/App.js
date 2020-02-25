import React from 'react';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


import {Grommet, Box} from 'grommet';
import theme from './theme';

function App() {
  return (
    <Router>
   <Grommet theme={theme}>
      <Box flex>
        
      </Box>
   </Grommet>
   </Router>

  );
}

export default App;
