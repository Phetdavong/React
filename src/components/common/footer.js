import React, { memo } from 'react';
import sun from './../../assets/image/sun.svg';
import fb from './../../assets/image/fb.svg';
import ig from './../../assets/image/ing.svg';
import Logo from './../../assets/image/Logo.png';
export const FooterMemorize = memo (function Footer(){
    return (
        <footer>
            <div className="footer-home">
                <div className="p-0 container">
                    <div className="mx-2 footer-home-box">
                        <div className="mt-3 footer-home-logo">
                            <div className="footer-home-logo-img">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="pt-1 pt-md-3 text-uppercase footer-home-logo-copy">
                                COPPYRIGHT © 2020 OUTFIZ CO., LTD. ALL RIGHTS RESERVED
                            </div>
                        </div>
                        <div className="footer-home-contact">
                            <div className="my-4 pt-2 footer-home-contact-icon">
                                <div className="px-1 icon-fb">
                                    <a href="#">
                                        <img src={fb} alt="" />
                                    </a>
                                </div>
                                <div className="px-1 icon-ig">
                                    <a href="#">
                                        <img src={ig} alt="" />
                                    </a>
                                </div>
                                <div className="px-1 icon-sun">
                                    <a href="#">
                                        <img src={sun} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
});
