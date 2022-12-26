import React from 'react'
import styles from '../styles/Toggle.module.css'
import sol from '../utils/sol.png'
import luna from '../utils/luna.png'
import { useContext } from 'react'
import {ThemeContext} from '../context/contex'


const Toggle = () => {
   const theme = useContext(ThemeContext)

   const handleClick = () => {
    theme.dispatch({type:"TOGGLE"})
   }


  return (
    <div className={styles.t}>
      <img src={sol} alt="" className={styles.icon}/>
      <img src={luna} alt="" className={styles.icon} />
      <div className={styles.tBoton} onClick={handleClick} style={{left: theme.state.darkMode ? 0:25}}></div>
    </div>
  )
}

export default Toggle
