import React,{memo} from 'react'
import Logo from './../../assets/image/Logo.png';
import { Link } from 'react-router-dom';
import VN from './../../assets/image/co-viet.png';
import ENG from './../../assets/image/co-anh.png';
import 'react-dropdown/style.css';
import Dropdown from 'react-bootstrap/Dropdown'
export const NewMenu = memo(function Menu() {
    return (
        <section className="header">
            <section className="menu">
                <nav className="container navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt />
                    </Link>
                    <ul className="navbar-nav m-auto">
                        <div className="py-1 py-sm-4 nav-item text-center name-page">
                            <h2 className="text-uppercase">tin tức</h2>
                        </div>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <div className="nav-item-right dropdown menu-box-language">
                            <Dropdown>
                                <Dropdown.Toggle  variant="secondary" className='btn btn-primary'>
                                    <img  className='menu-language-img pr-1' src={VN} />
                                    VIE
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark" className='language-btn'>
                                    <Dropdown.Item href="#/action-1" className='btn-eng' active>
                                        <img className='mx-0 menu-language-img' src={ENG} alt="" />
                                        ENG
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </form>
                </nav>
            </section>
        </section>
    )
})
