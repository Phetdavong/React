import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import iconFE from '../../../assets/image/iconFE.svg';
export default class RecruitMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <section className="d-block d-sm-block d-md-none d-lg-none recruitment-home">
          <div className="mt-5 d-flex justify-content-center topic">
            <div className="my-auto line" />
            <h1 className="px-3 text-center text-uppercase">
              <a href>Tuyển dụng</a>
            </h1>
            <div className="my-auto line" />
          </div>
          <div className="py-5 container-fluid recruitment-content-slide-mobile" id="recruitment">
            <nav className="row justify-content-center">
              <div className="vacancies-slide">
                <Slider asNavFor={this.state.nav2} ref={(slider) => (this.slider1 = slider)}>
                  <a className="col-4 d-flex justify-content-center">
                    <img src={iconFE} alt="iconFE" />
                    <p className="pt-2 text-center">designer</p>
                  </a>
                  <a className="col-4 d-flex justify-content-center" href="#">
                    <img src={iconFE} alt="iconFE" />
                    <p className="pt-2 text-center">technical</p>
                  </a>
                  <a className="col-4 d-flex justify-content-center" href="#">
                    <img src={iconFE} alt="iconFE" />
                    <p className="pt-2 text-center">non-technical</p>
                  </a>
                  <a className="col-4 d-flex justify-content-center" href="#">
                    <img src={iconFE} alt="iconFE" />
                    <p className="pt-2 text-center">ecommerce</p>
                  </a>
                </Slider>
              </div>
            </nav>
            <div className="tab-content vacancies-slide-content" id="nav-tabContent">
              <Slider
                asNavFor={this.state.nav1}
                ref={(slider) => (this.slider2 = slider)}
                slidesToShow={1}
                swipeToSlide={true}
                focusOnSelect={true}>
                <div>
                  <div className="ml-4 mt-3 recruitment-content-mobile">
                    <h5 className="mb-2">Web Designer</h5>
                    <h6 className="mb-1">Vị trí: Intership</h6>
                    <p className="mb-1">Địa điểm: Hải Châu, Đà Nẵng</p>
                    <p className="mb-1">Cập nhật: Bạn còn một tháng để ứng tuyển</p>
                    <p>
                      <a href="#">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="currentColor"
                          className="ml-1 bi bi-arrow-right-circle"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 
                                                0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1
                                                 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 
                                                 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 
                                                 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                  <div className="ml-4 mt-3 recruitment-content-mobile">
                    <h5 className="mb-2">UX/UI Designer</h5>
                    <h6 className="mb-1">Vị trí: Intership</h6>
                    <p className="mb-1">Địa điểm: Hải Châu, Đà Nẵng</p>
                    <p className="mb-1">Cập nhật: Bạn còn một tháng để ứng tuyển</p>
                    <p>
                      <a href="#">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="currentColor"
                          className="ml-1 bi bi-arrow-right-circle"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0
                                                  8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5
                                                  0 0 0 .708.708l3-3a.5.5 0 0 
                                                  0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                  <div className="ml-4 mt-3 recruitment-content-mobile">
                    <h5 className="mb-2">Web Designer</h5>
                    <h6 className="mb-1">Vị trí: Intership</h6>
                    <p className="mb-1">Địa điểm: Hải Châu, Đà Nẵng</p>
                    <p className="mb-1">Cập nhật: Bạn còn một tháng để ứng tuyển</p>
                    <p>
                      <a href="#">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="currentColor"
                          className="ml-1 bi bi-arrow-right-circle"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0
                                                  8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147
                                                  2.146a.5.5 0 0 0 .708.708l3-3a.5.5
                                                 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="ml-4 mt-3 recruitment-content-mobile">
                    <h5 className="mb-2">Web Designer</h5>
                    <h6 className="mb-1">Vị trí: Intership</h6>
                    <p className="mb-1">Địa điểm: Hải Châu, Đà Nẵng</p>
                    <p className="mb-1">Cập nhật: Bạn còn một tháng để ứng tuyển</p>
                    <p>
                      <a href="#">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="currentColor"
                          className="ml-1 bi bi-arrow-right-circle"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1
                                                 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 
                                                 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 
                                                 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                  <div className="ml-4 mt-3 recruitment-content-mobile">
                    <h5 className="mb-2">UX/UI Designer</h5>
                    <h6 className="mb-1">Vị trí: Intership</h6>
                    <p className="mb-1">Địa điểm: Hải Châu, Đà Nẵng</p>
                    <p className="mb-1">Cập nhật: Bạn còn một tháng để ứng tuyển</p>
                    <p>
                      <a href="#">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="currentColor"
                          className="ml-1 bi bi-arrow-right-circle"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1
                                                 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147
                                                2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5
                                                 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                  <div className="ml-4 mt-3 recruitment-content-mobile">
                    <h5 className="mb-2">Web Designer</h5>
                    <h6 className="mb-1">Vị trí: Intership</h6>
                    <p className="mb-1">Địa điểm: Hải Châu, Đà Nẵng</p>
                    <p className="mb-1">Cập nhật: Bạn còn một tháng để ứng tuyển</p>
                    <p>
                      <a href="#">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="currentColor"
                          className="ml-1 bi bi-arrow-right-circle"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15
                                                 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5
                                                  0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5
                                                   0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="ml-4 mt-3 recruitment-content-mobile">
                    <h5 className="mb-2">Web Designer</h5>
                    <h6 className="mb-1">Vị trí: Intership</h6>
                    <p className="mb-1">Địa điểm: Hải Châu, Đà Nẵng</p>
                    <p className="mb-1">Cập nhật: Bạn còn một tháng để ứng tuyển</p>
                    <p>
                      <a href="#">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="currentColor"
                          className="ml-1 bi bi-arrow-right-circle"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15
                                                 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5
                                                  0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5
                                                   0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                  <div className="ml-4 mt-3 recruitment-content-mobile">
                    <h5 className="mb-2">UX/UI Designer</h5>
                    <h6 className="mb-1">Vị trí: Intership</h6>
                    <p className="mb-1">Địa điểm: Hải Châu, Đà Nẵng</p>
                    <p className="mb-1">Cập nhật: Bạn còn một tháng để ứng tuyển</p>
                    <p>
                      <a href="#">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="currentColor"
                          className="ml-1 bi bi-arrow-right-circle"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15
                                                 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5
                                                  0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5
                                                   0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                  <div className="ml-4 mt-3 recruitment-content-mobile">
                    <h5 className="mb-2">Web Designer</h5>
                    <h6 className="mb-1">Vị trí: Intership</h6>
                    <p className="mb-1">Địa điểm: Hải Châu, Đà Nẵng</p>
                    <p className="mb-1">Cập nhật: Bạn còn một tháng để ứng tuyển</p>
                    <p>
                      <a href="#">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="currentColor"
                          className="ml-1 bi bi-arrow-right-circle"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15
                                                 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5
                                                  0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5
                                                   0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="ml-4 mt-3 recruitment-content-mobile">
                    <h5 className="mb-2">Web Designer</h5>
                    <h6 className="mb-1">Vị trí: Intership</h6>
                    <p className="mb-1">Địa điểm: Hải Châu, Đà Nẵng</p>
                    <p className="mb-1">Cập nhật: Bạn còn một tháng để ứng tuyển</p>
                    <p>
                      <a href="#">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="currentColor"
                          className="ml-1 bi bi-arrow-right-circle"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15
                                                 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5
                                                  0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5
                                                   0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                  <div className="ml-4 mt-3 recruitment-content-mobile">
                    <h5 className="mb-2">UX/UI Designer</h5>
                    <h6 className="mb-1">Vị trí: Intership</h6>
                    <p className="mb-1">Địa điểm: Hải Châu, Đà Nẵng</p>
                    <p className="mb-1">Cập nhật: Bạn còn một tháng để ứng tuyển</p>
                    <p>
                      <a href="#">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="currentColor"
                          className="ml-1 bi bi-arrow-right-circle"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15
                                                 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5
                                                  0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5
                                                   0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                  <div className="ml-4 mt-3 recruitment-content-mobile">
                    <h5 className="mb-2">Web Designer</h5>
                    <h6 className="mb-1">Vị trí: Intership</h6>
                    <p className="mb-1">Địa điểm: Hải Châu, Đà Nẵng</p>
                    <p className="mb-1">Cập nhật: Bạn còn một tháng để ứng tuyển</p>
                    <p>
                      <a href="#">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          fill="currentColor"
                          className="ml-1 bi bi-arrow-right-circle"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15
                                                 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5
                                                  0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5
                                                   0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="m-auto d-flex justify-content-center align-items-center">
              <Link to="/recruitment" className="mt-2 pt-2 btn btn-outline-warning btn-page">
                <p className="pt-1">XEM THÊM</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
