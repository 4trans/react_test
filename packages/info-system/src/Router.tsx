import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';

const Home = React.lazy(() => import('./modules/home'));
const About = React.lazy(() => import('./modules/about'));

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
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
  );
}

export default Router;