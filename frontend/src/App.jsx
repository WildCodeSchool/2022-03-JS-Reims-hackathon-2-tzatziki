import Router from "./services/Router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
