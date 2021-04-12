// import { Switch } from '@material-ui/core';
import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Organization from '../Administration/Organization';

const useStyles = makeStyles(theme => ({
  fullWidth: {
    gridColumnStart: 1,
    gridColumnEnd: 4,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#f4f6f8',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  Container: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
}));

function Administration() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container maxWidth="md" classes={{ root: classes.Container }}>
        <Switch>
          <Route
            path="/administration/organization"
            component={Organization}
          />
        </Switch>
      </Container>
    </main>
  );
}

export default withRouter(Administration);
