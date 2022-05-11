import React, { Component } from 'react';
import Logo from './../../assets/image/Logo.png';
import VN from './../../assets/image/co-viet.png';
import ENG from './../../assets/image/co-anh.png';
import 'react-dropdown/style.css';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';
export default class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleMenu(){
        this.setState({ menu: !this.state.menu })
    }
    render(){
        const show = (this.state.menu) ? "show" : "" ;
        return (
            <section className="menu">
                <div className="w-100 px-0 container">
                    <nav className="px-0 pt-3 navbar navbar-expand-lg navbar-light bg-dark">
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} alt="" />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={ this.toggleMenu }
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className={"collapse navbar-collapse " + show}>
                            <ul className="pt-2 navbar-nav m-auto menu-box">
                                <li className="mx-sm-auto mx-md-2 nav-item">
                                    <a
                                        className="mx-auto mx-lg-0 text-center text-uppercase nav-link active"
                                        href="#"
                                        style={{ width: '128px' }}
                                        activeClassName="active"
                                    >
                                        Giới thiệu
                                    </a>
                                </li>
                                <li className="mx-sm-auto mx-md-2 nav-item">
                                    <a
                                        className="mx-auto mx-lg-0 text-center text-uppercase nav-link"
                                        href="#service"
                                        style={{ width: '128px' }}
                                    >
                                        Dịch vụ
                                    </a>
                                </li>
                                <li className="mx-sm-auto mx-md-2 nav-item">
                                    <a
                                        className="mx-auto mx-lg-0 text-center text-uppercase nav-link"
                                        href="#recruitment"
                                        style={{ width: '128px' }}
                                    >
                                        Tuyển dụng  
                                    </a>
                                </li>
                                <li className="mx-sm-auto mx-md-2 nav-item">
                                    <a
                                        className="mx-auto mx-lg-0 text-center text-uppercase nav-link"
                                        href="#new"
                                        style={{ width: '128px' }}
                                    >
                                        Tin tức
                                    </a>
                                </li>
                                <li className="mx-sm-auto mx-md-2 nav-item">
                                    <a
                                        className="mx-auto mx-lg-0 ml-2 mr-3 text-center text-uppercase nav-link"
                                        href="#contact"
                                        style={{ width: '128px' }}
                                    >
                                        Liên hệ
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-3 text-center option-language">
                                <Dropdown>
                                    <Dropdown.Toggle  variant="secondary" className='btn btn-primary'>
                                        <img  className='menu-language-img pr-1' src={VN} />
                                        VIE
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu variant="dark" className='btn-language'>
                                        <Dropdown.Item href="#/action-1" className='btn-eng' active>
                                            <img className='mx-0 menu-language-img' src={ENG} alt="" />
                                            ENG
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                
                            </div>
                            
                        </div>
                    </nav>
                </div>
            </section>
        );
    }
}