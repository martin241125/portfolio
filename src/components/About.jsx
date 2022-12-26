import React from "react";
import styles from "../styles/About.module.css";
import saga from "../utils/saga.jpg";
import gamer from '../utils/gamer.jpg'

const About = () => {
  return (
    <div className={styles.a}>
      <div className={styles.left}>
        
        <div className={styles.imgContain}></div>

        <div className={styles.card}>
          <img src={saga} alt="saga" className={styles.saga} />
        </div>
        <div className={styles.card2}>
          <img src={gamer} alt="gamer" className={styles.gamer} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.textSaga}>
          <p className={styles.contentS}>Me gusta mucho mirar anime, pero en especial soy muy fanatico de SAINT SEIYA y mi caballero favorito es SAGA DE GEMINIS.</p>
        </div>
        <div className={styles.textGamer}>
          <p className={styles.contentG}>En mis tiempos libres me encanta jugar e informarme sobre videojuegos, mi juego favorito es AGE OF EMPIRES 2 </p>
        </div>
      </div>
    </div>
  );
};

export default About;
