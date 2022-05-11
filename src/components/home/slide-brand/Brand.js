import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Slide from './Slide'
import BrandMobile from '../BrandMobile'
export default function Brand() {
    return (
        <section>
            <Tabs defaultActiveKey="CMS" id="uncontrolled-tab-example" 
                className="d-none d-md-flex d-lg-flex mb-3 brand-home-name-slide"
            >
                <Tab eventKey="CMS" title="CMS" className="text-uppercase">
                    <Slide />
                </Tab>
                <Tab eventKey="FRONTEND" title="FRONTEND" className="text-uppercase">
                    <Slide/>
                </Tab>
                <Tab eventKey="SERVER SIDE" title="SERVER SIDE" className="text-uppercase">
                    <Slide/>
                </Tab>
                <Tab eventKey="MOBILE" title="MOBILE"  className="text-uppercase">
                    <Slide/>
                </Tab>
                <Tab eventKey="E-COMMERCE" title="E-COMMERCE"  className="text-uppercase">
                    <Slide/>
                </Tab>
            </Tabs>
            <BrandMobile />
        </section>
    )
}
