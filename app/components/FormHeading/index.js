import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    boxShadow: '0 0 0 1px rgba(63, 63, 68, 0.10)',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 4,
    marginBottom: 20,
  },
  wrapperWithGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 20,
    boxShadow: '0 0 0 1px rgba(63, 63, 68, 0.10)',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 4,
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
      borderRadius: 0,
    },
  },
  wrapperHeading: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
    },
  },
}));
export default function FormHeading(props) {
  const { label, children, grid } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <h2 className={classes.wrapperHeading}>{label}</h2>
      <div className={grid ? classes.wrapperWithGrid : classes.wrapper}>
        {children}
      </div>
    </Fragment>
  );
}
