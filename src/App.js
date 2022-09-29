import './App.css';
import React, {useState} from 'react';

import Sidebar from './Sidebar';
import Backdrop from './Backdrop';
import Teaching1 from './Teaching';



const App = () => {

  const[sidebar,setSidebar] =useState(false);

const toggleSidebar =() =>{
  setSidebar((prevState)=>!prevState)
}
  
  return (
    <div>
      
     
      <Teaching1  sidebar={sidebar} openSidebar={toggleSidebar}/>
      <Backdrop />
      <Sidebar sidebar={sidebar}/>

    </div>
  );
};


export default App;
