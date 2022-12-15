import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Chapter from "./pages/chapter";
import Podcast from "./pages/podcast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter" element={<Chapter />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
