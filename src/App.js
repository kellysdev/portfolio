import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css';
import Header from './components/header';
import ResumePage from './components/resume-page';
import Portfolio from './components/portfolio';

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

        </Routes>
      </Row>
    </BrowserRouter>
  );
}

export default App;