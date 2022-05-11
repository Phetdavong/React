import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Slide from './Slide';
import { Link } from 'react-router-dom';
import { GrLocation } from 'react-icons/gr';
import { FiClock } from 'react-icons/fi';
import RecruitMobile from './RecruitMobile';
export default function Recruitment() {
  return (
    <section>
      <section className="my-5 d-none d-sm-none d-md-block d-lg-block recruitment-home">
        <div className="my-5 d-flex justify-content-center topic">
          <div className="my-auto line" />
          <h1 className="px-3 text-center text-uppercase">
            <a href>Tuyển dụng</a>
          </h1>
          <div className="my-auto line" />
        </div>
        <div className="recruitment-content" id="recruitment">
          <div className="container">
            <Tabs
              defaultActiveKey="designer"
              id="uncontrolled-tab-example"
              className="d-none d-md-flex d-lg-flex col-12 vacancies">
              <Tab eventKey="designer" title="designer" className="text-center">
                <Slide />
              </Tab>
              <Tab eventKey="technical" title="technical" className="text-center">
                <Slide />
              </Tab>
              <Tab eventKey="non-technical" title="non-technical" className="text-center">
                <Slide />
              </Tab>
              <Tab eventKey="ecommerce" title="ecommerce" className="text-center">
                <Slide />
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="container">
          <div className="mb-3 recruitment-content-text">
            <div className="d-flex recruitment-content-text-item">
              <FiClock />
              <p>Đang trong quá trình tuyển dụng các vị trí </p>
            </div>
            <div className="d-flex recruitment-content-text-item">
              <GrLocation />
              <p className="text-center">
                K46/14 đường 2 tháng 9, phường Bình Hiên, quận Hải Châu, thành phố Đà Nẵng
              </p>
            </div>
          </div>
          <div className="col-12 m-auto d-flex justify-content-center align-items-center">
            <Link to="/recruitment" className="mx-3 pt-2 btn btn-outline-warning btn-page">
              <p className="px-3 pt-1">XEM THÊM CHI TIẾT</p>
            </Link>
          </div>
        </div>
      </section>
      <RecruitMobile />
    </section>
  );
}
