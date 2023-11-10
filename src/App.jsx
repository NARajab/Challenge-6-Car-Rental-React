import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilterCarPage from "./pages/FilterCarPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filter" element={<FilterCarPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
