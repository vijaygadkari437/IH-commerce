import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import LoginImg from '../../images/login.jpg';
import { Login, ResetPassword, ForgotPassword } from './components';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    txtwidth: {
      width: '100%',
      marginTop: 30,
    },
    FormControl: {
      width: '100%',
    },
    loginImg: {
      width: '100%',
      height: '100vh',
    },
    linkstyle: {
      marginTop: 10,
    },
    loginform: {
      maxWidth: '70%',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      minHeight: '100vh',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '90%',
      },
      '& h2': {
        fontSize: 30,
        marginBottom: 10,
        marginTop: 0,
      },
      '& p': {
        fontSize: 16,
        marginTop: 0,
      },
      '& TextField': {
        width: '100%',
      },
    },
  }),
);

function LoginPage() {
  const classes = useStyles();

  return (
    <Grid container>
      <Hidden xsDown>
        <Grid item sm={7}>
          <img src={LoginImg} className={classes.loginImg} />
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={5}>
        <div className={classes.loginform}>
          <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/reset-password" component={ResetPassword} />
            <Route path="/auth/forgot-password" component={ForgotPassword} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
        </div>
      </Grid>
    </Grid>
  );
}
export default withRouter(LoginPage);
