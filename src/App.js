import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';

// Components
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </>
  );
}

export default App;
