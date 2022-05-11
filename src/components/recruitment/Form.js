import React from 'react'

export default function Form() {
    function Click(){
        var checkOption = document.querySelectorAll(".selectBox-check");
        var optionBox;

        var optionForm = document.querySelectorAll(".check-formSelect")

        const checkContainElement = (target) => {
            return Array.from(checkOption).some((item) => {
                if (item.contains(target)) {
                    optionBox = document.querySelector(`.check-formSelect[data-id="${item.getAttribute("data-id")}"]`)
                    return true;
                }
                return false;
            });
        };
        window.addEventListener("click", function(e) {
            if (checkContainElement(e.target)) {
                optionBox.hasAttribute("style") ?
                    optionBox.removeAttribute("style") :
                    optionBox.setAttribute("style", "display:none !important");
            } else {
                if (!optionBox.contains(e.target)) {
                    Array.from(optionForm).map(item => {
                        !item.hasAttribute("style") &&
                    item.setAttribute("style", "display:none !important");
                    })

                }
            }
        });
    }
    
    return (
        <section className="mt-5 page-recruitment-content">
            <div className="pt-5 d-flex justify-content-center topic">
                <div className="my-auto line" />
                <h1 className="px-3 text-center text-uppercase">
                    <a href style={{ color: "beige" }}>
                        tuyển dụng
                    </a>
                </h1>
                <div className="my-auto line" />
            </div>
            <div className="mt-5 container">
                <div className="pb-5 row recruitment-content-seclect">
                    <div className="mt-2 col-sm-12 col-md-4 multiselect">
                        <form onClick={Click}>
                            <div className="multiselect">
                                <div className="selectBox-check" data-id="category">
                                    <div className="selectBox">
                                        <select className="form-control">
                                            <option>Hạng mục</option>
                                        </select>
                                        <div className="overSelect" />
                                    </div>
                                </div>
                                <div
                                    className="check-formSelect"
                                    id="checkboxes"
                                    data-id="category"
                                    style={{ display: "none" }}
                                >
                                    <label className="col-12 infomation-contact check-recruitment">
                                        <p className="ml-5">Design</p>
                                        <input type="checkbox" />
                                        <span className="ml-4 checkmark" />
                                    </label>
                                    <label className="col-12 infomation-contact check-recruitment">
                                        <p className="ml-5">Technical</p>
                                        <input type="checkbox" />
                                        <span className="ml-4 checkmark" />
                                    </label>
                                    <label className="col-12 infomation-contact check-recruitment">
                                        <p className="ml-5">Non-technical</p>
                                        <input type="checkbox" />
                                        <span className="ml-4 checkmark" />
                                    </label>
                                    <label className="col-12 infomation-contact check-recruitment">
                                        <p className="ml-5">Ecommerce</p>
                                        <input type="checkbox" />
                                        <span className="ml-4 checkmark" />
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mt-2 col-sm-12 col-md-4 multiselect">
                        <form onClick={Click}>
                            <div className="multiselect">
                                <div className="selectBox-check" data-id="role">
                                    <div className="selectBox">
                                        <select className="form-control">
                                            <option>Vai trò</option>
                                        </select>
                                        <div className="overSelect" />
                                    </div>
                                </div>
                                <div
                                    className="check-formSelect"
                                    id="checkboxes"
                                    data-id="role"
                                    style={{ display: "none" }}
                                >
                                    <label className="col-12 infomation-contact check-recruitment">
                                        <p className="ml-5">Design</p>
                                        <input type="checkbox" />
                                        <span className="ml-4 checkmark" />
                                    </label>
                                    <label className="col-12 infomation-contact check-recruitment">
                                        <p className="ml-5">Technical</p>
                                        <input type="checkbox" />
                                        <span className="ml-4 checkmark" />
                                    </label>
                                    <label className="col-12 infomation-contact check-recruitment">
                                        <p className="ml-5">Non-technical</p>
                                        <input type="checkbox" />
                                        <span className="ml-4 checkmark" />
                                    </label>
                                    <label className="col-12 infomation-contact check-recruitment">
                                        <p className="ml-5">Ecommerce</p>
                                        <input type="checkbox" />
                                        <span className="ml-4 checkmark" />
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mt-2 col-sm-12 col-md-4 multiselect">
                        <form onClick={Click}>
                            <div className="multiselect">
                                <div className="selectBox-check" data-id="time">
                                    <div className="selectBox">
                                        <select className="form-control">
                                            <option>Thời gian</option>
                                        </select>
                                        <div className="overSelect" />
                                    </div>
                                </div>
                                <div
                                    className="check-formSelect"
                                    id="checkboxes"
                                    data-id="time"
                                    style={{ display: "none" }}
                                >
                                    <label className="col-12 infomation-contact check-recruitment">
                                        <p className="ml-5">Design</p>
                                        <input type="checkbox" />
                                        <span className="ml-4 checkmark" />
                                    </label>
                                    <label className="col-12 infomation-contact check-recruitment">
                                        <p className="ml-5">Technical</p>
                                        <input type="checkbox" />
                                        <span className="ml-4 checkmark" />
                                    </label>
                                    <label className="col-12 infomation-contact check-recruitment">
                                        <p className="ml-5">Non-technical</p>
                                        <input type="checkbox" />
                                        <span className="ml-4 checkmark" />
                                    </label>
                                    <label className="col-12 infomation-contact check-recruitment">
                                        <p className="ml-5">Ecommerce</p>
                                        <input type="checkbox" />
                                        <span className="ml-4 checkmark" />
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
