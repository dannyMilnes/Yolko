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
import CookingMethod from './pages/CookingMethod/CookingMethod';
import EggSelector from './pages/EggSelector/EggSelector';
import Recipe from './pages/Recipe/Recipe';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={Home} />
        <Route path="/egg-type" exact component={EggSelector} />
        <Route path="/cooking-method" component={CookingMethod} />
        <Route path="/recipe" component={Recipe} />
      </Router> 
    </>
  );
}

export default App;
