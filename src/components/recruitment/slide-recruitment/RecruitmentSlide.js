import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import SlideTab from './SlideTab'
export default function RecruitmentSlide() {
    return (
        <section className='recruitment-slide'>
            <Tabs defaultActiveKey="design" id="uncontrolled-tab-example" 
                className="d-flex justify-content-center recruitment-slide-category"
            >
                <Tab eventKey="design" title="design">
                    <SlideTab />
                </Tab>
                <Tab eventKey="technical" title="technical">
                    <SlideTab />
                </Tab>
                <Tab eventKey="non-technical" title="non-technical">
                    <SlideTab />
                </Tab>
                <Tab eventKey="ecommerce" title="ecommerce" >
                    <SlideTab />
                </Tab>
            </Tabs>
        </section>
    )
}
