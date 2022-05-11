import React from 'react'
import Content1 from '../../../assets/image/new-content1.png'
import New1 from '../../../assets/image/new1.png'
import { FaInstagram } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {FiPhone} from 'react-icons/fi'
import {BiLike} from 'react-icons/bi'
import {FiClock} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Content() {
    return (
        <section className="news-content">
            <div className="mt-5 p-0 container">
                <div className="m-0 row" style={{ flexDirection: "row-reverse" }}>
                    <div
                        className="col-12 col-md-6 col-lg-8 news-shoping-content-left"
                        style={{ backgroundColor: "white" }}
                    >
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="latest-news-box">
                                    <div className="latest-news-box-content">
                                        <div className="latest-news-box-content-img">
                                            <img
                                                className="w-100 h-100"
                                                src={Content1}                                                alt
                                            />
                                        </div>
                                        <div className="latest-news-box-content-group">
                                            <div className="row px-2 py-2 latest-news-box-content-date">
                                                <p className='px-0' id="current-time2">
                                                    <FiClock className='mx-2'/>16.03.2021
                                                </p>
                                            </div>
                                            <div className="pt-5 latest-news-box-content-text">
                                                <h4 className="px-3">
                                                    Có Nên Mua Sắm Quần Áo, Phụ Kiện Trên Các Trang...{" "}
                                                </h4>
                                                <p className="px-3">
                                                    Việc mua sắm trực tuyến ngày càng trở nên phổ biến, bạn có
                                                    thể ngồi tại nhà, cơ quan hay bất cứ đâu cũng có thể dễ
                                                    dàng mua hàng trực tuyến...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-news-box-button">
                                        <button
                                            type="button"
                                            className="text-uppercase btn btn-warning"
                                        >
                                            đọc thêm
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="pl-1 bi bi-arrow-right-circle"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 
                                                    0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 
                                                    1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 
                                                    0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto mx-lg-0 col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="latest-news-box">
                                    <div className="latest-news-box-content">
                                        <div className="latest-news-box-content-img">
                                            <img className="w-100 h-100" src={New1} alt />
                                        </div>
                                        <div className="latest-news-box-content-group">
                                            <div className="row px-2 py-2 latest-news-box-content-date">
                                                <p className='px-0' id="current-time2">
                                                    <FiClock className='mx-2'/>16.03.2021
                                                </p>
                                            </div>
                                            <div className="pt-5 latest-news-box-content-text">
                                                <h4 className="px-3">
                                                    Có Nên Mua Sắm Quần Áo, Phụ Kiện Trên Các Trang...{" "}
                                                </h4>
                                                <p className="px-3">
                                                    Việc mua sắm trực tuyến ngày càng trở nên phổ biến, bạn có
                                                    thể ngồi tại nhà, cơ quan hay bất cứ đâu cũng có thể dễ
                                                    dàng mua hàng trực tuyến...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-news-box-button">
                                        <button
                                            type="button"
                                            className="text-uppercase btn btn-warning"
                                        >
                                            đọc thêm
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="pl-1 bi bi-arrow-right-circle"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 
                                                    8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 
                                                    0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 
                                                    0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="latest-news-box">
                                    <div className="latest-news-box-content">
                                        <div className="latest-news-box-content-img">
                                            <img className="w-100 h-100" src={New1} alt />
                                        </div>
                                        <div className="latest-news-box-content-group">
                                            <div className="row px-2 py-2 latest-news-box-content-date">
                                                <p className='px-0' id="current-time2">
                                                    <FiClock className='mx-2'/>16.03.2021
                                                </p>
                                            </div>
                                            <div className="pt-5 latest-news-box-content-text">
                                                <h4 className="px-3">
                                                    Có Nên Mua Sắm Quần Áo, Phụ Kiện Trên Các Trang...{" "}
                                                </h4>
                                                <p className="px-3">
                                                    Việc mua sắm trực tuyến ngày càng trở nên phổ biến, bạn có
                                                    thể ngồi tại nhà, cơ quan hay bất cứ đâu cũng có thể dễ
                                                    dàng mua hàng trực tuyến...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-news-box-button">
                                        <button
                                            type="button"
                                            className="text-uppercase btn btn-warning"
                                        >
                                            đọc thêm
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="pl-1 bi bi-arrow-right-circle"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 
                                                    0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 
                                                    2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 
                                                    0 1 0-.708.708L10.293 7.5H4.5z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto mx-lg-0 col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="latest-news-box">
                                    <div className="latest-news-box-content">
                                        <div className="latest-news-box-content-img">
                                            <img className="w-100 h-100" src={New1} alt />
                                        </div>
                                        <div className="latest-news-box-content-group">
                                            <div className="row px-2 py-2 latest-news-box-content-date">
                                                <p className='px-0' id="current-time2">
                                                    <FiClock className='mx-2'/>16.03.2021
                                                </p>
                                            </div>
                                            <div className="pt-5 latest-news-box-content-text">
                                                <h4 className="px-3">
                                                    Có Nên Mua Sắm Quần Áo, Phụ Kiện Trên Các Trang...{" "}
                                                </h4>
                                                <p className="px-3">
                                                    Việc mua sắm trực tuyến ngày càng trở nên phổ biến, bạn có
                                                    thể ngồi tại nhà, cơ quan hay bất cứ đâu cũng có thể dễ
                                                    dàng mua hàng trực tuyến...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-news-box-button">
                                        <button
                                            type="button"
                                            className="text-uppercase btn btn-warning"
                                        >
                                            đọc thêm
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="pl-1 bi bi-arrow-right-circle"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 
                                                    0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 
                                                    2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 
                                                    0 1 0-.708.708L10.293 7.5H4.5z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="latest-news-box">
                                    <div className="latest-news-box-content">
                                        <div className="latest-news-box-content-img">
                                            <img className="w-100 h-100" src={New1} alt />
                                        </div>
                                        <div className="latest-news-box-content-group">
                                            <div className="row px-2 py-2 latest-news-box-content-date">
                                                <p className='px-0' id="current-time2">
                                                    <FiClock className='mx-2'/>16.03.2021
                                                </p>
                                            </div>
                                            <div className="pt-5 latest-news-box-content-text">
                                                <h4 className="px-3">
                                                    Có Nên Mua Sắm Quần Áo, Phụ Kiện Trên Các Trang...{" "}
                                                </h4>
                                                <p className="px-3">
                                                    Việc mua sắm trực tuyến ngày càng trở nên phổ biến, bạn có
                                                    thể ngồi tại nhà, cơ quan hay bất cứ đâu cũng có thể dễ
                                                    dàng mua hàng trực tuyến...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-news-box-button">
                                        <button
                                            type="button"
                                            className="text-uppercase btn btn-warning"
                                        >
                                            đọc thêm
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="pl-1 bi bi-arrow-right-circle"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 
                                                    0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 
                                                    2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 
                                                    0 1 0-.708.708L10.293 7.5H4.5z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto mx-lg-0 col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="latest-news-box">
                                    <div className="latest-news-box-content">
                                        <div className="latest-news-box-content-img">
                                            <img className="w-100 h-100" src={New1} alt />
                                        </div>
                                        <div className="latest-news-box-content-group">
                                            <div className="row px-2 py-2 latest-news-box-content-date">
                                                <p className='px-0' id="current-time2">
                                                    <FiClock className='mx-2'/>16.03.2021
                                                </p>
                                            </div>
                                            <div className="pt-5 latest-news-box-content-text">
                                                <h4 className="px-3">
                                                    Có Nên Mua Sắm Quần Áo, Phụ Kiện Trên Các Trang...{" "}
                                                </h4>
                                                <p className="px-3">
                                                    Việc mua sắm trực tuyến ngày càng trở nên phổ biến, bạn có
                                                    thể ngồi tại nhà, cơ quan hay bất cứ đâu cũng có thể dễ
                                                    dàng mua hàng trực tuyến...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-news-box-button">
                                        <button
                                            type="button"
                                            className="text-uppercase btn btn-warning"
                                        >
                                            đọc thêm
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="pl-1 bi bi-arrow-right-circle"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 
                                                    0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 
                                                    2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 
                                                    0 1 0-.708.708L10.293 7.5H4.5z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="latest-news-box">
                                    <div className="latest-news-box-content">
                                        <div className="latest-news-box-content-img">
                                            <img className="w-100 h-100" src={New1} alt />
                                        </div>
                                        <div className="latest-news-box-content-group">
                                            <div className="row px-2 py-2 latest-news-box-content-date">
                                                <p className='px-0' id="current-time2">
                                                    <FiClock className='mx-2'/>16.03.2021
                                                </p>
                                            </div>
                                            <div className="pt-5 latest-news-box-content-text">
                                                <h4 className="px-3">
                                                    Có Nên Mua Sắm Quần Áo, Phụ Kiện Trên Các Trang...{" "}
                                                </h4>
                                                <p className="px-3">
                                                    Việc mua sắm trực tuyến ngày càng trở nên phổ biến, bạn có
                                                    thể ngồi tại nhà, cơ quan hay bất cứ đâu cũng có thể dễ
                                                    dàng mua hàng trực tuyến...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-news-box-button">
                                        <button
                                            type="button"
                                            className="text-uppercase btn btn-warning"
                                        >
                                            đọc thêm
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="pl-1 bi bi-arrow-right-circle"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 
                                                    0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 
                                                    2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 
                                                    0 1 0-.708.708L10.293 7.5H4.5z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto mx-lg-0 col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="latest-news-box">
                                    <div className="latest-news-box-content">
                                        <div className="latest-news-box-content-img">
                                            <img className="w-100 h-100" src={New1} alt />
                                        </div>
                                        <div className="latest-news-box-content-group">
                                            <div className="row px-2 py-2 latest-news-box-content-date">
                                                <p className='px-0' id="current-time2">
                                                    <FiClock className='mx-2'/>16.03.2021
                                                </p>
                                            </div>
                                            <div className="pt-5 latest-news-box-content-text">
                                                <h4 className="px-3">
                                                    Có Nên Mua Sắm Quần Áo, Phụ Kiện Trên Các Trang...{" "}
                                                </h4>
                                                <p className="px-3">
                                                    Việc mua sắm trực tuyến ngày càng trở nên phổ biến, bạn có
                                                    thể ngồi tại nhà, cơ quan hay bất cứ đâu cũng có thể dễ
                                                    dàng mua hàng trực tuyến...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-news-box-button">
                                        <button
                                            type="button"
                                            className="text-uppercase btn btn-warning"
                                        >
                                            đọc thêm
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="pl-1 bi bi-arrow-right-circle"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 
                                                    0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 
                                                    2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 
                                                    0 1 0-.708.708L10.293 7.5H4.5z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Link
                                className="m-auto d-flex justify-content-center align-items-center new-next"
                                to="/new-detail"
                            >
                                <button type="button" className="btn btn-warning">
                                    TIẾP THEO
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 news-shoping-content-right">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tìm kiếm ..."
                            />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-search"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062
                                        .078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007
                                         0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="new-categori">
                            <p className>Tin cùng chuyên mục</p>
                        </div>
                        <div className="new-categori-list">
                            <div className="pb-3 new-categori-item">
                                <div className="new-categori-item-img">
                                    <img className="h-100" src={New1} alt />
                                </div>
                                <div className="pl-3 new-categori-item-content">
                                    <p className="mb-0 new-categori-item-content-date">
                                        01/02/2021 by Admin
                                    </p>
                                    <p className="new-categori-item-content-text">
                                        Những trang web bán hàng online uy tín nhất..{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 pb-3 new-categori-item">
                                <div className="new-categori-item-img">
                                    <img className="h-100" src={New1} alt />
                                </div>
                                <div className="pl-3 new-categori-item-content">
                                    <p className="mb-0 new-categori-item-content-date">
                                        01/02/2021 by Admin
                                    </p>
                                    <p className="new-categori-item-content-text">
                                        Những trang web bán hàng online uy tín nhất..{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 pb-3 new-categori-item">
                                <div className="new-categori-item-img">
                                    <img className="h-100" src={New1} alt />
                                </div>
                                <div className="pl-3 new-categori-item-content">
                                    <p className="mb-0 new-categori-item-content-date">
                                        01/02/2021 by Admin
                                    </p>
                                    <p className="new-categori-item-content-text">
                                        Những trang web bán hàng online uy tín nhất..{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 pb-3 new-categori-item">
                                <div className="new-categori-item-img">
                                    <img className="h-100" src={New1} alt />
                                </div>
                                <div className="pl-3 new-categori-item-content">
                                    <p className="mb-0 new-categori-item-content-date">
                                        01/02/2021 by Admin
                                    </p>
                                    <p className="new-categori-item-content-text">
                                        Những trang web bán hàng online uy tín nhất..{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 pb-3 new-categori-item">
                                <div className="new-categori-item-img">
                                    <img className="h-100" src={New1} alt />
                                </div>
                                <div className="pl-3 new-categori-item-content">
                                    <p className="mb-0 new-categori-item-content-date">
                                        01/02/2021 by Admin
                                    </p>
                                    <p className="new-categori-item-content-text">
                                        Những trang web bán hàng online uy tín nhất..{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 news-shopee-content-right-tags">
                            <div className="new-categori">
                                <p className>Tags</p>
                            </div>
                            <div className="new-categori-tags-link">
                                <div className="d-flex">
                                    <div className="mx-2">
                                        <div className="text-center">
                                            <a href="#">
                                                <p className="px-2 new-categori-tags-link-box">Design</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mx-2">
                                        <div className="text-center">
                                            <a href="#">
                                                <p className="px-2 new-categori-tags-link-box">Offer</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mx-2">
                                        <div className="text-center">
                                            <a href="#">
                                                <p className="px-2 new-categori-tags-link-box">Customer</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="mx-2">
                                        <div className="text-center">
                                            <a href="#">
                                                <p className="px-2 new-categori-tags-link-box">Design</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mx-2">
                                        <div className="text-center">
                                            <a href="#">
                                                <p className="px-2 new-categori-tags-link-box">Job</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mx-2">
                                        <div className="text-center">
                                            <a href="#">
                                                <p className="px-2 new-categori-tags-link-box">Customer</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="mx-2">
                                        <div className="text-center">
                                            <a href="#">
                                                <p className="px-2 new-categori-tags-link-box">Design</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mx-2">
                                        <div className="text-center">
                                            <a href="#">
                                                <p className="px-2 new-categori-tags-link-box">Offer</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mx-2">
                                        <div className="text-center">
                                            <a href="#">
                                                <p className="px-2 new-categori-tags-link-box">Customer</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="new-keep-contact">
                            <div className="new-categori">
                                <p className="my-auto">Giữ liên lạc</p>
                            </div>
                            <div className="m-0 row mt-2 new-keep-contact-item">
                                <div className="d-flex justify-content-center 
                                align-items-center new-keep-contact-item-icon-left"
                                >
                                    <FaInstagram className='w-auto'
                                        backgroundColor="yellow" size={"16px"} color="white"
                                    />
                                </div>
                                <p className="w-auto my-auto pl-3 pr-5">150 người theo dõi</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={21}
                                    height={21}
                                    fill="currentColor"
                                    className="w-auto mx-auto bi bi-person-plus"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2
                                     0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c
                                     -.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 
                                     0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 
                                        0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                                    />
                                </svg>
                            </div>
                            <div className="m-0 row mt-2 new-keep-contact-item">
                                <div className="d-flex justify-content-center 
                                align-items-center new-keep-contact-item-icon-left"
                                >
                                    <FiFacebook className='w-auto'
                                        backgroundColor="yellow" size={"16px"} color="white"
                                    />
                                </div>
                                <p className="w-auto my-auto pl-3">facebook.com/Outfizcompany</p>
                                <BiLike className='w-auto ml-5'/>
                            </div>
                            <div className="m-0 row mt-2 new-keep-contact-item">
                                <div className="d-flex justify-content-center
                                 align-items-center new-keep-contact-item-icon-left"
                                >
                                    <FiMail  className='w-auto'
                                        backgroundColor="yellow" size={"16px"} color="white"
                                    />
                                </div>
                                <p className="w-auto my-auto pl-3">info@outfiz.vn</p>
                            </div>
                            <div className="mb-5 mt-2 mx-0 row new-keep-contact-item">
                                <div className="d-flex justify-content-center
                                 align-items-center new-keep-contact-item-icon-left"
                                >
                                    <FiPhone className='w-auto'
                                        backgroundColor="yellow" size={"16px"} color="white"
                                    />
                                </div>
                                <p className="w-auto my-auto pl-3">(+84) 919 515 267</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
