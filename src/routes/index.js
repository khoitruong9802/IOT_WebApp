import Overview from "../pages/Overview";
import Example from "../pages/Example";
import About from "../pages/About";
import Todo from "../pages/Todo";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";

export const publicRoutes = [
  // {
  //   path: "/",
  //   component: Home,
  //   layout: HomeLayout,
  // },
  {
    path: "/",
    component: Login,
    layout: null,
  },
  {
    path: "/login",
    component: Login,
    layout: null,
  },
  {
    path: "/signup",
    component: SignUp,
    layout: null,
  },
  {
    path: "/overview",
    component: Overview,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export const privateRoutes = [
  {
    path: "/todo",
    component: Todo,
  },
  {
    path: "/example",
    component: Example,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];
