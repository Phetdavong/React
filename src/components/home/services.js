import React from 'react';
import service1 from './../../assets/image/service1.png';
import service2 from './../../assets/image/service2.png';
import service3 from './../../assets/image/service3.png';
import introduce1 from './../../assets/image/introduce1.png';
import introduce2 from './../../assets/image/introduce2.png';
import introduce3 from './../../assets/image/introduce3.png';

export const Services = () => {
  return (
    <section className="mt5 service-home" id="service">
      <div className="mt-5 pt-5 d-flex justify-content-center topic">
        <div className="my-auto line" />
        <h1 className="px-3 text-center text-uppercase">
          <a href>Dịch vụ</a>
        </h1>
        <div className="my-auto line" />
      </div>
      <div className="mt-sm-0 my-md-5 py-5 service-content">
        <div className="container">
          <div className="row">
            <div
              className="mx-auto col-sm-12 col-md-4 col-lg-4 service-content-item"
              style={{ borderLeft: 'none' }}>
              <div className="service-item-block">
                <a href="#">
                  <div className="mt-5 service-content-item-img">
                    <div className="img-service">
                      <img src={service1} alt />
                    </div>
                  </div>
                  <div
                    className="mt-3 mt-md-5 d-center text-uppercase
                                     text-center service-content-item-text">
                    FASHION ECOMMERCE
                  </div>
                </a>
              </div>
            </div>
            <div className="mx-auto col-sm-12 col-md-4 col-lg-4 service-content-item">
              <div className="service-item-blocks">
                <a href="#">
                  <div className="mt-5 service-content-item-img">
                    <div className="d-flex justify-content-center img-service">
                      <img src={service2} alt />
                    </div>
                  </div>
                  <div
                    className="mt-3 mt-md-5 d-center
                                     text-uppercase text-center service-content-item-text">
                    FASHION SOCIAL NETWORK
                  </div>
                </a>
              </div>
            </div>
            <div className="mx-auto col-sm-12 col-md-4 col-lg-4 service-content-item">
              <div className="service-item-blocks">
                <a href="#">
                  <div className="mt-5 service-content-item-img">
                    <div className="d-flex justify-content-center img-service">
                      <img src={service3} alt />
                    </div>
                  </div>
                  <div
                    className="mt-3 mt-md-5 d-center
                                     text-uppercase text-center service-content-item-text">
                    SOFTWARE DEVELOPMENT
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-5 introduce-home">
        <div className="mt-5 pb-5 d-flex justify-content-space-around introduce-item">
          <div className="mx-0 justify-content-center row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 introduce-item-order">
              <div className="mt-5 mr-5 d-flex justify-content-center introduce-item-img">
                <div className="introduce-item-img-mobile">
                  <img className="w-100 h-100" src={introduce2} alt />
                </div>
                <div className="pl-2 introduce-item-img-mobile">
                  <img className="w-100 h-100" src={introduce1} alt />
                </div>
              </div>
            </div>
            <div className="mb-5 d-block d-sm-none pl-5 col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="introduce-item-content-mobile">
                <div
                  className="introduce-item-content-text-mobile"
                  style={{ borderLeft: '18px solid #fbb03b' }}>
                  <div className="p-4 w-100 h-100">
                    <h3 className="pt-3">FASHION ECOMMERCE</h3>
                    <p className="pt-2">
                      <span>OUTFIZ</span> Mong muốn tạo một địa điểm mua sắm tin cậy, nơi tập hợp
                      các thời trang trong nước, kết hợp với các thương hiệu nước ngoài, giúp khách
                      hàng mọi lứa tuổi có thể dễ dàng tìm kiếm và mua sắm những sản phẩm thời trang
                      chất lượng và phù hợp với phong cách mỗi cá nhân.
                    </p>
                    <p>
                      <span>VỚI OUTFIZ</span>
                    </p>
                    <p>- Tìm kiếm sản phẩm dễ dàng. </p>
                    <p>- Sản phẩm đa dạng phong phú.</p>
                    <p>- Nguồn gốc rõ ràng tin cậy.</p>
                    <p />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-sm-block pl-5 col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="introduce-item-content">
                <div className="m-5 introduce-item-content-text text-left">
                  <div className="p-4 w-100 h-100">
                    <h3 className="pt-3">FASHION ECOMMERCE</h3>
                    <p className="pt-2">
                      <span>OUTFIZ</span> Mong muốn tạo một địa điểm mua sắm tin cậy, nơi tập hợp
                      các thời trang trong nước, kết hợp với các thương hiệu nước ngoài, giúp khách
                      hàng mọi lứa tuổi có thể dễ dàng tìm kiếm và mua sắm những sản phẩm thời trang
                      chất lượng và phù hợp với phong cách mỗi cá nhân.
                    </p>
                    <p>
                      <span>VỚI OUTFIZ</span>
                    </p>
                    <p>- Tìm kiếm sản phẩm dễ dàng. </p>
                    <p>- Sản phẩm đa dạng phong phú.</p>
                    <p>- Nguồn gốc rõ ràng tin cậy.</p>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 pb-5 d-flex justify-content-space-around introduce-item">
          <div className="mx-0 justify-content-center row" style={{ flexDirection: 'row-reverse' }}>
            <div className="pl-5 col-12 col-sm-12 col-md-12 col-lg-6 introduce-item-order">
              <div className="d-flex justify-content-center introduce-item-img">
                <div className="introduce-item-img-mobile">
                  <img className="w-100 h-100" src={introduce3} alt />
                </div>
              </div>
            </div>
            <div className="mb-5 d-block d-sm-none pl-5 col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="introduce-item-content-mobile">
                <div
                  className="introduce-item-content-text-mobile"
                  style={{ borderRight: '18px solid #fbb03b' }}>
                  <div className="p-4 w-100 h-100">
                    <h3 className="pt-3">FASHION SOCIAL NETWORK</h3>
                    <p className="pt-2">
                      <span>CHIA SẺ VÀ KẾT NỐI</span>Chia sẻ phong cách cá nhân và kết nối với mọi
                      người cùng sở thích.{' '}
                    </p>
                    <p>
                      <span>CÁ TÍNH </span> Thể hiện Cá tính và bản thân qua những bộ outfit.
                    </p>
                    <p>
                      <span>TẢI LÊN VÀ GẮN THẺ</span> Tải ảnh của bạn và gắn thẻ phù hợp hoặc các
                      hình ảnh tương tự.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-sm-block pl-5 col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="introduce-item-content">
                <div className="m-5 introduce-item-content-text text-left">
                  <div className="p-4 w-100 h-100">
                    <h3 className="pt-3">FASHION SOCIAL NETWORK</h3>
                    <p className="pt-2">
                      <span>CHIA SẺ VÀ KẾT NỐI</span>Chia sẻ phong cách cá nhân và kết nối với mọi
                      người cùng sở thích.{' '}
                    </p>
                    <p>
                      <span>CÁ TÍNH </span> Thể hiện Cá tính và bản thân qua những bộ outfit.
                    </p>
                    <p>
                      <span>TẢI LÊN VÀ GẮN THẺ</span> Tải ảnh của bạn và gắn thẻ phù hợp hoặc các
                      hình ảnh tương tự.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
