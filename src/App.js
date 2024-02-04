import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* Le composant Routes englobe tous vos chemins (Route) */}
        <Routes>
          {/* Définissez un chemin et le composant à rendre pour ce chemin */}
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />

          {/* Ajoutez autant de chemins que nécessaire */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
