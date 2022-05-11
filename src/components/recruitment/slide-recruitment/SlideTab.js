import React from 'react'
import Slider from 'react-slick'
import design from '../../../assets/image/design.svg'
import uiuxdesigner from '../../../assets/image/icon-uiuxdesigner.svg'
import graphic from '../../../assets/image/graphic.svg'
import orther from '../../../assets/image/orther.svg'
export default function SlideTab() {
    const recruitmentSlide={
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        ]
    }
    return (
        <div className="my-5 pb-5 page-recruitment-slide">
            <Slider {...recruitmentSlide}>
                <div className="page-recruitment-slide-item">
                    <div className="mx-auto page-recruitment-slide-img">
                        <a className="recruitment-slide-block-img" href="#">
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-before"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#707070",
                                    mask: `url(${design}) no-repeat center / contain`,
                                    WebkitMask: `url(${design}) no-repeat center / contain`
                                }}
                            ></div>
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-after"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#fbb03b",
                                    mask: `url(${design}) no-repeat center / contain`,
                                    WebkitMask: `url(${design}) no-repeat center / contain`
                                }}
                            ></div>
                        </a>
                    </div>
                    <p className="pt-3 text-center page-recruitment-slide-text">
                        Web Designer
                    </p>
                </div>
                <div className="page-recruitment-slide-item">
                    <div className="mx-auto page-recruitment-slide-img">
                        <a className="recruitment-slide-block-img" href="#">
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-before"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#707070",
                                    mask: `url(${design}) no-repeat center / contain`,
                                    WebkitMask: `url(${design}) no-repeat center / contain`
                                }}
                            ></div>
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-after"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#fbb03b",
                                    mask: `url(${design}) no-repeat center / contain`,
                                    WebkitMask: `url(${design}) no-repeat center / contain`
                                }}
                            ></div>
                        </a>
                    </div>
                    <p className="pt-3 text-center page-recruitment-slide-text">
                        Web Designer
                    </p>
                </div>
                <div className="page-recruitment-slide-item">
                    <div className="mx-auto page-recruitment-slide-img">
                        <a className="recruitment-slide-block-img" href="#">
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-before"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#707070",
                                    mask:`url(${graphic}) no-repeat center / contain`,
                                    WebkitMask:`url(${graphic}) no-repeat center / contain`
                                }}
                            ></div>
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-after"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#fbb03b",
                                    mask:`url(${graphic}) no-repeat center / contain`,
                                    WebkitMask:`url(${graphic}) no-repeat center / contain`
                                }}
                            ></div>
                        </a>
                    </div>
                    <p className="pt-3 text-center page-recruitment-slide-text">
                        Graphic Designer
                    </p>
                </div>
                <div className="page-recruitment-slide-item">
                    <div className="mx-auto page-recruitment-slide-img">
                        <a className="recruitment-slide-block-img" href="#">
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-before"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#707070",
                                    mask:`url(${orther}) no-repeat center / contain`,
                                    WebkitMask:`url(${orther}) no-repeat center / contain`
                                }}
                            ></div>
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-after"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#fbb03b",
                                    mask: `url(${orther}) no-repeat center / contain`,
                                    WebkitMask: `url(${orther}) no-repeat center / contain`
                                }}
                            ></div>
                        </a>
                    </div>
                    <p className="pt-3 text-center page-recruitment-slide-text">
                        Default Designer
                    </p>
                </div>
                <div className="page-recruitment-slide-item">
                    <div className="mx-auto page-recruitment-slide-img">
                        <a className="recruitment-slide-block-img" href="#">
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-before"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#707070",
                                    mask:
                                    `url(${uiuxdesigner}) no-repeat center / contain`,
                                    WebkitMask:
                                    `url(${uiuxdesigner}) no-repeat center / contain`
                                }}
                            ></div>
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-after"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#fbb03b",
                                    mask:
                                    `url(${uiuxdesigner}) no-repeat center / contain`,
                                    WebkitMask:
                                    `url(${uiuxdesigner}) no-repeat center / contain`
                                }}
                            ></div>
                        </a>
                    </div>
                    <p className="pt-3 text-center page-recruitment-slide-text">
                        UX/UI Designer
                    </p>
                </div>
                <div className="page-recruitment-slide-item">
                    <div className="mx-auto page-recruitment-slide-img">
                        <a className="recruitment-slide-block-img" href="#">
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-before"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#707070",
                                    mask:`url(${graphic}) no-repeat center / contain`,
                                    WebkitMask:`url(${graphic}) no-repeat center / contain`
                                }}
                            ></div>
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-after"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#fbb03b",
                                    mask: `url(${graphic}) no-repeat center / contain`,
                                    WebkitMask: `url(${graphic}) no-repeat center / contain`
                                }}
                            ></div>
                        </a>
                    </div>
                    <p className="pt-3 text-center page-recruitment-slide-text">
                        Graphic Designer
                    </p>
                </div>
                <div className="page-recruitment-slide-item">
                    <div className="mx-auto page-recruitment-slide-img">
                        <a className="recruitment-slide-block-img" href="#">
                            <div
                                className="recruitment-slide-block-img-item recruitment-slide-block-img-before"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#707070",
                                    mask: `url(${orther}) no-repeat center / contain`,
                                    WebkitMask: `url(${orther}) no-repeat center / contain`
                                }}
                            ></div>
                            <div
                                className="recruitment-slide-block-img-item 
                                    recruitment-slide-block-img-after"
                                style={{
                                    width: 155,
                                    height: 136,
                                    marginTop: 4,
                                    backgroundColor: "#fbb03b",
                                    mask: `url(${orther}) no-repeat center / contain`,
                                    WebkitMask: `url(${orther}) no-repeat center / contain`
                                }}
                            ></div>
                        </a>
                    </div>
                    <p className="pt-3 text-center page-recruitment-slide-text">
                        Default Designer
                    </p>
                </div>
            </Slider>
        </div>
    )
}
