import React from 'react';
import  MainLayout from '../components/layout/main-layout'
import '../../styles/globals.css';
import '../../styles/general.sass';
import '../../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp
