import React, { Fragment } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme =>
  createStyles({
    txtwidth: {
      width: '100%',
      marginTop: 30,
    },
    flexButton: {
      marginTop: 30,
      textAlign: 'right',
    },
  }),
);

export default function ForgotPassword() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  return (
    <Fragment>
      <h2>Forgotten Password ?</h2>
      <p>
        Enter the email address associated with your account, and we'll email
        you a link to reset your password.
      </p>
      <form>
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          className={classes.txtwidth}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.txtwidth}
        >
          Send Reset Link
        </Button>
        <div className={classes.flexButton}>
          <Link to="/auth/login">
            <Button variant="contained" color="secondary">
              Back to Login
            </Button>
          </Link>
        </div>
      </form>
    </Fragment>
  );
}
