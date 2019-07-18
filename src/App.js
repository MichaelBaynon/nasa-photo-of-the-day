import "./App.css";
import React from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'



function App() {



  return (
    <div className="App">
      
   <NavBar /> 
   <Card />
    </div>
  );
}

export default App;
