import React from 'react'
import Wordpress from '../../../assets/image/Wordpress logo.png'
import Statamic from '../../../assets/image/Statamic logo.png'
import Drupal from '../../../assets/image/Drupal logo.png'
import Slider from 'react-slick'
export default function Slide() {
    const brandLogo={
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:false,
        arrows: true,
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
        <div className="d-none d-md-block d-lg-block container">
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
    )
}
