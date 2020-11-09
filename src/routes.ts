const { ROOT_URL } = APPLICATION as any;
import { omit, pathOr } from "ramda";

const routes = [
  {
    name: "SignIn",
    path: `${ROOT_URL}/sign-in`,
    Component: React.lazy(() => import("./screens/SignIn")),
    exact: true,
  },
  {
    name: "SignUp",
    path: `${ROOT_URL}/sign-up`,
    Component: React.lazy(() => import("./screens/SignUp")),
    exact: true,
  },
  {
    name: "Leagues",
    path: `${ROOT_URL}/leagues`,
    Component: React.lazy(() => import("./screens/Leagues")),
    exact: true,
  },
  {
    name: "Tournaments",
    path: `${ROOT_URL}/tournaments`,
    Component: React.lazy(() => import("./screens/Tournaments")),
    exact: true,
  },
  {
    name: "Home",
    path: `${ROOT_URL}`,
    Component: React.lazy(() => import("./screens/Home")),
    exact: true,
  },
  {
    name: "NotFound",
    path: `*`,
    Component: React.lazy(() => import("./screens/NotFound")),
    exact: false,
  },
];

export const routesAsObject = routes.reduce((acc, route) => {
  const routeName = pathOr("_", ["name"], route);
  const routeProps = omit(["name"], route);

  return { ...acc, [routeName]: { ...routeProps } };
}, {});

export default routes;
