import React from 'react'
import { Link } from 'react-router-dom';
import New1 from './../../assets/image/new1.png';
export const News = (()=> {
    return (
        <section>
            <section className="d-none d-sm-none d-md-block d-lg-block news-home" id="new">
                <div className="py-5 d-flex justify-content-center topic">
                    <div className="my-auto line" />
                    <h1 className="px-3 text-center text-uppercase">
                        <a href>Tin tức</a>
                    </h1>
                    <div className="my-auto line" />
                </div>
                <div className="pb-5 news-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <a href="#"></a>
                                <div className="m-auto news-content-item">
                                    <a href="#">
                                        <div className="news-content-item-img">
                                            <img  src={New1} alt />
                                        </div>
                                    </a>
                                    <div className="mx-auto p-3 news-content-item-text">
                                        <a href="#"></a>
                                        <a href="#">
                                            <h4 className="pt-3">
                                                TOP 3 KÊNH MUA SẮM TRỰC TUYẾN Ở VIỆT NAM
                                            </h4>
                                        </a>
                                        <p className="pt-2">
                                            Với tốc độ phát triển như vũ bão của Internet, công việc kinh
                                            doanh đang dần chuyển mình từ bán hàng truyền thống sang nền
                                            tảng online...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <a href="#"></a>
                                <div className="m-auto news-content-item">
                                    <a href="#">
                                        <div className="news-content-item-img">
                                            <img  src={New1} alt />
                                        </div>
                                    </a>
                                    <div className="mx-auto p-3 news-content-item-text">
                                        <a href="#"></a>
                                        <a href="#">
                                            <h4 className="pt-3">
                                                TOP 3 KÊNH MUA SẮM TRỰC TUYẾN Ở VIỆT NAM
                                            </h4>
                                        </a>
                                        <p className="pt-2">
                                            Với tốc độ phát triển như vũ bão của Internet, công việc kinh
                                            doanh đang dần chuyển mình từ bán hàng truyền thống sang nền
                                            tảng online...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="news-content-item" className="mx-auto col-sm-12 col-md-6 col-lg-4">
                                <a href="#"></a>
                                <div className="m-auto news-content-item">
                                    <a href="#">
                                        <div className="news-content-item-img">
                                            <img  src={New1} alt />
                                        </div>
                                    </a>
                                    <div className="mx-auto p-3 news-content-item-text">
                                        <a href="#"></a>
                                        <a href="#">
                                            <h4 className="pt-3">
                                                TOP 3 KÊNH MUA SẮM TRỰC TUYẾN Ở VIỆT NAM
                                            </h4>
                                        </a>
                                        <p className="pt-2">
                                            Với tốc độ phát triển như vũ bão của Internet, công việc kinh
                                            doanh đang dần chuyển mình từ bán hàng truyền thống sang nền
                                            tảng online...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 m-auto d-flex justify-content-center align-items-center">
                                <Link to="/news" className="mt-5 pt-2 btn btn-outline-warning btn-page">
                                    <p className="pt-1">XEM THÊM</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="d-block d-sm-block d-md-none d-lg-none news-home" 
                id="new" style={{ backgroundColor: "transparent" }}
            >
                <div className="py-5 d-flex justify-content-center topic">
                    <div className="my-auto line" />
                    <h1 className="px-3 text-center text-uppercase">
                        <a href>Tin tức</a>
                    </h1>
                    <div className="my-auto line" />
                </div>
                <div className="mx-4">
                    <div className="pb-4 row">
                        <div className="d-flex">
                            <div className="mx-2 mb-2">
                                <div className="news-home-img">
                                    <img
                                        className="w-100 h-100 object-fit-cover"
                                        src={New1}
                                        alt
                                    />
                                </div>
                            </div>
                            <div className="mx-2 news-home-content">
                                <a href="#">
                                    <h6 className>TOP 3 KÊNH MUA SẮM TRỰC TUYẾN Ở VIỆT NAM</h6>
                                </a>
                                <p className="pt-2">
                                    Với tốc độ phát triển như vũ bão của Internet, công việc kinh
                                    doanh đang dần chuyển mình từ bán hàng truyền thống sang nền tảng
                                    onlie...
                                </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="mx-2 mb-2">
                                <div className="news-home-img">
                                    <img
                                        className="w-100 h-100 object-fit-cover"
                                        src={New1}
                                        alt
                                    />
                                </div>
                            </div>
                            <div className="mx-2 news-home-content">
                                <a href="#">
                                    <h6 className>TOP 3 KÊNH MUA SẮM TRỰC TUYẾN Ở VIỆT NAM</h6>
                                </a>
                                <p className="pt-2">
                                    Với tốc độ phát triển như vũ bão của Internet, công việc kinh
                                    doanh đang dần chuyển mình từ bán hàng truyền thống sang nền tảng
                                    onlie...
                                </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="mx-2 mb-2">
                                <div className="news-home-img">
                                    <img
                                        className="w-100 h-100 object-fit-cover"
                                        src={New1}
                                        alt
                                    />
                                </div>
                            </div>
                            <div className="mx-2 news-home-content">
                                <a href="#">
                                    <h6 className>TOP 3 KÊNH MUA SẮM TRỰC TUYẾN Ở VIỆT NAM</h6>
                                </a>
                                <p className="pt-2">
                                    Với tốc độ phát triển như vũ bão của Internet, công việc kinh
                                    doanh đang dần chuyển mình từ bán hàng truyền thống sang nền tảng
                                    onlie...
                                </p>
                            </div>
                        </div>
                        <div className="m-auto d-flex justify-content-center align-items-center">
                            <Link to="/news" className="mt-2 mb-4 btn btn-outline-warning btn-page">
                                <p>XEM THÊM</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
})
