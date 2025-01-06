import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact"; // Contact page component
import Home from "./components/Home";
import Footer from './components/Footer'; 
import ThankYou from "./components/ThankYou"; 
import Privacy from "./components/privacy";
import Terms from "./components/terms";


function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;



