import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faS } from "@fortawesome/free-solid-svg-icons";
import { faR } from "@fortawesome/free-solid-svg-icons";
import { faB } from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Layanan from "./pages/Layanan";
import Privacy from "./pages/Privacy";

library.add(faS, faB, faR);
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/layanan" element={<Layanan />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
