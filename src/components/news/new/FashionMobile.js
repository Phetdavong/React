import React, { Component } from "react";
import Slider from "react-slick";
import Slide from "./Slide";

export default class FashionMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <div className="d-block d-md-none">
                <div className="mt-2 new-fashion-menu-topic">
                    <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        className="pt-5"
                    >
                        <div className="text-center">
                            <a className="text-uppercase text-center" href='#' >Xem tất cả</a>
                        </div>
                        <div className="text-center">
                            <a className="w-20 text-uppercase text-center" href='#'>tech</a>
                        </div>
                        <div className="text-center">
                            <a className="text-uppercase text-center" href='#'>thời trang</a>
                        </div>
                        <div className="text-center">
                            <a className="text-uppercase text-center" href='#'>thời trang</a>
                        </div>
                        <div className="text-center">
                            <a className="text-uppercase text-center" href='#'>thời trang</a>
                        </div>
                    </Slider>
                </div>
                <div className="new-fashion-slide">
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={1}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        <div>
                            <Slide />
                        </div>
                        <div>
                            <Slide />
                        </div>
                        <div>
                            <Slide />
                        </div>
                        <div>
                            <Slide />
                        </div>
                        <div>
                            <Slide />
                        </div>
                        <div>
                            <Slide />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}