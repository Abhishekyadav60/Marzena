import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;