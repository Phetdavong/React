import React from 'react';
import { FooterMemorize } from '../../components/common/footer';
import { HeaderMemo } from '../../components/home/Header';
import { Services } from '../../components/home/services';
import { Software } from '../../components/home/Software';
import Brand from '../../components/home/slide-brand/Brand';
import Recruitment from '../../components/home/slide-recruitment/Recruitment';
import { News } from '../../components/home/News';
// import { Contact } from '../../components/home/Contact';
import { ContactForm } from '../../components/home/Validate';
import Menu from '../../components/common/Menu';
const Home = () => {
  return (
    <div>
      <Menu />
      <HeaderMemo />
      <Services />
      <Software />
      <Brand />
      <Recruitment />
      <News />
      <ContactForm />
      <FooterMemorize />
    </div>
  );
};

export default Home;
