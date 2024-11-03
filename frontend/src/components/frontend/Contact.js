import React from "react";
import "./css/contact.css";
function Contact() {
  return (
    <div>
      <main id="main">
        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Liên hệ</h2>
              <p>
                Pet Shop là nhãn hiệu độc quyền của Công ty TNHH May Mặc Thăng
                Long đã được Cục sở hữu trí tuệ cấp Giấy chứng nhận nhãn hiệu
                hàng hóa. Pet Shop chuyên về dòng sản phẩm may mặc cho cả người
                lớn và trẻ em. Với ý tưởng sử dụng hình ảnh những thú cưng quen
                thuộc trong gia đình.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i class="bi bi-signpost-2-fill"></i>
                    <h4>Địa chỉ:</h4>
                    <p>
                      P. Văn Quán, Hà Đông, Hà Nội, Việt Nam
                    </p>
                  </div>

                  <div className="email">
                    <i class="bi bi-envelope-fill"></i>
                    <h4>Email:</h4>
                    <p>hau.edu.vn</p>
                  </div>

                  <div className="phone">
                    <i class="bi bi-telephone-fill"></i>
                    <h4>Số điện thoại:</h4>
                    <p>02438541616</p>
                  </div>
                  <iframe
                    title="Bản đồ HAU"
                    style={{ width: 600, height: 450, border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7975834843517!2d105.78658!3d20.9805624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ade83ba9e115%3A0x6f4fdb5e1e9e39ed!2sTr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20Ki%E1%BA%BFn%20tr%C3%BAc%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2s!4v1698939116790!5m2!1svi!2s"
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form method="post" className="php-email-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label for="name">Tên của bạn</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="name">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="name">Tiêu đề</label>
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="name">Lời nhắn</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit">Gửi phản hồi</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
