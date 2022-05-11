import React from 'react'
import Slider from 'react-slick'
import new1 from '../../../assets/image/new-content1.png'
export default function Slide() {
    const NewSlide={
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        row: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
            }
        }, {
            breakpoint: 992,
            settings: {
                arrows: false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
               
            }
        }
        ]
    }
    return (
        <div>
            <div className="mt-1 mt-md-5 pt-5 row new-fashion-slide">
                <Slider {...NewSlide}>
                    <div className="px-3 col-4 new-fashion-slide-item">
                        <img className="w-100 h-100" src={new1} alt />
                        <div className="new-fashion-slide-item-text">
                            <a href="#">
                                <p className="ml-4 my-1">Thời trang</p>
                            </a>
                        </div>
                    </div>
                    <div className="px-3 col-4 new-fashion-slide-item">
                        <img className="w-100 h-100" src={new1} alt />
                        <div className="new-fashion-slide-item-text">
                            <a href="#">
                                <p className="ml-4 my-1">Thời trang</p>
                            </a>
                        </div>
                    </div>
                    <div className="px-3 col-4 new-fashion-slide-item">
                        <img className="w-100 h-100" src={new1} alt />
                        <div className="new-fashion-slide-item-text">
                            <a href="#">
                                <p className="ml-4 my-1">Thời trang</p>
                            </a>
                        </div>
                    </div>
                    <div className="px-3 col-4 new-fashion-slide-item">
                        <img className="w-100 h-100" src={new1} alt />
                        <div className="new-fashion-slide-item-text">
                            <a href="#">
                                <p className="ml-4 my-1">Thời trang</p>
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
