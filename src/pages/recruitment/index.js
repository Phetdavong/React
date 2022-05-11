import React from 'react';
import { NewMenu } from '../../components/news/Menu';
import { FooterMemorize } from '../../components/common/footer';
import Header from '../../components/recruitment/Header';
import Form from '../../components/recruitment/Form';
import Content from '../../components/recruitment/Content';
import RecruitmentSlide from '../../components/recruitment/slide-recruitment/RecruitmentSlide';

const Recruitment = () => {
  return (
    <div>
      <NewMenu />
      <Header />
      <RecruitmentSlide />
      <Form />
      <Content />
      <FooterMemorize />
    </div>
  );
};

export default Recruitment;
