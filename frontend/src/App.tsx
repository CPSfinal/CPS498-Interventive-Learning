
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import TeacherDashboard from './Pages/TeacherDashboard';
import Header from './Components_JS/Header';
import Footer from './Components_JS/Footer';
import './Styles/Components/App.scss'

const App = () => {
    return (
        <div className="App">
          <Header />
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Teacher Dashboard Route */}
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          </Routes>
          <Footer />
        </div>
  );
};

export default App
