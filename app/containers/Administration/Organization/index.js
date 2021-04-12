// import { Switch } from '@material-ui/core';
import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Company from './Company';

const useStyles = makeStyles(theme => ({
 
}));

function Organization() {
  return (
      <Switch>
        <Route
          path="/administration/organization/company"
          component={Company}
          exact
        />
      </Switch>
  );
}

export default withRouter(Organization);
