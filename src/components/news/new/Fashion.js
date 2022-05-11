import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Slide from '../new/Slide'
import FashionMobile from './FashionMobile'
export default function Fashion() {
    return (
        <section>
            <div className='d-none d-md-block fashion-list' >
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 fashion-tab">
                    <Tab eventKey="home" title="Xem tất cả" className="text-uppercase">
                        <Slide/>
                    </Tab>
                    <Tab eventKey="tech" title="Tech" className="text-uppercase">
                        <Slide/>
                    </Tab>
                    <Tab eventKey="profile" title="Thời trang" className="text-uppercase">
                        <Slide/>
                    </Tab>
                    <Tab eventKey="contact" title="Thời trang"  className="text-uppercase">
                        <Slide/>
                    </Tab>
                    <Tab eventKey="fas" title="Thời trang"  className="text-uppercase">
                        <Slide/>
                    </Tab>
                    <Tab eventKey="fashion" title="Thời trang"  className="text-uppercase">
                        <Slide/>
                    </Tab>
                </Tabs>
            </div>
            <FashionMobile />
        </section>
    )
}
