import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "@pages/Home";
import MatchesDetail from "@pages/MatchesDetail";
import Matches from "@pages/Matches";
import Account from "@pages/Account";

// Place all routes here
const routes = [
  { path: "/", component: <Home /> },
  { path: "/match", component: <Matches /> },
  { path: "/match/:id", component: <MatchesDetail /> },
  { path: "/account", component: <Account /> },
];

function Router({ children }) {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
      {children}
    </BrowserRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
