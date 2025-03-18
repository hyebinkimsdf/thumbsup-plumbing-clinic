// App.jsx 또는 App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Machines } from "./pages/Machines";
import { Services } from "./pages/Services";
import { Process } from "./pages/Process";
import { Gallery } from "./pages/Gallery";
import { Nav } from "./components/Nav";
import { Bnb } from "./components/Bnb";

function App() {
  return (
    <BrowserRouter>
      <header role="banner" className="mx-auto">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <footer role="contentinfo">
        <Bnb />
      </footer>
    </BrowserRouter>
  );
}

export default App;
