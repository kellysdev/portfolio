import { HashRouter, Routes, Route } from "react-router-dom";
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
import MovieCaseStudy from "./components/movie-case-study";

function App() {
  return (
    <HashRouter>
      <Row>
      <Header />
        <Routes>
            <Route
              path="/"
              element={
                <Col className="home">
                  <Intro />
                  <Portfolio />
                </Col>
              }
            />

            <Route 
              path="/resume"
              element={
                <Col>
                  <ResumePage />
                </Col>
              }
            />

            <Route
              path="/about"
              element={
                <Col>
                  <About />
                </Col>
              }
            />

            <Route
              path="/contact"
              element={
                <Col>
                  <Contact />
                </Col>
              }            
            />

            <Route
              path="/movie-case-study"
              element={
                <Col>
                <MovieCaseStudy />
                </Col>
              }
            />
        </Routes>
      <Footer />
      </Row>
    </HashRouter>
  );
}

export default App;