import "./App.css";
import React from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import SidebarDimmed from './components/Sidebar'



function App() {



  return (
    <div className="App">
      <SidebarDimmed />
   <NavBar /> 
   <Card />
    </div>
  );
}

export default App;
