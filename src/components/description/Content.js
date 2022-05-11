import React from 'react'
import Category from './../../assets/image/category.svg'
import Role from './../../assets/image/role.svg'
import Oclock from './../../assets/image/oclock.svg'
import Non from './../../assets/image/non-tech.svg'
import Tech from './../../assets/image/tech.svg'
import Ecom from './../../assets/image/ecom.svg'

export default function Content() {
    return (
        <section className="py-5 descripntion-content">
            <div className="container descripntion-content-box">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="ml-0 pt-4">
                            <p className="text-center text-uppercase descripntion-content-header">
                                mô tả công việc
                            </p>
                        </div>
                        <div className="mx-md-4 p-md-2 descripntion-content-box-text">
                            <div className="Welfare">
                                <h5 className="text-uppercase my-4">Các phúc lợi dành cho bạn</h5>
                                <p>
                                    - Thưởng lương tháng 13, xét tăng lương 6 tháng một lần, mức tăng
                                    tùy theo năng lực.
                                </p>
                                <p>
                                    - Hưởng đầy đủ các chính sách phúc lợi (bảo hiểm xã hội, bảo hiểm
                                    y tế, bảo hiểm thất nghiệp)
                                </p>
                                <p>
                                    - Thưởng lương tháng 13, xét tăng lương 6 tháng một lần, mức tăng
                                    tùy theo năng lực.
                                </p>
                            </div>
                            <div className="detailed-description">
                                <h5 className="text-uppercase my-4">Mô tả công việc</h5>
                                <h6 className="text-uppercase my-4">Mô tả công việc</h6>
                                <p>
                                    - Thưởng lương tháng 13, xét tăng lương 6 tháng một lần, mức tăng
                                    tùy theo năng lực.
                                </p>
                                <p>
                                    - Hưởng đầy đủ các chính sách phúc lợi (bảo hiểm xã hội, bảo hiểm
                                    y tế, bảo hiểm thất nghiệp)
                                </p>
                                <p>
                                    - Thưởng lương tháng 13, xét tăng lương 6 tháng một lần, mức tăng
                                    tùy theo năng lực.
                                </p>
                                <h6 className="text-uppercase my-4">Quyền lợi và thu nhập</h6>
                                <p>
                                    - Thưởng lương tháng 13, xét tăng lương 6 tháng một lần, mức tăng
                                    tùy theo năng lực.
                                </p>
                                <p>
                                    - Hàng tháng được thưởng dự án tuỳ theo năng lực, tuỳ theo role
                                    đảm nhận ở dự án.
                                </p>
                                <p>- Thời gian thử việc tối đa 2 tháng.</p>
                                <p>
                                    - Hàng tháng được thưởng dự án tuỳ theo năng lực, tuỳ theo role
                                    đảm nhận ở dự án.
                                </p>
                                <p>- Thời gian thử việc tối đa 2 tháng.</p>
                                <h6 className="text-uppercase my-4">Yêu cầu</h6>
                                <p>
                                    - Thiết kế trên các công cụ Adobe XD, Photoshop , Illutrator..
                                </p>
                                <p>- Có kiến thức về html, css là 1 lợi thế</p>
                                <p>- Thời gian thử việc tối đa 2 tháng.</p>
                                <p>
                                    - Thưởng lương tháng 13, xét tăng lương 6 tháng một lần, mức tăng
                                    tùy theo năng lực.
                                </p>
                                <p>
                                    - Hàng tháng được thưởng dự án tuỳ theo năng lực, tuỳ theo role
                                    đảm nhận ở dự án.
                                </p>
                                <p>- Thời gian thử việc tối đa 2 tháng.</p>
                                <h6 className="text-uppercase my-4">Địa điểm làm việc</h6>
                                <p>
                                    <i className="fa fa-map-marker" aria-hidden="true" /> K46/14 đường
                                    2 tháng 9, phường Bình Hiên, quận Hải Châu, thành phố Đà Nẵng
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="mt-5 py-4 px-3 px-lg-4 col-12 col-md-6 col-lg-12 
                        descripntion-content-right-top"
                        >
                            <div className="d-flex descripntion-content-right-item">
                                <img src={Category} alt />
                                <div className="right-content">
                                    <h6 className="text-uppercase">Hạng mục</h6>
                                    <p>Thiết kế</p>
                                </div>
                            </div>
                            <div className="pt-3 d-flex descripntion-content-right-item">
                                <img src={Role} alt />
                                <div className="right-content">
                                    <h6 className="text-uppercase">Vai trò</h6>
                                    <p>Mới tốt nghiệp - Công nghệ thông tin </p>
                                </div>
                            </div>
                            <div className="pt-3 d-flex descripntion-content-right-item">
                                <img src={Oclock} alt />
                                <div className="right-content">
                                    <h6 className="text-uppercase">Thời gian làm việc</h6>
                                    <p>Fulltime: 8:30 đến 17h30</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-0 mt-5 mb-5 mb-md-0 col-12 col-md-6 col-lg-12 
                                 descripntion-content-right-bottom">
                            <div className="work">
                                <p className="py-3 text-uppercase text-center">Công việc khác</p>
                            </div>
                            <div className="mx-3 mx-lg-4">
                                <div className="d-flex descripntion-content-right-bottom-item">
                                    <img src={Non} alt />
                                    <div className="pl-3 pt-2">
                                        <h6 className>Non-technical(Internship)</h6>
                                        <p>Công ty Outfiz</p>
                                    </div>
                                </div>
                                <div className="d-flex descripntion-content-right-bottom-item">
                                    <img src={Tech} alt />
                                    <div className="pl-3 pt-2">
                                        <h6 className>Technical(Internship)</h6>
                                        <p>Công ty Outfiz</p>
                                    </div>
                                </div>
                                <div className="d-flex descripntion-content-right-bottom-item">
                                    <img src={Ecom} alt />
                                    <div className="pl-3 pt-2">
                                        <h6 className>Ecommerce(Internship)</h6>
                                        <p>Công ty Outfiz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
