import React, { memo } from 'react';
import Slider from 'react-slick';
// import banner1 from './../../assets/image/banner1.jpg'
// import banner2 from './../../assets/image/banner2.png'
export const HeaderMemo = memo(function Header() {
  const settings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />
  };
  function PrevButton({ onClick }) {
    return (
      <div className="d-none d-md-block d-lg-block btn-banner-prev" id="btn-prev">
        <button onClick={onClick} className="slick-prev" style={{ left: 10 }}>
          Prev
        </button>
      </div>
    );
  }

  function NextButton({ onClick }) {
    return (
      <div className="d-none d-md-block d-lg-block btn-banner-next" id="btn-next">
        <button onClick={onClick} className="slick-next" style={{ right: 10 }}>
          Next
        </button>
      </div>
    );
  }
  return (
    <section className="header">
      <section className="banner-home">
        <div className="banner-home-slide" id="next">
          <Slider {...settings}>
            <div className="banner-slide-item banner-background-1">
              <div className="row">
                <div className="mt-5 pt-5 col-12 col-sm-10 col-md-8 col-lg-5 banner-slide-text">
                  <h4>KEEP GOING -TOGETHER</h4>
                  <p className="pt-3 text-uppercase">WE BELIKE: </p>
                  <div className="mr-5 pr-5 banner-slide-text--content">
                    <p className="pl-1">
                      Coming together is a <span>Beginning</span> , staying together is{' '}
                      <span>Progress</span>, and working together is <span>Success</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-slide-item banner-background-2">
              <div className="row">
                <div className="mt-5 pt-5 col-12 col-sm-10 col-md-8 col-lg-5 banner-slide-text">
                  <h4>KEEP GOING -TOGETHER</h4>
                  <p className="pt-3 text-uppercase">WE BELIVE:</p>
                  <div className="mr-5 pr-5 banner-slide-text--content">
                    <p className="pl-1">
                      Coming together is a <span>Beginning</span> , staying together is{' '}
                      <span>Progress</span>, and working together is <span>Success</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </section>
  );
});
