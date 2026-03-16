import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default App;
