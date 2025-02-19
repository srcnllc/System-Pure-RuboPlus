import React from 'react'
import styles from './Hero.module.scss';
export default function Hero() {
  return (
        <section className={styles.hero}>
          <div className={styles.content}>
            <div className={styles.textConten}>
            <h2>6 ayda uluslararası
            <span>yazılımcı ol</span></h2>
            <p>Kişiye özel, yapay zeka destekli, tamemen uygulama odaklı eğitim. <br /> Türkiye’nin en etkili kariyer merkezi.</p>
            <button className='btn pinkButton'>
              HEMEN BAŞVUR
              <img src="./images/icons/click.png" alt="click" />
              </button>
            </div>
              <div className={styles.sectionPc}>
            <img src="./images/heroPc.svg" alt="pc" />
          </div>
          </div>
          <div className={styles.bacground}>
            <img className='icon' src="./images/hero.svg" alt="hero" />
          </div>
    </section>
  )
}