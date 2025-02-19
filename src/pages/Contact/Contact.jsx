import React from 'react'
import styles from './Contact.module.scss';
import Container from '../../components/Tools/Container/Container';
import HeroContact from '../../components/pages/Contact/HeroContact/HeroContact';
import BannerContact from '../../components/pages/Contact/BannerContact/BannerContact';
import FormSection from '../../components/pages/Contact/FormSection/FormSection';
export default function Contact() {
  return (
        <section className={styles.contactPage}>
      <Container large>
        <HeroContact/>
        <BannerContact/>
        <FormSection/>
      </Container>
    </section>
  )
}