import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "../../screens/Home";
// import SignIn from "../../screens/SignIn";
// import SignUp from "../../screens/SignUp";
import Header from "../Header/Header";

// Vendors
// import { Suspense } from "react";
// import { useSelector } from 'react-redux'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import RoutesLoader from "../Loaders/RouteLoader";
import routes from "../../routes";
import RouteLayout from "../RouteLayout/";
import AppLayout from "../AppLayout";

const RouterStructure = () => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup style={{ position: "relative" }}>
          <CSSTransition
            key={location.key}
            classNames="route-motion"
            timeout={350}
            appear
          >
            <RouteLayout data-testid="motion-wrapper">
              <React.Suspense fallback={<RoutesLoader />}>
                <Switch location={location}>
                  {routes.map(({ Component, ...props }, i) => (
                    <Route
                      location={location}
                      component={Component}
                      {...props}
                      key={i}
                    />
                  ))}
                </Switch>
              </React.Suspense>
            </RouteLayout>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

// const AppRouter = () => {
//   return <RouterStructure />;
// };

const AppRouter: React.FunctionComponent = () => (
  <AppLayout>
    <Router>
      <Header />
      <RouterStructure />
    </Router>
  </AppLayout>
);

export default AppRouter;
