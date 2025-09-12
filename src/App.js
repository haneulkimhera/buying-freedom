import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Businesses from "./pages/Businesses";
import Projects from "./pages/Projects";
import DisclosureList from "./pages/DisclosureList";
import DisclosureDetail from "./pages/DisclosureDetail";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/disclosures" element={<DisclosureList />} />
          <Route path="/disclosure/:id" element={<DisclosureDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
