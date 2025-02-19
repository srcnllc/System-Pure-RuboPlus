import Container from '../../Tools/Container/Container';
import styles from './Header.module.scss';
import React, { useEffect, useState } from 'react';

export default function Header({transparent }) {
  const [active, setActive] = useState("");
  const navList = [
    {
      title: 'Programlar',
      slug: '/',
    },
    {
      title: 'Fiyatlar',
      slug: '/prices',
    },
    {
      title: 'Hakkımızda',
      slug: '/about',
    },
    {
      title: 'İletişim',
      slug: '/contact',
    },
  ];
  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  return (
    <>
    <header className={`${styles.header} ${transparent ? styles['header-transparent'] : ''}`}>
    <Container large>
          <div className={styles.topbar}>
            <div className={styles.logo}>
              <img src={'/logo.svg'} alt="logo" />
            </div>
            <nav>
              <ul className={styles.navItems}>
                {navList.map((item) => (
                  <li key={item.slug} className={active === item.slug? styles.active : ''} onClick={() => setActive(item.slug)}>
                    <a href={item.slug}>{item.title}</a>
                  </li>
                ))}
              </ul>
              {/* <div className={styles.hamburger} onClick={() => setActive(!active)}>
                <span className={active? styles.line1 : styles.line1Active}></span>
                <span className={active? styles.line2 : styles.line2Active}></span>
                <span className={active? styles.line3 : styles.line3Active}></span>
              </div> */}
            </nav>
            <div className={styles.buttons}>
              <button className='btn grayButton'>GİRİŞ</button>
              <button className='btn pinkButton'>BAŞVUR</button>
            </div>
            </div>
        </Container>
      </header>
    </>
  );
}
