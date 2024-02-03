import { BrowserRouter, Routes, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Header from "./components/header";
import Intro from "./components/intro";
import ResumePage from "./components/resume-page";
import Portfolio from "./components/portfolio";
import About from "./components/about";

function App() {
  return (
    <BrowserRouter>
      <Row>
        <Routes>
            <Route
              path="/"
              element={
                <Col className="home">
                  <Header />
                  <Intro />
                  <Portfolio />
                </Col>
              }
            />

            <Route 
              path="/resume"
              element={
                <Col>
                  <Header />
                  <ResumePage />
                </Col>
              }
            />

            <Route
              path="/about"
              element={
                <Col>
                  <Header />
                  <About />
                </Col>
              }
            />

        </Routes>
      </Row>
    </BrowserRouter>
  );
}

export default App;