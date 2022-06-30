import Router from "./services/Router";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
