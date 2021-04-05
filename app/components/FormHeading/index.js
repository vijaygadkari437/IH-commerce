import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({}));
export default function FormHeading(props) {
  const classes = useStyles();
  return <h2>{props.label}</h2>;
}
