import "./App.css";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import UserPage from "./pages/UserPage";
import CourseVideosPage from "./pages/CourseVideosPage";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import { AuthProvider } from "../src/components/AuthContext";

function App() {
  return (
    <div className="min-h-screen">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/workspage" element={<WorksPage />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/coursevideospage" element={<CourseVideosPage />} />
            <Route path="/signinpage" element={<SigninForm />} />
            <Route path="/signuppage" element={<SignupForm />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
