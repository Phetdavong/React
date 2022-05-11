import React from 'react'
import Logo from './../../assets/image/Logo.png';
import Icon from './../../assets/image/iconFE.svg'
import { Link } from 'react-router-dom';
import {GrFormPreviousLink} from 'react-icons/gr'
export default function Header() {
    return (
        <section className="page-descripntion">
            <div className="banner-recruitment" style={{ position: "initial" }}>
                <div className="d-md-flex banner-recruitment-box">
                    <div className="ml-3 banner-recruitment-text">
                        <h4 className="text-uppercase">KEEP GOING-TOGETHER</h4>
                        <h6 className="text-uppercase">we belive:</h6>
                        <p>
                            Coming together is a <span>Beginning</span> , staying together is
                            <span>Progress</span>, and working together is <span>Success</span>
                        </p>
                    </div>
                    <a
                        href="#"
                        className="d-flex ml-3 ml-md-0 justify-content-center 
                        align-items-center banner-recruitment-apply"
                    >
                        <p className="mb-0 text-uppercase">nộp đơn tại</p>
                        <div className="banner-recruitment-apply-logo">
                            <img className='h-100' src={Logo} alt="logo" />
                        </div>
                    </a>
                </div>
                <div className="container job-description-box">
                    <div className="h-100 d-flex">
                        <div>
                            <a
                                className="p-sm-2 px-md-3 px-lg-4 w-100 d-none d-md-block col-md-3 col-lg-2"
                                style={{ borderRight: "2px solid #f5f7f8" }}
                            >
                                <div className="mt-3 job-description-box-img">
                                    <div className="recruitment-slide-block-img">
                                        <div
                                            id="iconFE-before"
                                            className="w-100 h-100 recruitment-slide-block-img-item 
                                        recruitment-slide-block-img-before"
                                            style={{
                                                marginTop: 4,
                                                backgroundColor: "#707070",
                                                mask: `url(${Icon}) no-repeat center / contain`,
                                                WebkitMask:
                                            `url(${Icon}) no-repeat center / contain`
                                            }}
                                        />
                                        <div
                                            id="iconFE-after"
                                            className="w-100 h-100 recruitment-slide-block-img-item 
                                        recruitment-slide-block-img-after"
                                            style={{
                                                marginTop: 4,
                                                backgroundColor:"#fbb03b",
                                                mask: `url(${Icon}) no-repeat center / contain`,
                                                WebkitMask:
                                            `url(${Icon}) no-repeat center / contain`
                                            }}
                                        />
                                    </div>
                                </div>
                                <p className="mt-3 text-center text-uppercase job-description-design">
                                    designer
                                </p>
                            </a>
                        </div>
                        <div className="mx-0 mx-md-4 my-auto col-12 col-sm-8 col-md-6 col-lg-8 
                        job-description-box-text">
                            <h4 className="mb-4">Designer</h4>
                            <p id="intership">Vị trí: Intership</p>
                            <p id="andress">Địa điểm làm việc: Hải Châu - Đà Nẵng</p>
                            <span>Cập nhật: Bạn còn 1 tháng để ứng tuyển</span>
                        </div>
                        <div className="mx-4 my-auto col-12 col-sm-4 col-md-3 col-lg-2 job-description-box-text-right">
                            <a className="mt-3 btn btn-outline-warning" href="#">
                                Nộp đơn
                            </a>
                            <Link className="return" to="/">
                                <p className="pt-4 pt-md-5">
                                    <GrFormPreviousLink className='icon'/>
                                    Quay lại
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
