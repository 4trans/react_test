import './App.css';
import Header from '@4trans/shared/header/Header'
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';

const Home = React.lazy(() => import('./modules/home'));
const About = React.lazy(() => import('./modules/about'));

function App() {
  return (
    <div className="App">
      <Header title="Info-System"></Header>
      <nav>
        <Link to="/">Home</Link>
        {` | `}
        <Link to="/about">About</Link>
      </nav>


        <Routes>
          <Route
            index
            element={
              <React.Suspense fallback={<>...</>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="about"
            element={
              <React.Suspense fallback={<>...</>}>
                <About />
              </React.Suspense>
            }
          />
        </Routes>
    </div>
  );
}

export default App;
