import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import UserContext from "./context/UserContext"
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="App">
      <UserContext>
      <Router>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
      </UserContext>
    </div>
  );
}

export default App;
