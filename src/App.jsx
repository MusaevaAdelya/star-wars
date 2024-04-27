import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AppLayout from "./layout/AppLayout";

import Characters from "./pages/Characters";
import Character from "./pages/Character";

import Planets from "./pages/Planets";
import Planet from "./pages/Planet";

import Starships from "./pages/Starships";
import Starship from "./pages/Starship";

import FailPage from "./pages/FailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<Character />} />
          <Route path="planets" element={<Planets />} />
          <Route path="planets/:id" element={<Planet />} />
          <Route path="starships" element={<Starships />} />
          <Route path="starships/:id" element={<Starship />} />
          <Route path="error" element={<FailPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
