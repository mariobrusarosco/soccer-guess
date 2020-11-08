import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../screen/Home";
import SignIn from "../../screen/SignIn";
import SignUp from "../../screen/SignUp";

// Vendors
// import { Suspense } from "react";
// import { useSelector } from 'react-redux'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'

// Routes Data
// import routes from 'configPath/common/routes'

// Components
// import Header from 'components/Header'
// import AppBootstrap from 'components/AppBootstrap'
// import AppLayout from 'components/AppLayout'
// import RoutesLoader from 'components/Loaders/RoutesLoader'

// const RouterStructure = () => {
//   return (
//     <BrowserRouter>
//       <Route
//         render={({ location }) => (
//           <>
//             <TransitionGroup>
//               <CSSTransition
//                 key={location.key}
//                 classNames="route-motion"
//                 timeout={350}
//                 appear
//               >
//                 <div>
//                   <AppLayout>
//                     <Suspense fallback={<RoutesLoader />}>
//                       <Switch location={location}>
//                         {routes.map(({ Component, ...props }, i) => (
//                           <Route
//                             location={location}
//                             component={Component}
//                             {...props}
//                             key={i}
//                           />
//                         ))}
//                       </Switch>
//                     </Suspense>
//                   </AppLayout>
//                 </div>
//               </CSSTransition>
//             </TransitionGroup>
//           </>
//         )}
//       />
//     </BrowserRouter>
//   );
// };

// const AppRouter = () => {
//   return <RouterStructure />;
// };

const AppRouter: React.FunctionComponent = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign in</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign up</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
