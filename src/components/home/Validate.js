import React, {useState} from 'react';
import isEmpty from 'validator/lib/isEmpty'
export const ContactForm = (() => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [texts, setText] = useState('')
    const[validationContact, setValidationContact] = useState('')
    const onChangeName = event =>{
        const value = event.target.value
        setName(value)
    }
    const onChangeEmail = event =>{
        const value = event.target.value
        setEmail(value)
    }
    const onChangePhone = event =>{
        const value = event.target.value
        setPhone(value)
    }
    const onChangeText = event =>{
        const value = event.target.value
        setText(value)
    }
    const validateAll =()=>{
        const contact ={}
        if(isEmpty(name)){
            contact.name = "Vui lòng nhập học & tên !"
        }
        if(isEmpty(email)){
            contact.email = "Vui lòng nhập email !"
        }
        if(isEmpty(phone)){
            contact.phone = "Vui lòng nhập SĐT !"
        }
        if(isEmpty(texts)){
            contact.texts = "Vui lòng nhập nội dung !"
        }
        setValidationContact(contact)
        if(Object.keys(contact).length > 0 ) return false
        return true
    }
    const onSubmit =()=>{
        const isValid = validateAll()
        if(!isValid) return

    }
    return (
        <section className="contact" id="contact">
            <div className="contact-box">
                <div className="container">
                    <div className="pt-5 d-flex justify-content-center topic">
                        <div className="my-auto line" />
                        <h1 className="px-3 text-center text-uppercase">
                            <a style={{ color: 'white' }} href="#">
                                Liên hệ
                            </a>
                        </h1>
                        <div className="my-auto line" />
                    </div>
                </div>
                <div className="mt-5 container-fluid contact-form">
                    <div className="m-auto pb-5 w-100 col-12 pb-3 contact-form-box">
                        <form className="w-100" action>
                            <div className="form-group">
                                <label id="checkName" className="pb-3 text-uppercase" htmlFor="name">
                                    họ và tên*
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='name'
                                    id="name"
                                    placeholder="Nhập họ và tên của bạn"
                                    onChange={onChangeName}
                                />
                                <span className="contact-form-text-check" id="check-name">
                                    {validationContact.name}
                                </span>
                            </div>
                            <div className="form-group">
                                <label id="checkEmail" className="py-3 text-uppercase" htmlFor="email">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Nhập email của bạn"
                                    onChange={onChangeEmail}
                                />
                                <span className="contact-form-text-check" id="check-email">
                                    {validationContact.email}
                                </span>
                            </div>
                            <div className="form-group">
                                <label id="checkPhone" className="py-3 text-uppercase" htmlFor="phone">
                                    Điện thoại*
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Nhập số điện thoại của bạn"
                                    onChange={onChangePhone}
                                />
                                <span className="contact-form-text-check" id="check-phone">
                                    {validationContact.phone}
                                </span>
                            </div>
                            <div className="form-group">
                                <label id="checkContent" className="py-3 text-uppercase" htmlFor="content">
                                    nội dung*
                                </label>
                                <textarea
                                    className="form-control"
                                    id="content"
                                    rows={5}
                                    placeholder="Nhập nội dung"
                                    onChange={onChangeText}
                                />
                                <span className="contact-form-text-check" id="check-content">
                                    {validationContact.texts}
                                </span>
                            </div>
                            <button
                                type="button"
                                value="button"
                                className="d-none d-sm-block text-uppercase btn btn-primary btn-lg btn-block"
                                onClick={onSubmit}
                            >
                                Gửi
                            </button>
                            <button
                                type="button"
                                value="button"
                                className="mt-3 d-block d-sm-none text-uppercase btn btn-dark btn-form-mobile"
                            >
                                Gửi
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
});
