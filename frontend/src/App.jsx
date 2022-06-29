import MatchCardZoom from "@components/MatchCardZoom";
import Router from "./services/Router";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <MatchCardZoom />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
