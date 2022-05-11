import React from 'react'
import service2 from './../../assets/image/service2.png'
import service1 from './../../assets/image/service1.png'
import service3 from './../../assets/image/service3.png'

export const Software = (()=> {
    return (
        <section className="software">
            <div className="pb-0 pb-md-4 pb-lg-4 software-topic">
                <div className="row">
                    <div className="col-12 software-text">
                        <h4 className="py-3 text-uppercase text-center">
                            software development
                        </h4>
                    </div>
                </div>
            </div>
            <div className="mx-2 pt-md-0 pt-lg-5 pb-5 software-content">
                <div className="justify-content-center row">
                    <div className="d-none d-sm-block d-lg-block pl-lg-5 col-12 col-sm-12 col-md-9 col-lg-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="justify-content-center row">
                                    <div className="col-4 software-content-img">
                                        <img className="w-100 h-100" src={service2} alt />
                                    </div>
                                    <div className="col-4 software-content-img">
                                        <img className="w-100 h-100" src={service3} alt />
                                    </div>
                                    <div className="col-4 software-content-img">
                                        <img className="w-100 h-100" src={service1} alt />
                                    </div>
                                </div>
                                <div className="pt-4 row">
                                    <div className="col-4 software-content-img">
                                        <img className="w-100 h-100" src={service2} alt />
                                    </div>
                                    <div className="col-4 software-content-img">
                                        <img className="w-100 h-100" src={service3} alt />
                                    </div>
                                    <div className="col-4 software-content-img">
                                        <img className="w-100 h-100" src={service2} alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mb-0 mb-lg-5 pb-md-0 pb-lg-5 col-12 col-sm-12 col-md-12 col-lg-7">
                        <div className="text-center software-content-text">
                            <p className="px-0 px-lg-5">
                                Là nhà cung cấp dịch vụ phát triển phần mềm, chúng tôi mong muốn
                                giúp khách hàng chuyển đổi những ý tưởng thành các giải pháp sáng
                                tạo cho doanh nghiệp.{" "}
                            </p>
                            <p className="px-0 px-lg-5">
                                Chúng tôi cung cấp trọn gói các dịch vụ phát triển phần mềm theo yêu
                                cầu để giúp khách hàng phát triển doanh nghiệp và đạt được mục tiêu
                                kinh doanh.
                            </p>
                            <p className="px-0 px-lg-5">
                                Dù là phát triển phần mềm theo yêu cầu, ứng dụng di động, trang web
                                thương mại điện tử hay ứng dụng web, chúng tôi đều cung cấp các giải
                                pháp phần mềm phù hợp.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    )
})
