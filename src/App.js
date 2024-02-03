import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div className="App">
              <Header />
            </div>
          }
        />

        <Route 
          path="/resume"
          element={
            <>
              <Header />
              <button>Download Resume</button>
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;