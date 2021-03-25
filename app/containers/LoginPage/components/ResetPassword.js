import React, { Fragment } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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

export default function ResetPassword() {
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
  const preventDefault = event => event.preventDefault();
  const handleChangeCheckbox = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <Fragment>
      <h2>Reset Password</h2>
      <form>
        <FormControl variant="outlined" className={classes.txtwidth}>
          <InputLabel htmlFor="outlined-adornment-password">
            New Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={100}
          />
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          className={classes.txtwidth}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.txtwidth}
        >
          Reset Password
        </Button>
        <div className={classes.flexButton}>
          <Link to="/login">
            <Button variant="contained" color="secondary">
              Back to Login
            </Button>
          </Link>
        </div>
      </form>
    </Fragment>
  );
}
