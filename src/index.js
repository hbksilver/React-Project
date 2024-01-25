import "./App.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Show from "./Show";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <li className="nav-item">
              <Link className="navbar-brand" to="/Show">
                React Bootstrap Demo
              </Link>
            </li>
          </div>
        </nav>
        <Routes>
          <Route path="/Show" element={<Show />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
