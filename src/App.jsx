// App.jsx 또는 App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MachinesPage } from "./pages/MachinesPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProcessPage } from "./pages/ProcessPage";
import { GalleryPage } from "./pages/GalleryPage";
import { Nav } from "./components/Nav";
import { Bnb } from "./components/Bnb";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ButtonResetScroll } from "./components/ButtonResetScroll";
import { CallRedirect } from "./pages/CallRedirect";

function App() {
  return (
    <BrowserRouter>
      <header role="banner" className="mx-auto">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/machines" element={<MachinesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/call" element={<CallRedirect />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ButtonResetScroll />
      <footer role="contentinfo">
        <Bnb />
      </footer>
    </BrowserRouter>
  );
}

export default App;
