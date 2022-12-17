import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Episode from "./pages/episode";
import Podcast from "./pages/podcast";
import { store } from "./store/rootStore";
import Background from "./components/Background";
function App() {
  return (
    <BrowserRouter>
      <Background>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast/:podcastId" element={<Podcast />} />
            <Route
              path="/podcast/:podcastId/episode/:episodeId"
              element={<Episode />}
            />
          </Routes>
        </Provider>
      </Background>
    </BrowserRouter>
  );
}

export default App;
