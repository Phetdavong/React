import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import detail from '../../../assets/image/new1.png'
export default function Banner() {
    const SlideBanner={
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        row: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    return (
        <section className="banner-news">
            <div className="container">
                <div className="m-0 row">
                    <div className="m-auto col-md-12 col-lg-6">
                        <div className="mt-5 mr-5 d-flex banner-news-content">
                            <div className="mx-auto d-flex row banner-news-content-box">
                                <h3 className="pr-0 pr-md-5 text-uppercase">
                                    Top 3 kênh mua sắm trực tuyến ở việt nam
                                </h3>
                                <p className="mb-0 banner-news-content-date">01/02/2021 by Admin</p>
                                <p className="pr-0 pr-md-5 banner-news-content-text">
                                    Với tốc độ phát triển như vũ bão của Internet, công việc kinh
                                    doanh đang dần chuyển mình từ bán hàng truyền thống sang nền tảng
                                    online...
                                </p>
                                <div className="row">
                                    <div className="m-auto">
                                        <Link to="/news"
                                            className="mx-3 pt-2 btn btn-outline-warning  btn-page"
                                        >
                                            <p className="pt-1">XEM THÊM</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 col-md-12 col-lg-6">
                        <div className="mt-5 banner-news-img">
                            <div className="banner-news-img-slide">
                                <Slider {...SlideBanner}>
                                    <div className="banner-news-img-item">
                                        <img src={detail} alt />
                                    </div>
                                    <div className="banner-news-img-item">
                                        <img src={detail} alt />
                                    </div>
                                    <div className="banner-news-img-item">
                                        <img src={detail} alt />
                                    </div>
                                    <div className="banner-news-img-item">
                                        <img src={detail} alt />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 col-12 banner-news-text">
                        <p>
                            Với tốc độ phát triển như vũ bão của Internet, công việc kinh doanh
                            đang dần chuyển mình từ bán hàng truyền thống sang nền tảng online.
                            Với hàng chục trang web và nền tảng cung cấp bán hàng trực tuyến, việc
                            bắt đầu có thể khiến bạn cảm thấy khá choáng ngợp. Từ Shopee đến Tiki,
                            Sendo, và thậm chí cả Facebook, có vô số cơ hội để khám phá và mỗi cơ
                            hội đều có ưu và nhược điểm riêng.
                        </p>
                        <p>
                            Vì vậy, làm thế nào để bạn quyết định kênh bán hàng trực tuyến phù hợp
                            với bạn? Hãy cùng <span style={{ color: "#fbb03b" }}>Outfiz</span> tìm
                            hiểu về top 3 kênh mua sắm trực tuyến ở Việt Nam để có câu trả lời
                            chính xác nhé.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
