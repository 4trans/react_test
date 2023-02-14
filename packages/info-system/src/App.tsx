import './App.css';
import Header from '@4trans/shared/header/Header'
import { Link } from 'react-router-dom';
import Router from './Router';




function App() {
  return (
    <div className="App">
      <Header title="Info-System"></Header>
      <nav>
        <Link to="/">Home</Link>
        {` | `}
        <Link to="/about">About</Link>
      </nav>
      <Router />
    </div>
  );
}

export default App;
