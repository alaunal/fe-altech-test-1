import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// -- Pages
import Home from '../pages/Home';
import Series from '../pages/Series';
import Movie from '../pages/Movie';
import Error from '../pages/Error';

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/series" exact component={Series} />
        <Route path="/movie" exact component={Movie} />

        {/* 404 */}
        <Route
          render={(props) => (
            <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
          )}
        />
      </Switch>
    </Router>
  );
};

export default routes;
