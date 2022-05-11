import React from 'react';
import {NewMenu} from '../../components/news/Menu'
import { FooterMemorize } from '../../components/common/footer';
import Banner from '../../components/news/new-detail/Banner';
import Content from '../../components/news/new-detail/Content';
import LatestNews from '../../components/news/new-detail/LatestNews';
import MostRead from '../../components/news/new-detail/MostRead';
const NewsDetail = () => {
    return (
        <div>
            <NewMenu />
            <Banner />
            <Content />
            <LatestNews />
            <MostRead />
            <FooterMemorize />
        </div>
    );
};

export default NewsDetail;