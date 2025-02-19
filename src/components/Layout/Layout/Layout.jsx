import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
export default function Layout({ children }) {
  const path = window.location.pathname;
  const isTransparentPage = path === '/' || path === '/about'; 
  const isRelativePage = path === '/prices' || path === '/contact';
  return (
    <>
      <Header transparent={isTransparentPage} relativePage={isRelativePage}/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
