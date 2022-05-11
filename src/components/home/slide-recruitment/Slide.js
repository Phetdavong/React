import design from '../../../assets/image/design.svg';
import uiuxdesigner from '../../../assets/image/icon-uiuxdesigner.svg';
import graphic from '../../../assets/image/graphic.svg';
import orther from '../../../assets/image/orther.svg';
import Slider from 'react-slick';

import React from 'react';

export default function Slide() {
  const recruitmentContentList = {
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="row">
      <div className="col-12 my-5 tab-content vacancies-content" id="myTabContent">
        <div
          className="tab-pane fade show active recruitment-content-slide"
          id="designer"
          role="tabpanel"
          aria-labelledby="designer-tab">
          <div className="m-auto row recruitment-content-slide-list">
            <Slider {...recruitmentContentList}>
              <div className="col-2 recruitment-content-slide-item">
                <a className="mx-auto" href="#">
                  <div className="recruitment-slide-block">
                    <div className="mx-5 my-3 recruitment-slide-block-img">
                      <div
                        className="recruitment-slide-block-img-item 
                                                            recruitment-slide-block-img-before"
                        style={{
                          width: 70,
                          height: '70px',
                          marginTop: 4,
                          backgroundColor: '#707070',
                          mask: `url(${design}) no-repeat center / contain`,
                          WebkitMask: `url(${design}) no-repeat center / contain`
                        }}
                      />
                      <div
                        className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                        style={{
                          width: 70,
                          height: 70,
                          marginTop: 4,
                          backgroundColor: '#fbb03b',
                          mask: `url(${design}) no-repeat center / contain`,
                          WebkitMask: `url(${design}) no-repeat center / contain`
                        }}
                      />
                    </div>
                    <p
                      className="text-center mx-1 py-3 
                                                        recruitment-slide-block-name">
                      Web Design Fresher
                    </p>
                  </div>
                </a>
                <div className="recruitment-slide-block-text">
                  <a className="mx-auto" href="./recruitment.html">
                    <button type="button" className="btn btn-primary">
                      Đang tuyển
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-2 recruitment-content-slide-item">
                <a href="#">
                  <div className="recruitment-slide-block">
                    <div className="mx-5 my-3 recruitment-slide-block-img">
                      <div
                        className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                        style={{
                          width: 70,
                          height: 70,
                          marginTop: 4,
                          backgroundColor: '#707070',
                          mask: `url(${uiuxdesigner}) no-repeat center / contain`,
                          WebkitMask: `url(${uiuxdesigner}) no-repeat center / contain`
                        }}
                      />
                      <div
                        className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                        style={{
                          width: 70,
                          height: 70,
                          marginTop: 4,
                          backgroundColor: '#fbb03b',
                          mask: `url(${uiuxdesigner}) no-repeat center / contain`,
                          WebkitMask: `url(${uiuxdesigner}) no-repeat center / contain`
                        }}
                      />
                    </div>
                    <p
                      className="text-center mx-1 py-5 
                                                        recruitment-slide-block-name">
                      UI/UX Designer Internship{' '}
                    </p>
                  </div>
                </a>
                <div className="recruitment-slide-block-text">
                  <a href="./recruitment.html">
                    <button type="button" className="btn btn-primary">
                      Đang tuyển
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-2 recruitment-content-slide-item">
                <a href="#">
                  <div className="recruitment-slide-block">
                    <div className="mx-5 my-3 recruitment-slide-block-img">
                      <div
                        className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                        style={{
                          width: 70,
                          height: 70,
                          marginTop: 4,
                          backgroundColor: '#707070',
                          mask: `url(${graphic}) no-repeat center / contain`,
                          WebkitMask: `url(${graphic}) no-repeat center / contain`
                        }}
                      />
                      <div
                        className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                        style={{
                          width: 70,
                          height: 70,
                          marginTop: 4,
                          backgroundColor: '#fbb03b',
                          mask: `url(${graphic}) no-repeat center / contain`,
                          WebkitMask: `url(${graphic}) no-repeat center / contain`
                        }}
                      />
                    </div>
                    <p
                      className="text-center mx-1 py-5
                                                         recruitment-slide-block-name">
                      Graphic Designer Junior
                    </p>
                  </div>
                </a>
                <div className="recruitment-slide-block-text">
                  <a href="./recruitment.html">
                    <button type="button" className="btn btn-primary">
                      Đang tuyển
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-2 recruitment-content-slide-item">
                <a href="#">
                  <div className="recruitment-slide-block">
                    <div className="mx-5 my-3 recruitment-slide-block-img">
                      <div
                        className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                        style={{
                          width: 70,
                          height: 70,
                          marginTop: 4,
                          backgroundColor: '#707070',
                          mask: `url(${orther}) no-repeat center / contain`,
                          WebkitMask: `url(${orther}) no-repeat center / contain`
                        }}
                      />
                      <div
                        className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                        style={{
                          width: 70,
                          height: 70,
                          marginTop: 4,
                          backgroundColor: '#fbb03b',
                          mask: `url(${orther}) no-repeat center / contain`,
                          WebkitMask: `url(${orther}) no-repeat center / contain`
                        }}
                      />
                    </div>
                    <p className="text-center ml-4 recruitment-slide-block-name">Other Designer</p>
                  </div>
                </a>
                <div className="recruitment-slide-block-text">
                  <a href="./recruitment.html">
                    <button type="button" className="btn btn-primary">
                      Đang tuyển
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-2 recruitment-content-slide-item">
                <a href="#">
                  <div className="recruitment-slide-block">
                    <div className="mx-5 my-3 recruitment-slide-block-img">
                      <div
                        className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                        style={{
                          width: 70,
                          height: 70,
                          marginTop: 4,
                          backgroundColor: '#707070',
                          mask: `url(${orther}) no-repeat center / contain`,
                          WebkitMask: `url(${orther}) no-repeat center / contain`
                        }}
                      />
                      <div
                        className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                        style={{
                          width: 70,
                          height: 70,
                          marginTop: 4,
                          backgroundColor: '#fbb03b',
                          mask: `url(${orther}) no-repeat center / contain`,
                          WebkitMask: `url(${orther}) no-repeat center / contain`
                        }}
                      />
                    </div>
                    <p className="text-center ml-4 recruitment-slide-block-name">Other Designer</p>
                  </div>
                </a>
                <div className="recruitment-slide-block-text">
                  <a href="./recruitment.html">
                    <button type="button" className="btn btn-primary">
                      Đang tuyển
                    </button>
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div
          className="tab-pane fade recruitment-content-slide"
          id="technical"
          role="tabpanel"
          aria-labelledby="technical-tab">
          <div className="m-auto row recruitment-content-slide-list">
            <div className="col-2 recruitment-content-slide-item">
              <a className="mx-auto" href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item 
                                                            recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: '70px',
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${design}) no-repeat center / contain`,
                        WebkitMask: `url(${design}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${design}) no-repeat center / contain`,
                        WebkitMask: `url(${design}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center mx-1 py-5 recruitment-slide-block-name">
                    Web Design Fresher
                  </p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2 recruitment-content-slide-item">
              <a href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${uiuxdesigner}) no-repeat center / contain`,
                        WebkitMask: `url(${uiuxdesigner}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${uiuxdesigner}) no-repeat center / contain`,
                        WebkitMask: `url(${uiuxdesigner}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center mx-1 py-5 recruitment-slide-block-name">
                    UI/UX Designer Internship{' '}
                  </p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2 recruitment-content-slide-item">
              <a href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${graphic}) no-repeat center / contain`,
                        WebkitMask: `url(${graphic}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${graphic}) no-repeat center / contain`,
                        WebkitMask: `url(${graphic}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center mx-1 py-5 recruitment-slide-block-name">
                    Graphic Designer Junior
                  </p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2 recruitment-content-slide-item">
              <a href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${orther}) no-repeat center / contain`,
                        WebkitMask: `url(${orther}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${orther}) no-repeat center / contain`,
                        WebkitMask: `url(${orther}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center ml-4 recruitment-slide-block-name">Other Designer</p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2 recruitment-content-slide-item">
              <a href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${orther}) no-repeat center / contain`,
                        WebkitMask: `url(${orther}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${orther}) no-repeat center / contain`,
                        WebkitMask: `url(${orther}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center ml-4 recruitment-slide-block-name">Other Designer</p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade recruitment-content-slide"
          id="non-technical"
          role="tabpanel"
          aria-labelledby="non-technical-tab">
          <div className="m-auto row recruitment-content-slide-list">
            <div className="col-2 recruitment-content-slide-item">
              <a className="mx-auto" href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item 
                                                            recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: '70px',
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${design}) no-repeat center / contain`,
                        WebkitMask: `url(${design}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${design}) no-repeat center / contain`,
                        WebkitMask: `url(${design}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center mx-1 py-5 recruitment-slide-block-name">
                    Web Design Fresher
                  </p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2 recruitment-content-slide-item">
              <a href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${uiuxdesigner}) no-repeat center / contain`,
                        WebkitMask: `url(${uiuxdesigner}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${uiuxdesigner}) no-repeat center / contain`,
                        WebkitMask: `url(${uiuxdesigner}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center mx-1 py-5 recruitment-slide-block-name">
                    UI/UX Designer Internship{' '}
                  </p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2 recruitment-content-slide-item">
              <a href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${graphic}) no-repeat center / contain`,
                        WebkitMask: `url(${graphic}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${graphic}) no-repeat center / contain`,
                        WebkitMask: `url(${graphic}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center mx-1 py-5 recruitment-slide-block-name">
                    Graphic Designer Junior
                  </p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2 recruitment-content-slide-item">
              <a href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${orther}) no-repeat center / contain`,
                        WebkitMask: `url(${orther}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${orther}) no-repeat center / contain`,
                        WebkitMask: `url(${orther}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center ml-4 recruitment-slide-block-name">Other Designer</p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2 recruitment-content-slide-item">
              <a href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${orther}) no-repeat center / contain`,
                        WebkitMask: `url(${orther}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${orther}) no-repeat center / contain`,
                        WebkitMask: `url(${orther}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center ml-4 recruitment-slide-block-name">Other Designer</p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade recruitment-content-slide"
          id="ecommerce"
          role="tabpanel"
          aria-labelledby="ecommerce-tab">
          <div className="m-auto row recruitment-content-slide-list">
            <div className="col-2 recruitment-content-slide-item">
              <a className="mx-auto" href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item 
                                                            recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: '70px',
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${design}) no-repeat center / contain`,
                        WebkitMask: `url(${design}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${design}) no-repeat center / contain`,
                        WebkitMask: `url(${design}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center mx-1 py-5 recruitment-slide-block-name">
                    Web Design Fresher
                  </p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2 recruitment-content-slide-item">
              <a href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${uiuxdesigner}) no-repeat center / contain`,
                        WebkitMask: `url(${uiuxdesigner}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${uiuxdesigner}) no-repeat center / contain`,
                        WebkitMask: `url(${uiuxdesigner}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center mx-1 py-5 recruitment-slide-block-name">
                    UI/UX Designer Internship{' '}
                  </p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2 recruitment-content-slide-item">
              <a href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${graphic}) no-repeat center / contain`,
                        WebkitMask: `url(${graphic}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${graphic}) no-repeat center / contain`,
                        WebkitMask: `url(${graphic}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center mx-1 py-5 recruitment-slide-block-name">
                    Graphic Designer Junior
                  </p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2 recruitment-content-slide-item">
              <a href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${orther}) no-repeat center / contain`,
                        WebkitMask: `url(${orther}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${orther}) no-repeat center / contain`,
                        WebkitMask: `url(${orther}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center ml-4 recruitment-slide-block-name">Other Designer</p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2 recruitment-content-slide-item">
              <a href="#">
                <div className="recruitment-slide-block">
                  <div className="mx-5 my-3 recruitment-slide-block-img">
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-before"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#707070',
                        mask: `url(${orther}) no-repeat center / contain`,
                        WebkitMask: `url(${orther}) no-repeat center / contain`
                      }}
                    />
                    <div
                      className="recruitment-slide-block-img-item
                                                             recruitment-slide-block-img-after"
                      style={{
                        width: 70,
                        height: 70,
                        marginTop: 4,
                        backgroundColor: '#fbb03b',
                        mask: `url(${orther}) no-repeat center / contain`,
                        WebkitMask: `url(${orther}) no-repeat center / contain`
                      }}
                    />
                  </div>
                  <p className="text-center ml-4 recruitment-slide-block-name">Other Designer</p>
                </div>
              </a>
              <div className="recruitment-slide-block-text">
                <a href="./recruitment.html">
                  <button type="button" className="btn btn-primary">
                    Đang tuyển
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
