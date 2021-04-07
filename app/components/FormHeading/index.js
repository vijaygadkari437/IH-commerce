import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  wrapper: {
    boxShadow: '0 0 0 1px rgba(63, 63, 68, 0.10)',
    backgroundColor: '#fff',
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
    marginBlockStart: 0,
    marginBlockEnd: 0,
    alignSelf: 'center',
  },
  flexButton: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 3),
    },
  },
}));
export default function FormHeading(props) {
  const { label, children, grid, linkDetails } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.flexButton}>
        <h2 className={classes.wrapperHeading}>{label}</h2>
        {linkDetails && (
          <Link to={linkDetails.link} className={classes.wrapperLink}>
            <Button variant="contained" color="primary" size="small">
              {linkDetails.text}
            </Button>
          </Link>
        )}
      </div>
      <div className={grid ? classes.wrapperWithGrid : classes.wrapper}>
        {children}
      </div>
    </Fragment>
  );
}
