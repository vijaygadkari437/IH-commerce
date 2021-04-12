// import { Switch } from '@material-ui/core';
import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Customer from './Customer';
import AddCustomer from './Customer/AddCustomer';
import CustomerStaff from './CustomerStaff';
import AddCustomerStaff from './CustomerStaff/AddCustomerStaff'
import Merchant from './Merchant';
import MerchantStaff from './MerchantStaff';
import User from './User';

const useStyles = makeStyles(theme => ({
  fullWidth: {
    gridColumnStart: 1,
    gridColumnEnd: 4,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#f4f6f8',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  Container: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
}));

function CustomerManagement() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container maxWidth="md" classes={{ root: classes.Container }}>
        <Switch>
          <Route
            path="/customer-management/customer"
            component={Customer}
            exact
          />
          <Route
            path="/customer-management/customer/add-customer"
            exact
            component={AddCustomer}
          />
          <Route
            path="/customer-management/customer-staff"
            exact
            component={CustomerStaff}
          />
          <Route
            path="/customer-management/customer-staff/add-customer-staff"
            exact
            component={AddCustomerStaff}
          />
          <Route path="/customer-management/merchant" component={Merchant} />
          <Route
            path="/customer-management/merchant-staff"
            component={MerchantStaff}
          />
          <Route path="/customer-management/user" component={User} />
        </Switch>
      </Container>
    </main>
  );
}

export default withRouter(CustomerManagement);
