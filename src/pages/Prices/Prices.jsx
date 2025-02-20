import React from 'react'
import styles from './Prices.module.scss';
import Container from '../../components/Tools/Container/Container';
import HeroPrices from '../../components/pages/Prices/HeroPrices/HeroPrices';
import AllDayPrograms from '../../components/pages/Prices/AllDayPrograms/AllDayPrograms';
import PartTimePrograms from '../../components/pages/Prices/PartTimePrograms/PartTimePrograms';
export default function Prices() {
  return (
        <section className={styles.pricesPage}>
      <Container large>
        <div className={styles.pricesContent}>
          <HeroPrices/>
          <AllDayPrograms/>
          <PartTimePrograms/>
        </div>
      </Container>
    </section>
  )
}