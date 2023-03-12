import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Gallery from "./Pages/Gallery/gallery";
import Contact from "./Pages/Contact/contact";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
