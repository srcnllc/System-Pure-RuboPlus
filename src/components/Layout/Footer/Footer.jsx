import React from 'react';
import styles from './Footer.module.scss';
import Container from '../../Tools/Container/Container';
import bankCardList from '../../../jsonData/bankCardList.json'
import footerNav from '../../../jsonData/footerNav.json'

export default function Footer() {

  return (
    <div className={styles.footer}>
      <Container large>
        <div className={styles.footertContent}>
          <div className={styles.logo}>
            <img src={"./logo.svg"} alt="logo" />
          </div>
          <div className={styles.nav}>
          {footerNav.map((section, index) => (
            <ul  key={index} className="footer-section">
              {section.links.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
        ))}
          </div>
          <div className={styles.bankCard}>
            {bankCardList.map((card, index) => (
                <img key={index} src={card.image} alt={card.title} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
