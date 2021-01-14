import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';

// Components
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={Home} />
      </Router>
    </>
  );
}

export default App;
