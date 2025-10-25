import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './HEADER.JSX';
import Footer from './FOOTER.JSX';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />  {/* This renders nested route components */}
      <Footer />
    </>
  );
}

export default Layout;
