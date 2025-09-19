import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Debug versions of components
function Home() {
  return <h1 style={{ color: "red" }}>🏠 Home works!</h1>;
}

function About() {
  return <h1 style={{ color: "red" }}>ℹ️ About works!</h1>;
}

function Services() {
  return <h1 style={{ color: "red" }}>🛠️ Services works!</h1>;
}

function ServiceDetails() {
  return <h1 style={{ color: "red" }}>📄 Service Details works!</h1>;
}

function Contact() {
  return <h1 style={{ color: "red" }}>📞 Contact works!</h1>;
}

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#7154CB" }}
    >
      <div className="container-fluid">
        <span className="navbar-brand text-white">Debug Navbar</span>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#333", color: "white", padding: "10px", marginTop: "20px" }}>
      Debug Footer
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
