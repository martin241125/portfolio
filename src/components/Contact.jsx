import React from "react";
import styles from "../styles/Contact.module.css";
import tel from '../utils/tel.png'
import mail from '../utils/gmail.png'
import img from '../utils/hombre-joven.png'
import lk from '../utils/linkedin.png'
import gh from '../utils/github.png'
import ins from '../utils/instagram.png'
import atom from '../utils/atom.png'
import redux from '../utils/redux.png'
import h5 from '../utils/html-5.png'
import cs from '../utils/css-3.png'
import js from '../utils/js.png'
import cv from '../utils/approved.png'

const contact = () => {

  const onLinkedin = (e) => {
    window.open('https://www.linkedin.com/in/jose-martin-mi%C3%B1o-b3956523a/', '_blank')
  }

  const onInsta = () => {
    window.open('https://www.instagram.com/josee.mino/', '_blank')
  }

  const onGit = () => {
    window.open('https://github.com/martin241125')
  }

  const onCV = () => {
    window.open('https://drive.google.com/file/d/1ZMxsEao0AJEjCl8MCFXdLCB3CjTAY7gF/view?usp=share_link')
  }



  return (
    <div className={styles.c}>
      <div className={styles.left}>
        <div className={styles.description}>
          <p>Ofrezco mis servicios como desarrollador Junior, cuento con 1 año
          aproximadamente de experiencia trabajando en proyectos y grupos.

          Estos son algunos skill que manejo, mi preferido es React.</p>

        </div>
        <div className={styles.containerMT}>
         <img src={h5} alt="" className={styles.icon} />
         <img src={cs} alt="" className={styles.icon} />
         <img src={js} alt="" className={styles.icon}  />
         <img src={atom} alt="" className={styles.icon}  />
         <img src={redux} alt="" className={styles.icon}  />
          </div>
          <div className={styles.cv}>
            <p>Puede descargar mi Curriculum pinchando<button className={styles.botonC} onClick={onCV} style={{cursor: 'pointer'}}>Aqui</button></p>
            
            
            </div>
          
        
        
      </div>
      <div className={styles.right}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardBack}>
              <img src={img} alt="hombre" className={styles.hombre}/>
              click me!
            </div>
            <div className={styles.flipCardFront}>
              <h1>Martin Miño.</h1>
              <p>Web Developer.</p>
              <p>Encuentrame...</p>
              <img src={lk} alt="" className={styles.lk} onClick={onLinkedin} style={{cursor: 'pointer'}}/>
              <img src={gh} alt="" className={styles.gh} onClick={onGit} style={{cursor: 'pointer'}}/>
              <img src={ins} alt="" className={styles.ins} onClick={onInsta} style={{cursor: 'pointer'}} />
              <p>Email: martin.laoctava@gmail.com</p>
              <p>Tel: +54 01126056388</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
