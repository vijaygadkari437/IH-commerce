/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';
import Footer from 'components/Footer';
import LoginPage from '../LoginPage';
import FeaturePage from '../FeaturePage';
import NotFoundPage from '../NotFoundPage/Loadable';
import Customer from '../CustomerManagement/Customer';
import Header from '../Layouts/Header';
import Sidebar from '../Layouts/Sidebar';

function App() {
  const myvar = '';
  return (
    <Fragment>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/features" component={FeaturePage} />
        <Route path="/customer" component={Customer} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
    </Fragment>
  );
}
export default withRouter(App);
