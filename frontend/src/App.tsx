import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import TeacherDashboard from "./pages/TeacherDashboard";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Header from "./Components_JS/Header";
import Footer from "./Components_JS/Footer";
import { useAuth } from "./context/AuthContext";
import "./Styles/Components/App.scss";
import ProtectedRoute from "./context/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
    <div className="App">
      <Header />
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Teacher Dashboard Route */}
        <Route path="/teacher-dashboard" element={<ProtectedRoute><TeacherDashboard /></ProtectedRoute>} />

        {/* Login Page Route */}
        <Route path="/login" element={<LoginPage />} />
        {/* Signup Page Route */}
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </div>
    </AuthProvider>
  );
};

export default App;
