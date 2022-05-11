import React from 'react';
import {NewMenu} from '../../components/news/Menu'
import Banner from '../../components/news/new/Banner';
import Content from '../../components/news/new/Content';
import { FooterMemorize } from '../../components/common/footer';
import Fashion from '../../components/news/new/Fashion';
const News = () => {
    return (
        <div>
            <NewMenu />
            <Banner />
            <Fashion />
            <Content />
            <FooterMemorize/>
        </div>
    );
};

export default News;
