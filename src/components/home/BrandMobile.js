import React, { Component } from "react";
import Slider from "react-slick";
import Wordpress from './../../assets/image/Wordpress logo.png'
import Statamic from './../../assets/image/Statamic logo.png'
import Drupal from './../../assets/image/Drupal logo.png'

export default class BrandMobile extends Component {
    
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
        const brandLogo={
            slidesToShow: 3,
            slidesToScroll: 1,
            dots:false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, ]
        }
        return (
            <div> 
                <div className="d-block d-md-none d-lg-none"
                    style={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" }}
                >
                    <div
                        className="m-auto py-2 brand-home-name-slide"
               
                    >
                        <Slider
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                        >
                            <div className="list-item">
                                <a
                                    className="text-center item-mobile"
                                    href='#'
                                >
                                    CMS
                                </a>
                            </div>
                            <div className="list-item">
                                <a
                                    className="text-center item-mobile"
                                    href='#'
                                >
                                    FRONT-END
                                </a>
                            </div>
                            <div className="list-item">
                                <a
                                    className="text-center item-mobile"
                                    href='#'
                                >
                                    SERVER SIDE
                                </a>
                            </div>
                            <div className="list-item">
                                <a
                                    className="text-center item-mobile"
                                    href='#'
                                >
                                    MOBILE
                                </a>
                            </div>
                            <div className="list-item">
                                <a
                                    className="text-center item-mobile"
                                    href='#'
                                >
                                    E-COMMERCE
                                </a>
                            </div>
                        </Slider>
                        <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={1}
                            swipeToSlide={true}
                            focusOnSelect={true}
                        >
                            <div>
                                <div className="container">
                                    <div className="brand-slide-box">
                                        <div className="py-5 brand-slide-box-content">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="col-12 col-md-9 col-lg-8 brand-slide-content-logo">
                                                    <Slider {...brandLogo}>
                                                        <div className="m-2 brand-slide-item" id="brand">
                                                            <img src={Wordpress} alt ="Wordpress" />
                                                        </div>
                                                        <div className="m-2 brand-slide-item" id="brand">
                                                            <img src={Drupal} alt="Drupal" />
                                                        </div>
                                                        <div className="m-2 brand-slide-item" id="brand">
                                                            <img src={Statamic} alt="Statamic" />
                                                        </div>
                                                        <div className="m-2 brand-slide-item" id="brand">
                                                            <img src={Wordpress} alt ="Wordpress" />
                                                        </div>
                                                        <div className="m-2 brand-slide-item" id="brand">
                                                            <img src={Drupal} alt="Drupal" />
                                                        </div>
                                                        <div className="m-2 brand-slide-item">
                                                            <img src={Statamic} alt="Statamic" />
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container">
                                    <div className="brand-slide-box">
                                        <div className="py-5 brand-slide-box-content">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="col-12 col-md-9 col-lg-8 brand-slide-content-logo">
                                                    <Slider {...brandLogo}>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Wordpress} alt ="Wordpress" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Drupal} alt="Drupal" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Statamic} alt="Statamic" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Wordpress} alt ="Wordpress" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Drupal} alt="Drupal" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item">
                                                            <img src={Statamic} alt="Statamic" />
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container">
                                    <div className="brand-slide-box">
                                        <div className="py-5 brand-slide-box-content">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="col-12 col-md-9 col-lg-8 brand-slide-content-logo">
                                                    <Slider {...brandLogo}>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Wordpress} alt ="Wordpress" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Drupal} alt="Drupal" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Statamic} alt="Statamic" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Wordpress} alt ="Wordpress" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Drupal} alt="Drupal" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item">
                                                            <img src={Statamic} alt="Statamic" />
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container">
                                    <div className="brand-slide-box">
                                        <div className="py-5 brand-slide-box-content">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="col-12 col-md-9 col-lg-8 brand-slide-content-logo">
                                                    <Slider {...brandLogo}>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Wordpress} alt ="Wordpress" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Drupal} alt="Drupal" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Statamic} alt="Statamic" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Wordpress} alt ="Wordpress" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Drupal} alt="Drupal" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item">
                                                            <img src={Statamic} alt="Statamic" />
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container">
                                    <div className="brand-slide-box">
                                        <div className="py-5 brand-slide-box-content">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="col-12 col-md-9 col-lg-8 brand-slide-content-logo">
                                                    <Slider {...brandLogo}>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Wordpress} alt ="Wordpress" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Drupal} alt="Drupal" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Statamic} alt="Statamic" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Wordpress} alt ="Wordpress" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item" id="brand">
                                                            <img src={Drupal} alt="Drupal" />
                                                        </div>
                                                        <div className="mx-2 mx-sm-4 my-2 brand-slide-item">
                                                            <img src={Statamic} alt="Statamic" />
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}