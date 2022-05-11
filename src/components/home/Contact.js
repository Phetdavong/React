import React from 'react';

export const Contact = (() => {
    
    return (
        <section className="contact" id="contact">
            <div className="contact-box">
                <div className="container">
                    <div className="pt-5 d-flex justify-content-center topic">
                        <div className="my-auto line" />
                        <h1 className="px-3 text-center text-uppercase">
                            <a style={{ color: 'white' }} href="#">
                                Liên hệ
                            </a>
                        </h1>
                        <div className="my-auto line" />
                    </div>
                </div>
                <div className="mt-5 container-fluid contact-form">
                    <div className="m-auto pb-5 w-100 col-12 pb-3 contact-form-box">
                        <form className="w-100" action>
                            <div className="form-group">
                                <label id="checkName" className="pb-3 text-uppercase" htmlFor="name">
                                    họ và tên*
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='name'
                                    id="name"
                                    placeholder="Nhập họ và tên của bạn"
                                />
                                <span className="contact-form-text-check" id="check-name" />
                            </div>
                            <div className="form-group">
                                <label id="checkEmail" className="py-3 text-uppercase" htmlFor="email">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Nhập email của bạn"
                                />
                                <span className="contact-form-text-check" id="check-email" />
                            </div>
                            <div className="form-group">
                                <label id="checkPhone" className="py-3 text-uppercase" htmlFor="phone">
                                    Điện thoại*
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Nhập số điện thoại của bạn"
                                />
                                <span className="contact-form-text-check" id="check-phone" />
                            </div>
                            <div className="form-group">
                                <label id="checkContent" className="py-3 text-uppercase" htmlFor="content">
                                    nội dung*
                                </label>
                                <textarea
                                    className="form-control"
                                    id="content"
                                    rows={5}
                                    placeholder="Nhập nội dung"
                                />
                                <span className="contact-form-text-check" id="check-content" />
                            </div>
                            <button
                                type="submit"
                                value="submit"
                                className="d-none d-sm-block text-uppercase btn btn-primary btn-lg btn-block"
                            >
                                Gửi
                            </button>
                            <button
                                type="submit"
                                value="submit"
                                className="mt-3 d-block d-sm-none text-uppercase btn btn-dark btn-form-mobile"
                            >
                                Gửi
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
});
