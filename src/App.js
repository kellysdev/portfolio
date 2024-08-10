import { BrowserRouter, Routes, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import "./custom.scss";
import "./components/case-studies/case-studies.css";
import Header from "./components/header";
import Intro from "./components/intro";
import ResumePage from "./components/resume-page";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import MovieCaseStudy from "./components/case-studies/movie-case-study";
import MeetCaseStudy from "./components/case-studies/meet-case-study";
import ChatCaseStudy from "./components/case-studies/chat-case-study";
import AngularMovieCaseStudy from "./components/case-studies/angular-movie-case-study";
import AWSCRUD from "./components/case-studies/aws-crud";

function App() {

  return (
    <BrowserRouter>
      <Row>
      <Header />
        <Routes>
            <Route
              path="/"
              element={
                <Col className="home">
                  <Intro />
                </Col>
              }
            />

            <Route
              path="/projects"
              element={
                <Col className="projects">
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
              path="/meet-case-study"
              element={
                <Col>
                  <MeetCaseStudy />
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

            <Route
              path="/chat-case-study"
              element={
                <Col>
                  <ChatCaseStudy />
                </Col>
              }
            />

            <Route
              path="/angular-movie-case-study"
              element={
                <Col>
                  <AngularMovieCaseStudy />
                </Col>
              }
            />

            <Route 
              path="/aws-crud"
              element={
                <Col>
                  <AWSCRUD />
                </Col>
              }
            />

        </Routes>
      <Footer />
      </Row>
    </BrowserRouter>
  );
}

export default App;