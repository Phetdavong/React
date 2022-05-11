import React from 'react'
import { useState } from "react";
export default function FormInf() { 
    const [ex, setMyCar] = useState("0");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }
    const[file, setFile]  = useState('');
    const[filename, setFileName]  = useState('Choose File');
   
    const onChange = e=>{
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);

    }
    return (
        
        <section className="pb-5 form-descripntion">
            <div className="px-0 container">
                <div className="form-group">
                    <div className="m-2 m-sm-0 row form-row">
                        <div className="col-6">
                            <label>Họ</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Họ*"
                                required
                                name
                            />
                        </div>
                        <div className="col-6">
                            <label>Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tên*"
                                required
                                name
                            />
                        </div>
                        <div className="col-6">
                            <label>Số điện thoại</label>
                            <input
                                type="phone"
                                className="form-control"
                                placeholder="Số điện thoại*"
                                required
                                name
                            />
                        </div>
                        <div className="col-6">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Địa chỉ mail*"
                                required
                                name
                            />
                        </div>
                        <div className="col-6">
                            <label>Số điện thoại</label>
                            <select
                                value={ex}
                                onChange={handleChange}
                                className="form-control custom-select mr-sm-2"
                                id="inlineFormCustomSelect"
                            >
                                <option value={0}>Tổng năm kinh nghiệm*</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <label>Tên công ty</label>
                            <input
                                type="company"
                                className="form-control"
                                placeholder="Công ty hiện tại"
                                required
                                name
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="exampleFormControlTextarea1">Tin nhắn</label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={10}
                                placeholder="Tin nhắn của bạn"
                                defaultValue={""}
                            />
                        </div>
                        <div className='mt-5 col-12'>
                            <div className="input-group mt-3">
                                <div className="custom-file">
                                    <input 
                                        type="file" 
                                        className="custom-file-input" 
                                        id="customFile"
                                        onChange={onChange}
                                        multiple
                                    />
                                    <label className="custom-file-label" htmlFor="customFile">
                                        {filename}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <p className="pt-5 col-12" style={{ fontSize: 16 }}>
                            <b>Outfiz</b> cam kết bảo vệ và tôn trọng quyền riêng tư của bạn, và
                            chúng tôi sẽ chỉ sử dụng thông tin cá nhân của bạn để quản lý tài
                            khoản của bạn và cung cấp các sản phẩm và dịch vụ mà bạn yêu cầu từ
                            chúng tôi. Theo thời gian, chúng tôi muốn liên hệ với bạn về các sản
                            phẩm và dịch vụ của chúng tôi, cũng như các nội dung khác mà bạn có
                            thể quan tâm. Nếu bạn đồng ý cho chúng tôi liên hệ với bạn vì mục đích
                            này, vui lòng đánh dấu vào bên dưới để cho biết bạn muốn chúng tôi
                            liên hệ với bạn như thế nào:
                        </p>
                        <label className="col-12 infomation-contact">
                            <p>
                                Tôi đồng ý nhận các thông tin liên lạc khác từ Outfiz.
                            </p>
                            <input type="checkbox" />
                            <span className="checkmark" />
                        </label>
                        <label className="col-12 infomation-contact">
                            <p>
                                Tôi đồng ý cho phép Outfiz lưu trữ và xử lý dữ liệu cá nhân của tôi.
                            </p>
                            <input type="checkbox" />
                            <span className="checkmark" />
                        </label>
                        <div className="col-12 infomation-contact-btn">
                            <button type="button" className="btn btn-warning btn-lg btn-block">
                                GỬI
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
