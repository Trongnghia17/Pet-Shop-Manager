import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function NewsletterForm() {
  const history = useHistory();
  const [email, setEmail] = useState({
    email: "",
  });
  const [errorlist, setError] = useState([]);

  const handleInput = (e) => {
    e.persist();
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const submitSubscriber = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("email", email.email);
    axios.post(`subscribers`, data).then((res) => {
      if (res.data.status === 200) {
        e.target.reset();
        swal("Success", res.data.message, "success");
        setEmail({
          ...email,
          email: "",
        });
      } else if (res.data.status === 401) {
        swal("Warning", res.data.errors, "warning");
        setError(res.data.errors);
        history.push("/login");
      } else if (res.data.status === 409) {
        setError(res.data.errors);
      } else if (res.data.status === 400) {
        setError(res.data.errors);
      }
    });
  };

  return (
    <div class="row justify-content-center mt-5">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        {/*<div className="card card-body">*/}
        {/*  <h5 className="card-title text-center">Newsletter</h5>*/}
        {/*  <form onSubmit={submitSubscriber} encType="multipart/form-data">*/}
        {/*    <div className="mb-3">*/}
        {/*      <label class="form-label">Email của bạn</label>*/}
        {/*      <input*/}
        {/*        type="email"*/}
        {/*        name="email"*/}
        {/*        onChange={handleInput}*/}
        {/*        value={email.email}*/}
        {/*        className="form-control"*/}
        {/*        placeholder="trannghia2704@gmail.com"*/}
        {/*        aria-describedby="emailHelp"*/}
        {/*      />*/}
        {/*      <div id="emailHelp" class="form-text">*/}
        {/*        Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai*/}
        {/*        khác.*/}
        {/*      </div>*/}
        {/*      <small className="text-danger">{errorlist.email}</small>*/}
        {/*    </div>*/}
        {/*    <div className="text-center">*/}
        {/*      <button type="submit" className="btn btn-primary px-4">*/}
        {/*        Subscriber*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  </form>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default NewsletterForm;
