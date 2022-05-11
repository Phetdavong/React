import React from 'react'
import New1 from '../../../assets/image/new1.png'
export default function MostRead() {
    return (
        <section className="most-read-news">
            <section className="news-home" id="new">
                <div className="mb-5 pt-5 most-read-news-topic">
                    <div className="row">
                        <div className="m-auto">
                            <h3 className="text-center text-uppercase">Tin tức đọc nhiều nhất</h3>
                        </div>
                    </div>
                </div>
                <section
                    className="d-none d-sm-none d-md-block d-lg-block news-home"
                    id="new"
                >
                    <div className="pb-5 news-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <div className="m-auto news-content-item">
                                        <div className="news-content-item-img">
                                            <img src={New1} alt />
                                        </div>
                                        <div className="mx-auto p-3 news-content-item-text">
                                            <a href="#">
                                                <h4 className="pt-3">
                                                    TOP 3 KÊNH MUA SẮM TRỰC TUYẾN Ở VIỆT NAM
                                                </h4>
                                            </a>
                                            <p className="pt-2">
                                                Với tốc độ phát triển như vũ bão của Internet, công việc
                                                kinh doanh đang dần chuyển mình từ bán hàng truyền thống
                                                sang nền tảng online...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <div className="m-auto news-content-item">
                                        <div className="news-content-item-img">
                                            <img src={New1} alt />
                                        </div>
                                        <div className="mx-auto p-3 news-content-item-text">
                                            <a href="#">
                                                <h4 className="pt-3">
                                                    TOP 3 KÊNH MUA SẮM TRỰC TUYẾN Ở VIỆT NAM
                                                </h4>
                                            </a>
                                            <p className="pt-2">
                                                Với tốc độ phát triển như vũ bão của Internet, công việc
                                                kinh doanh đang dần chuyển mình từ bán hàng truyền thống
                                                sang nền tảng online...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <div className="m-auto news-content-item">
                                        <div className="news-content-item-img">
                                            <img src={New1} alt />
                                        </div>
                                        <div className="mx-auto p-3 news-content-item-text">
                                            <a href="#">
                                                <h4 className="pt-3">
                                                    TOP 3 KÊNH MUA SẮM TRỰC TUYẾN Ở VIỆT NAM
                                                </h4>
                                            </a>
                                            <p className="pt-2">
                                                Với tốc độ phát triển như vũ bão của Internet, công việc
                                                kinh doanh đang dần chuyển mình từ bán hàng truyền thống
                                                sang nền tảng online...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="d-block d-sm-block d-md-none d-lg-none news-home"
                    id="new"
                >
                    <div className="container">
                        <div className="pb-4 row">
                            <div className="col-3">
                                <div className="news-home-img">
                                    <img
                                        className="w-100 h-100 object-fit-cover"
                                        src={New1}
                                        alt
                                    />
                                </div>
                            </div>
                            <div className="pl-5 col-9 news-home-content">
                                <a href="#">
                                    <h6 className>TOP 3 KÊNH MUA SẮM TRỰC TUYẾN Ở VIỆT NAM</h6>
                                </a>
                                <p className="pt-2">
                                    Với tốc độ phát triển như vũ bão của Internet, công việc kinh
                                    doanh đang dần chuyển mình từ bán hàng truyền thống sang nền tảng
                                    onlie...
                                </p>
                            </div>
                            <div className="col-3">
                                <div className="news-home-img">
                                    <img
                                        className="w-100 h-100 object-fit-cover"
                                        src={New1}
                                        alt
                                    />
                                </div>
                            </div>
                            <div className="pl-5 col-9 news-home-content">
                                <a href="#">
                                    <h6 className>TOP 3 KÊNH MUA SẮM TRỰC TUYẾN Ở VIỆT NAM</h6>
                                </a>
                                <p className="pt-2">
                                    Với tốc độ phát triển như vũ bão của Internet, công việc kinh
                                    doanh đang dần chuyển mình từ bán hàng truyền thống sang nền tảng
                                    onlie...
                                </p>
                            </div>
                            <div className="col-3">
                                <div className="news-home-img">
                                    <img
                                        className="w-100 h-100 object-fit-cover"
                                        src={New1}
                                        alt
                                    />
                                </div>
                            </div>
                            <div className="pl-5 col-9 news-home-content">
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
                    </div>
                </section>
            </section>
        </section>

    )
}
