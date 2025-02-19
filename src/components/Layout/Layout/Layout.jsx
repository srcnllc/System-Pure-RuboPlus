import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const path = window.location.pathname; // Sayfa yolunu burada alabilirsiniz
  const isHomePage = path === '/'; // Ana sayfa kontrolü
  return (
    <>
      <Header transparent={isHomePage}/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
