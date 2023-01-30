import Home from "./component/Home";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Header />
          <Route path="/" element={<Home />} />
          <Footer />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
