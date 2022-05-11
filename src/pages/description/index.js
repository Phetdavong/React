import React from 'react';
import { FooterMemorize } from '../../components/common/footer';
import Menu from '../../components/common/Menu';
import Content from '../../components/description/Content';
import FormInf from '../../components/description/Form';
import Header from '../../components/description/Header';

const Description  = () => {
    return (
        <div>
            <Menu />
            <Header />
            <Content />
            <FormInf />
            <FooterMemorize/>
        </div>
    );
};

export default  Description;
