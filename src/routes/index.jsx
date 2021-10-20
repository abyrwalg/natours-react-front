import React from 'react';

import { Route, Switch } from 'react-router-dom';
import ToursListPage from '../pages/ToursListPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ToursListPage} />
    </Switch>
  );
}
