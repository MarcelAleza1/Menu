
import './App.css';
import {BrowserRouter as Router,
Route,
Routes} from "react-router-dom";
import CustomNavbar from './Components/Navbar.js';
import Home from './Components/Home';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
