import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <div className="bg-white h-full dark:text-gray-200 dark:bg-slate-900 duration-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
