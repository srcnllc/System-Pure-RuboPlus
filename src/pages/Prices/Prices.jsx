import React from 'react'
import styles from './Prices.module.scss';
import Container from '../../components/Tools/Container/Container';
import HeroPrices from '../../components/pages/Prices/HeroPrices/HeroPrices';
import Programs from '../../components/pages/Prices/Programs/Programs';
import programData from '../../jsonData/program.json'

export default function Prices() {

  return (
        <section className={styles.pricesPage}>
      <Container large>
        <div className={styles.pricesContent}>
          <HeroPrices/>
          {programData.map((program, index) => (
              <Programs
                key={index}
                data={program}
              />
          ))}
        </div>
      </Container>
    </section>
  )
}