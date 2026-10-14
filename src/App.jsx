import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import NavBar from "./components/NavBar";
import DirectorContainer from "./pages/DirectorContainer";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directors" element={<DirectorContainer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
