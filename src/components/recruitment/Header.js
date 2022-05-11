import React from 'react'
import Logo from './../../assets/image/Logo.png';
export default function Header() {
    return (
        <section className="header">
            <section className="banner-recruitment">
                <div className="d-md-flex banner-recruitment-box">
                    <div className="ml-3 banner-recruitment-text">
                        <h4 className="text-uppercase">KEEP GOING-TOGETHER</h4>
                        <h6 className="text-uppercase">we belive:</h6>
                        <p className="pl-1">
                            Coming together is a <span>Beginning</span> , staying together is{" "}
                            <span>Progress</span>, and working together is <span>Success</span>
                        </p>
                    </div>
                    <a
                        href="#"
                        className="d-flex mx-3 ml-md-0 justify-content-center 
                        align-items-center banner-recruitment-apply"
                    >
                        <p className="mb-0 text-uppercase">nộp đơn tại</p>
                        <div className="ml-3 banner-recruitment-apply-logo">
                            <img className='h-100' src={Logo} alt="logo" />
                        </div>
                    </a>
                </div>
                <div className="ml-0 row justify-content-center banner-recruitment-search">
                    <form className="col-12 col-md-10 col-lg-8 card card-sm">
                        <div className="card-body row no-gutters align-items-center">
                            <div className="col-auto">
                                <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                    style={{ fontSize: 24 }}
                                />
                            </div>
                            <div className="col" style={{ borderBottom: "1px solid black" }}>
                                <input
                                    className="form-control form-control-lg form-control-borderless"
                                    type="search"
                                    placeholder="Vị trí, chức danh, kĩ năng..."
                                />
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-lg btn-warning" type="submit">
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}
