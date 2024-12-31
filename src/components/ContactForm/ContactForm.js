import React from 'react';
import './ContactForm.scss';
import icon from '../../assets/footer/calling.png';

const ContactForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Tên</label>
                        <input type="email" class="form-control" placeholder="Nhập tên của bạn..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Số điện thoại</label>
                        <input type="tel" class="form-control" placeholder="Nhập số điện thoại..." />
                    </div>
                </div>
                {/*<div className="col-lg-6">
                    <div class="form-group">
                        <label>Service</label>
                        <select class="form-control">
                            <option>Teeth Whitening</option>
                            <option>Teeth Whitening</option>
                            <option>Teeth Whitening</option>
                            <option>Teeth Whitening</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Department</label>
                        <select class="form-control">
                            <option>Select Department</option>
                            <option>Select Department</option>
                            <option>Select Department</option>
                            <option>Select Department</option>
                        </select>
                    </div>
                </div>*/}
                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Lời nhắn</label>
                        <textarea class="form-control" placeholder='Lời nhắn của bạn...' rows="3"></textarea>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full">
                    <button type="submit" class="btn appointment-btn">GỬI LIÊN HỆ</button>
                    <div className="appointment-call py-4">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>Hotline liên hệ</p>
                            <h6>097 282 34 28</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;