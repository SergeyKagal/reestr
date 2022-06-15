import React from 'react';
import { Footer } from '../../Footer/Footer';
import { Header } from '../../Header/Header';
import { Documents } from './Documents/Documents';
import { Faq } from './Faq/Faq';
import { News } from './News/News';
import { Reestr } from './Reestr/Reestr';

export const Main = () => {
  return (
    <>
      <Header />
      <Reestr></Reestr>
      <News></News>
      <Documents></Documents>
      <Faq></Faq>
      <Footer></Footer>
      <p>Main</p>
    </>
  );
};
