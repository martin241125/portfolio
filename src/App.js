import About from './components/About';
import Landing from './components/Landing'
import Contact from './components/Contact'
import './App.css'
import Toggle from './components/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context/contex'


function App() {

 const theme = useContext(ThemeContext)
 const darkMode = theme.state.darkMode;


  return (

   
    <div style={{backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white", }}>
    
      <Landing />
      <About />
      <Contact />
      <Toggle />
    
   
      
   
     
    </div>
  );
}

export default App;
