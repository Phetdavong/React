import React from 'react'
import Shopee from '../../../assets/image/shopee.png'
import New from '../../../assets/image/new1.png'
import Img33 from '../../../assets/image/Image 33.png'
import Img34 from '../../../assets/image/Image 34.png'
import Img35 from '../../../assets/image/Image 35.png'

export default function Content() {
    return (
        <section>
            <section className="news-shopee">
                <div className="mt-5 container">
                    <div className="m-0 row">
                        <div
                            className="col-12 col-md-6 col-lg-8"
                            style={{ backgroundColor: "white" }}
                        >
                            <div className="news-shopee-topic">
                                <h2 className="text-left text-uppercase">shopee</h2>
                            </div>
                            <div className="news-shopee-text">
                                <p>
                                    Ra mắt năm 2015, nền tảng thương mại điện tử <span>Shopee</span>{" "}
                                    được xây dựng nhằm cung cấp cho người sử dùng những trải nghiệm dễ
                                    dàng, an toàn và nhanh chóng khi mua sắm trực tuyến. Shopee là sàn
                                    giao dịch thương mại điện tử có trụ sở đặt tại Singapore, thuộc sở
                                    hữu của tập đoàn SEA (trước đây là Garena), được thành lập vào năm
                                    2009 bởi Forrest Li. Shopee được giới thiệu lần đầu tại Singapore
                                    vào năm 2015, và hiện đã có mặt tại các quốc gia: Singapore,
                                    Malaysia, Thái Lan, Đài Loan, Indonesia, Việt Nam và Philipines.
                                    Hiện nay, Shopee hoạt động tại Việt Nam theo mô hình vai trò trung
                                    gian trong việc mua bán giữa các cá nhân và cung cấp sản phẩm dịch
                                    vụ từ doanh nghiệp đến người tiêu dùng.
                                </p>
                            </div>
                            <div className="news-shopee-img">
                                <div className="news-shopee-img-box">
                                    <img className="w-100 h-100" src={Shopee} alt />
                                    <h6 className="pt-3 text-center">
                                        Nền Tảng Thương Mại Điện Tử Shopee
                                    </h6>
                                </div>
                            </div>
                            <div className="pt-2 news-shopee-text">
                                <p>
                                    Tuy sinh sau đẻ muộn nhưng Shopee lại có sức bật khá nhanh và hiệu
                                    quả hoạt động không hề kém cạnh so với các sàn thương mại khác. Phải
                                    nói rằng, Shopee có phân khúc khách hàng cực tốt, tập trung vào các
                                    shop online và đối tượng khách hàng trẻ tuổi có nhu cầu mua sắm
                                    online cao.
                                </p>
                                <p>
                                    Thủ tục đăng ký bán hàng ở Shopee khá đơn giản và nhanh chóng. Bạn
                                    chỉ cần up ảnh, đăng bán sản phẩm, thoải mái và tự nhiên. Người
                                    người nhà nhà ồ ạt lên Shopee bán hàng, chưa bao giờ bán hàng online
                                    lại đơn giản đến thế. Chính vì vậy mà một trong những nhược điểm khi
                                    mua hàng trên Shopee là rất dễ dính fake, tất nhiên nếu bạn tự tin
                                    với kinh nghiệm mua hàng của mình thì sẽ không có vấn đề gì.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 news-shopee-content-right">
                            <div className="new-categori">
                                <p className>Tin cùng chuyên mục</p>
                            </div>
                            <div className="new-categori-list">
                                <div className="pb-4 new-categori-item">
                                    <div className="new-categori-item-img">
                                        <img className="h-100" src={New} alt />
                                    </div>
                                    <div className="pl-3 new-categori-item-content">
                                        <h5>Thời trang</h5>
                                        <p className="mb-0 new-categori-item-content-date">
                                            01/02/2021 by Admin
                                        </p>
                                        <p className="new-categori-item-content-text">
                                            Các thương hiểu thời trang nổi tiếng...
                                        </p>
                                    </div>
                                </div>
                                <div className="pb-4 new-categori-item">
                                    <div className="new-categori-item-img">
                                        <img className="h-100" src={New} alt />
                                    </div>
                                    <div className="pl-3 new-categori-item-content">
                                        <h5>Thời trang</h5>
                                        <p className="mb-0 new-categori-item-content-date">
                                            01/02/2021 by Admin
                                        </p>
                                        <p className="new-categori-item-content-text">
                                            Các thương hiểu thời trang nổi tiếng...
                                        </p>
                                    </div>
                                </div>
                                <div className="pb-4 new-categori-item">
                                    <div className="new-categori-item-img">
                                        <img className="h-100" src={New} alt />
                                    </div>
                                    <div className="pl-3 new-categori-item-content">
                                        <h5>Thời trang</h5>
                                        <p className="mb-0 new-categori-item-content-date">
                                            01/02/2021 by Admin
                                        </p>
                                        <p className="new-categori-item-content-text">
                                            Các thương hiểu thời trang nổi tiếng...
                                        </p>
                                    </div>
                                </div>
                                <div className="pb-4 new-categori-item">
                                    <div className="new-categori-item-img">
                                        <img className="h-100" src={New} alt />
                                    </div>
                                    <div className="pl-3 new-categori-item-content">
                                        <h5>Thời trang</h5>
                                        <p className="mb-0 new-categori-item-content-date">
                                            01/02/2021 by Admin
                                        </p>
                                        <p className="new-categori-item-content-text">
                                            Các thương hiểu thời trang nổi tiếng...
                                        </p>
                                    </div>
                                </div>
                                <div className="pb-4 new-categori-item">
                                    <div className="new-categori-item-img">
                                        <img className="h-100" src={New} alt />
                                    </div>
                                    <div className="pl-3 new-categori-item-content">
                                        <h5>Thời trang</h5>
                                        <p className="mb-0 new-categori-item-content-date">
                                            01/02/2021 by Admin
                                        </p>
                                        <p className="new-categori-item-content-text">
                                            Các thương hiểu thời trang nổi tiếng...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="news-shopee-content-right-tags">
                                <div className="new-categori">
                                    <p className>Tags</p>
                                </div>
                                <div className="new-categori-tags-link">
                                    <div className="d-flex">
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mx-1 mx-sm-2">
                                            <div className="text-center">
                                                <a href="#">
                                                    <p className="px-2 new-categori-tags-link-box">Design</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news-shopee">
                <div className="mt-5 container">
                    <div className="m-0 row">
                        <div
                            className="col-12 col-md-6 col-lg-8"
                            style={{ backgroundColor: "white" }}
                        >
                            <div className="news-shopee-topic">
                                <h2 className="text-left text-uppercase">shopee</h2>
                            </div>
                            <div className="news-shopee-text">
                                <p>
                                    Ra mắt năm 2015, nền tảng thương mại điện tử <span>Shopee</span>{" "}
                                    được xây dựng nhằm cung cấp cho người sử dùng những trải nghiệm dễ
                                    dàng, an toàn và nhanh chóng khi mua sắm trực tuyến. Shopee là sàn
                                    giao dịch thương mại điện tử có trụ sở đặt tại Singapore, thuộc sở
                                    hữu của tập đoàn SEA (trước đây là Garena), được thành lập vào năm
                                    2009 bởi Forrest Li. Shopee được giới thiệu lần đầu tại Singapore
                                    vào năm 2015, và hiện đã có mặt tại các quốc gia: Singapore,
                                    Malaysia, Thái Lan, Đài Loan, Indonesia, Việt Nam và Philipines.
                                    Hiện nay, Shopee hoạt động tại Việt Nam theo mô hình vai trò trung
                                    gian trong việc mua bán giữa các cá nhân và cung cấp sản phẩm dịch
                                    vụ từ doanh nghiệp đến người tiêu dùng.
                                </p>
                            </div>
                            <div className="news-shopee-img">
                                <div className="news-shopee-img-box">
                                    <img className="w-100 h-100" src={Shopee} alt />
                                    <h6 className="pt-3 text-center">
                                        Nền Tảng Thương Mại Điện Tử Shopee
                                    </h6>
                                </div>
                            </div>
                            <div className="pt-2 news-shopee-text">
                                <p>
                                    Tuy sinh sau đẻ muộn nhưng Shopee lại có sức bật khá nhanh và hiệu
                                    quả hoạt động không hề kém cạnh so với các sàn thương mại khác. Phải
                                    nói rằng, Shopee có phân khúc khách hàng cực tốt, tập trung vào các
                                    shop online và đối tượng khách hàng trẻ tuổi có nhu cầu mua sắm
                                    online cao.
                                </p>
                                <p>
                                    Thủ tục đăng ký bán hàng ở Shopee khá đơn giản và nhanh chóng. Bạn
                                    chỉ cần up ảnh, đăng bán sản phẩm, thoải mái và tự nhiên. Người
                                    người nhà nhà ồ ạt lên Shopee bán hàng, chưa bao giờ bán hàng online
                                    lại đơn giản đến thế. Chính vì vậy mà một trong những nhược điểm khi
                                    mua hàng trên Shopee là rất dễ dính fake, tất nhiên nếu bạn tự tin
                                    với kinh nghiệm mua hàng của mình thì sẽ không có vấn đề gì.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 news-shopee-content-right">
                            <div className="new-categori">
                                <p className>Quảng cáo của Outfiz</p>
                            </div>
                            <div className="new-categori-list">
                                <div className="mt-3 new-categori-list-img">
                                    <img src={Img33} />
                                </div>
                                <div className="mt-3 new-categori-list-img">
                                    <img src={Img34} />
                                </div>
                                <div className="mb-5 mt-3 new-categori-list-img">
                                    <img src={Img35} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
