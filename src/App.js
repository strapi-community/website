import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import Bounty from "./pages/Bounty";
import About from "./pages/About";
import BountyDetails from "./pages/BountyDetails";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <main className="min-h-screen bg-neutral-0 text-neutral-900 pt-16 px-6 md:px-14 lg:px-32 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/bounty" element={<Bounty />} />
          <Route path="/bounty/:id" element={<BountyDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
