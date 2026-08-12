import React from 'react'

import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="min-h-screen">

      <Navbar />

      <Header />

      <About />

      <Services />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;