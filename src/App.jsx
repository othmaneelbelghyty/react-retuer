import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Conixion from "../Conixion";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <li style={{ padding: "10px", color: "white" }}>
            <Link style={{ color: "gold" }} to="/">
              Home
            </Link>
          </li>
          <li style={{ padding: "10px", color: "white" }}>
            <Link style={{ color: "gold" }} to="/about">
              About
            </Link>
          </li>
          <li style={{ padding: "10px", color: "white" }}>
            <Link style={{ color: "gold" }} to="/contact">
              Contact
            </Link>
          </li>
          <li style={{ padding: "10px", color: "white" }}>
            <Link style={{ color: "gold" }} to="/conixion">
              <Conixion />
            </Link>
          </li>
        </ul>
      </nav>

      <main style={{ marginLeft: "20px", color: "gold" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
