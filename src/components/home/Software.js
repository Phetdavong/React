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
                                L?? nh?? cung c???p d???ch v??? ph??t tri???n ph???n m???m, ch??ng t??i mong mu???n
                                gi??p kh??ch h??ng chuy???n ?????i nh???ng ?? t?????ng th??nh c??c gi???i ph??p s??ng
                                t???o cho doanh nghi???p.{" "}
                            </p>
                            <p className="px-0 px-lg-5">
                                Ch??ng t??i cung c???p tr???n g??i c??c d???ch v??? ph??t tri???n ph???n m???m theo y??u
                                c???u ????? gi??p kh??ch h??ng ph??t tri???n doanh nghi???p v?? ?????t ???????c m???c ti??u
                                kinh doanh.
                            </p>
                            <p className="px-0 px-lg-5">
                                D?? l?? ph??t tri???n ph???n m???m theo y??u c???u, ???ng d???ng di ?????ng, trang web
                                th????ng m???i ??i???n t??? hay ???ng d???ng web, ch??ng t??i ?????u cung c???p c??c gi???i
                                ph??p ph???n m???m ph?? h???p.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    )
})
