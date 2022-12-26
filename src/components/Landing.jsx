import React from "react";
import styles from "../styles/Landing.module.css";
import img from "../utils/programador.png";


const Landing = () => {
  return (
    <>
      <div className={styles.i}>
        <div className={styles.left}>
          <div className={styles.leftWrapper}>
            <h2 className={styles.intro}>Hola, Mi nombre es</h2>
            <h1 className={styles.name}>José Martin Miño</h1>
            <div className={styles.title}>
              <div className={styles.titleWrapper}>
                <div className={styles.leftItem}>Web developer</div>
                <div className={styles.leftItem}>Gamer</div>
                <div className={styles.leftItem}>Padre de familia</div>
              </div>
              
            </div>
          
            
            
          </div>
          
        </div>

        <div className={styles.right}>
          <div className={styles.imgContain}></div>
          <img src={img} alt="mee" className={styles.img} />
        </div>
      </div>
    </>
  );
};

export default Landing;
