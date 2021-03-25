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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme =>
  createStyles({
    txtwidth: {
      width: '100%',
      marginTop: 30,
    },
    FormControl: {
      width: '100%',
    },
    linkstyle: {
      marginTop: 10,
    },
  }),
);

export default function Login() {
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
      <h2>Welcome,</h2>
      <p>Please login to your account</p>
      <form>
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          className={classes.txtwidth}
        />
        <FormControl variant="outlined" className={classes.txtwidth}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
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
            labelWidth={70}
          />
        </FormControl>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChangeCheckbox}
                name="checkedB"
                color="primary"
                fontSize="small"
              />
            }
            label="Remember Me"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.txtwidth}
        >
          Log In
        </Button>
        <div className={classes.linkstyle}>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>
    </Fragment>
  );
}
