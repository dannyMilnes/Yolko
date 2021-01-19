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
import CookingMethod from './pages/CookingMethod';
import EggSelector from './pages/EggSelector';
import Recipe from './pages/Recipe';


function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={Home} />
        <Route path="/eggType" component={EggSelector} />
        {/* <Route path="/eggType/CookingMethod" component={CookingMethod} />
        <Route path="/eggType/CookingMethod/Instructions" component={Recipe} /> */}
      </Router>
    </>
  );
}

export default App;
