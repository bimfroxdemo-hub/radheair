import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
// import BottomNavBar from "./components/BottomNavBar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// import Book from "./pages/Book";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/book" element={<Book />} /> */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp chat (visible on all pages) */}
        <WhatsAppButton />

        {/* Mobile bottom navigation (shows on small/medium screens) */}
        {/* <BottomNavBar /> */}
      </div>
    </Router>
  );
};

export default App;
