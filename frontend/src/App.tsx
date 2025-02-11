import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./Pages/HomePage";
import TeacherDashboard from "./Pages/TeacherDashboard";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Header from "./Components_JS/Header";
import Footer from "./Components_JS/Footer";
import "./Styles/Components/App.scss";

const App = () => {
  return (
    <AuthProvider>
    <div className="App">
      <Header />
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Teacher Dashboard Route */}
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />

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
