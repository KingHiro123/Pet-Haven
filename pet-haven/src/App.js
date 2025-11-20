import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import Release from "./pages/Release";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import HelpUs from "./pages/HelpUs";
// import Donate from "./pages/Donate";
import Auth from "./pages/Auth";
import AdoptApply from "./pages/AdoptApply";
import Gallery from "./pages/Gallery";
import Volunteer from "./pages/Volunteer";
import Membership from "./pages/Membership";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/release" element={<Release />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/help" element={<HelpUs />} />
          {/* <Route path="/donate" element={<Donate />} /> */}
          <Route path="/login" element={<Auth mode="login" />} />
          <Route path="/register" element={<Auth mode="register" />} />
          <Route path="/adopt/:id/apply" element={<AdoptApply />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/Membership" element={<Membership />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
