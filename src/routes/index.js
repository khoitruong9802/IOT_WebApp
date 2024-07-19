import Overview from "../pages/Overview";
import Example from "../pages/Example";
import About from "../pages/About";
import Todo from "../pages/Todo";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export const publicRoutes = [
  {
    path: "/",
    component: Login,
    layout: null,
  },
  {
    path: "/overview",
    component: Overview,
  },
  {
    path: "/todo",
    component: Todo,
  },
  {
    path: "/example",
    component: Example,
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

export const privateRoutes = [];
