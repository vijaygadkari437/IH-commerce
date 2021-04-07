/*
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';
// import Footer from 'components/Footer';
import { makeStyles } from '@material-ui/core';
import LoginPage from '../LoginPage';
import NotFoundPage from '../NotFoundPage/Loadable';
import CustomerManagement from '../CustomerManagement';
import Header from '../Layouts/Header';
import Sidebar from '../Layouts/Sidebar';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));
function App() {
  const myvar = '';
  const classes = useStyles();
  // const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(true);

  return (
    <Fragment>
      <Helmet titleTemplate="%s - Commersify" defaultTitle="Commersify">
        <meta name="description" content="A Commersify application" />
      </Helmet>
      <main
        className={
          window.location.pathname.indexOf('auth') <= 0 && classes.root
        }
      >
        {window.location.pathname.indexOf('auth') <= 0 && (
          <Fragment>
            <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <Sidebar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          </Fragment>
        )}
        <Switch>
          <Route path="/auth" component={LoginPage} />
          <Route path="/customer-management" component={CustomerManagement} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </main>

      {/* <Footer /> */}
    </Fragment>
  );
}
export default withRouter(App);
