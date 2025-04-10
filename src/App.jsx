import "./App.css";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import UserPage from "./pages/UserPage";
import CourseVideosPage from "./pages/CourseVideosPage";
import SigninUserPage from "./pages/SigninUserPage";
import SignupUserPage from "./pages/SignupUserPage";
import SignupAdminPage from "./pages/SignupAdminPage";
import SigninAdminPage from "./pages/SigninAdminPage";
import AdminPage from "./pages/AdminPage";
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
            <Route path="/signinuserpage" element={<SigninUserPage />} />
            <Route path="/signinadminpage" element={<SigninAdminPage />} />
            <Route path="/signupadminpage" element={<SignupAdminPage />} />
            <Route path="/signupuserpage" element={<SignupUserPage />} />
            <Route path="/adminhome" element={<AdminPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
