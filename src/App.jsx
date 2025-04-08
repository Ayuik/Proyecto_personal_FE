import "./App.css";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import UserPage from "./pages/UserPage";
import CourseVideosPage from "./pages/CourseVideosPage";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workspage" element={<WorksPage />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/coursevideospage" element={<CourseVideosPage /> } />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
