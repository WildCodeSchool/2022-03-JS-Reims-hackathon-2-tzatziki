import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "@pages/Home";
import MatchesDetail from "@pages/MatchesDetail";
import Matches from "@pages/Matches";
import Account from "@pages/Account";
import Project from "@pages/Project";

// Place all routes here
const routes = [
  { path: "/", component: <Home /> },
  { path: "/match", component: <Matches /> },
  { path: "/match/:id", component: <MatchesDetail /> },
  { path: "/account", component: <Account /> },
  { path: "/admin", component: <Project /> },
];

function Router({ children }) {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </main>
      {children}
    </BrowserRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
