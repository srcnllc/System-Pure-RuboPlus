import React from 'react';
import styles from './Footer.module.scss';
import Container from '../../Tools/Container/Container';

export default function Footer() {

  const bankCardList = [
    {
      title: 'mastercard',
      image: '/images/mastercard.png',
    },
    {
      title: 'visa',
      image: '/images/visa.png',
    },
    {
      title: 'american_express',
      image: '/images/american_express.png',
    },
  ];
  const footerNav = [
    {
      title: "Kurumsal",
      links: ["Hakkımızda", "Medya", "İşverenler", "İletişim"],
    },
    {
      title: "Hizmetler",
      links: [
        "Fullstack Pro",
        "Fullstack Up",
        "Fullstack UpPro",
        "Frontend Developer",
        "Fullstack Genç",
        "Fullstack GPro",
      ],
    },
    {
      title: "Yasal",
      links: ["KVKK Politikası", "Gizlilik Politikası", "Instagram", "Linkedin"],
    },
    {
      title: "Destek",
      links: ["Sıkça Sorulanlar", "Kullanım Şartları"],
    },
  ];
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
