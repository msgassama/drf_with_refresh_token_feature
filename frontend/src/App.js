import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header';
import PrivateRoute from './utils.js/PrivateRoute';
import { AuthProvider } from './context/AuthContext'



function App() {
  return (
    <div className="App">
    <Router>
      <AuthProvider>
      <Header />
      <Routes>
          <Route path="/" element={<PrivateRoute children={<HomePage />} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<p>Not Found (404)</p>} />
      </Routes>
        </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
