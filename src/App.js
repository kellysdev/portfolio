import { BrowserRouter, Routes, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Header from "./components/header";
import Intro from "./components/intro";
import ResumePage from "./components/resume-page";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

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
                  <Footer />
                </Col>
              }
            />

            <Route 
              path="/resume"
              element={
                <Col>
                  <Header />
                  <ResumePage />
                  <Footer />
                </Col>
              }
            />

            <Route
              path="/about"
              element={
                <Col>
                  <Header />
                  <About />
                  <Footer />
                </Col>
              }
            />

            <Route
              path="/contact"
              element={
                <Col>
                  <Header />
                  <Contact />
                  <Footer />
                </Col>
              }            
            />

        </Routes>
      </Row>
    </BrowserRouter>
  );
}

export default App;