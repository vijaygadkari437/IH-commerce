import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '200',
    boxShadow: '0 0 0 1px rgba(63, 63, 68, 0.10)',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 4,
    marginBottom: 20,
  },
}));
export default function FormHeading(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <h2>{props.label}</h2>
      <div className={classes.wrapper} />
    </Fragment>
  );
}
