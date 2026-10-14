import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import DirectorContainer from "./pages/DirectorContainer";
import DirectorCard from "./pages/DirectorCard";
import DirectorList from "./pages/DirectorList";
import DirectorForm from "./pages/DirectorForm";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directors" element={<DirectorContainer />}> 
            <Route index element={<DirectorList />} />
            <Route path=":id" element={<DirectorCard />} />
            <Route path="new" element={<DirectorForm />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
