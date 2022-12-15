import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Chapter from "./pages/chapter";
import Podcast from "./pages/podcast";
import { store } from "./store/rootStore";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter" element={<Chapter />} />
          <Route path="/podcast" element={<Podcast />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
