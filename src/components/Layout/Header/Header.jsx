import Container from '../../Tools/Container/Container';
import styles from './Header.module.scss';
import React, { useEffect, useState } from 'react';
import navList from '../../../jsonData/headerNavList.json'

export default function Header({transparent,relativePage}) {
  const [active, setActive] = useState("");
  const [menuActive, setMenuActive] = useState(false);
  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  return (
    <>
    <header className={`${styles.header} ${transparent ? styles['header-transparent'] : ''} ${relativePage ? styles['header-relative'] : ''}`}>
    <Container large mobileContainer>
          <div className={`${styles.topbar}`}>
            <div className={styles.logo}>
              <img src={'/logo.svg'} alt="logo" />
            </div>
            <nav className='d-md'>
              <ul className={styles.navItems}>
                {navList.map((item) => (
                  <li key={item.slug} className={active === item.slug? styles.active : ''} onClick={() => setActive(item.slug)}>
                    <a href={item.slug}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={`${styles.buttons} d-md`}>
              <button className='btn grayButton'>GİRİŞ</button>
              <button className='btn pinkButton'>BAŞVUR</button>
            </div>
            <div
              onClick={() => setMenuActive(!menuActive)}
              className={`${styles.hamburger} ${
                menuActive ? styles.menuActive : ''
              } d-sm`}>
              <span />
              <span />
              <span />
            </div>
            </div>
        </Container>
      </header>
      <div  className={`${styles.mobileNav} ${menuActive ? styles.mobileActive : ''} d-sm`}>
        <div className={styles.logo}>
            <img src={'/logo.svg'} alt="logo" />
            <div
              onClick={() => setMenuActive(!menuActive)}
              className={`${styles.hamburger} ${
                menuActive ? styles.menuActive : ''
              }`}>
              <span />
              <span />
              <span />
            </div>
            </div>
              <ul className={styles.navItems}>
                {navList.map((item) => (
                  <li key={item.slug} className={active === item.slug? styles.active : ''} onClick={() => setActive(item.slug)}>
                    <a href={item.slug}>{item.title}</a>
                  </li>
                ))}
              </ul>
              <div className={styles.buttons}>
                <button className='btn grayButton'>GİRİŞ</button>
                <button className='btn pinkButton'>BAŞVVUR</button>
              </div>
            </div>
    </>
  );
}
