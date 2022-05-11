import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
// import Link from 'react-dom'
export default function Banner() {
    const slideBanner={
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        row: false,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    return (
        <section className="w-100 mx-auto pb-5 new-banner">
            <div className="m-auto new-banner-slide-demo">
                <Slider {...slideBanner}>
                    <div className="mx-auto text-center text-uppercase new-banner-text">
                        <h4>Kênh thời trang</h4>
                        <h2 className="w-100 mx-auto pt-5 pb-4 px-5">
                            CÁC TRANG BÁN HÀNG ONLINE MIỄN PHÍ PHỔ BIẾN Ở VIỆT NAM
                        </h2>
                        <Link to="">
                            <p className="mx-auto new-banner-btn-next">Xem thêm</p>
                        </Link>
                    </div>
                    <div className="text-center text-uppercase new-banner-text">
                        <h4>Kênh thời trang</h4>
                        <h2 className="mx-auto pt-5 pb-4 px-5">
                            CÁC TRANG BÁN HÀNG ONLINE MIỄN PHÍ PHỔ BIẾN Ở VIỆT NAM
                        </h2>
                        <Link to="">
                            <p className="mx-auto new-banner-btn-next">Xem thêm</p>
                        </Link>
                    </div>
                    <div className="text-center text-uppercase new-banner-text">
                        <h4>Kênh thời trang</h4>
                        <h2 className="mx-auto pt-5 pb-4 px-5">
                            CÁC TRANG BÁN HÀNG ONLINE MIỄN PHÍ PHỔ BIẾN Ở VIỆT NAM
                        </h2>
                        <Link to="">
                            <p className="mx-auto new-banner-btn-next">Xem thêm</p>
                        </Link>
                    </div>
                    <div className="text-center text-uppercase new-banner-text">
                        <h4>Kênh thời trang</h4>
                        <h2 className="mx-auto pt-5 pb-4 px-5">
                            CÁC TRANG BÁN HÀNG ONLINE MIỄN PHÍ PHỔ BIẾN Ở VIỆT NAM
                        </h2>
                        <Link to="">
                            <p className="mx-auto new-banner-btn-next">Xem thêm</p>
                        </Link>
                    </div>
                </Slider>
            </div>
        </section>
    )
}
