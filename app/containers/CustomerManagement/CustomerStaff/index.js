/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

function CustomerStaff({ history }) {
  const classes = useStyles();

  // const handleDrawerOpen = () => {
  //   setOpenDrawer(true);
  // };
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography h2>Hello World</Typography>
      </main>
    </div>
  );
}

export default withRouter(CustomerStaff);
