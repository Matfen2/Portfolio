import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Present from "./components/Present/Present";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Capacities from "./components/Capacities/Capacities";
import Contact from "./components/Contact/Contact";
import "../src/App.scss"; 

function App() {
  return (
    <div className="app">
      <Router>
        <div className="head-content">
          <Header />
          <Present />
        </div>
        <main className="main-content">
          <About />
          <Projects />
          <Capacities />
          <Contact />
        </main>
      </Router>
    </div>
  );
}

export default App;
