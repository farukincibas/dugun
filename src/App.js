
import './App.css';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes></Routes>
      </div>
    </Router>

  );
}

export default App;
