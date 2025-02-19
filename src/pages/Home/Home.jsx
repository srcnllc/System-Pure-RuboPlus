import React from 'react'
import styles from './Home.module.scss';
import Container from '../../components/Tools/Container/Container';
import Hero from '../../components/pages/Home/Hero/Hero';
import CareerCenter from '../../components/pages/Home/CareerCenter/CareerCenter';
import Partners from '../../components/pages/Home/Partners/Partners';
import Progrram from '../../components/pages/Home/Progrram/Progrram';
export default function Home() {
  return (
      <section className={styles.homePage}>
      <Container large>
        <div className={styles.homeContent}>
          <Hero/>
          <CareerCenter/>
          <Partners/>
          <Progrram/>
        </div>
      </Container>
    </section>
  )
}