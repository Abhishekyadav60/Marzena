import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            
            {/* 404 Page (Optional) */}
            <Route path="*" element={<div className="text-center py-20">Page Not Found</div>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;