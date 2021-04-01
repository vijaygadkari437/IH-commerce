import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { withRouter } from 'react-router';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function CustomerManagement({ history }) {
  const classes = useStyles();
  // const theme = useTheme();

  return <div className={classes.root} />;
}

export default withRouter(CustomerManagement);
