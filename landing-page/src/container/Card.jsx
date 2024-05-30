import React from 'react';

function Card() {
  return (
    <>
      <div>
        <section className="features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary"></i>
                  </div>
                  <h3>Fully Responsive</h3>
                  <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary"></i>
                  </div>
                  <h3>Bootstrap 5 Ready</h3>
                  <p className="lead mb-0">Featuring the latest build of the new Bootstrap 5 framework!</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary"></i>
                  </div>
                  <h3>Easy to Use</h3>
                  <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Image Showcases--> */}
        <section className="showcase">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: "url('src/assets/img/bg-showcase-1.jpg')" }}></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Fully Responsive Design</h2>
                <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: "url('/src/assets/img/bg-showcase-2.jpg')" }}></div>
              <div className="col-lg-6 my-auto showcase-text">
                <h2>Updated For Bootstrap 5</h2>
                <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: "url('/src/assets/img/bg-showcase-3.jpg')" }}></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Easy to Use & Customize</h2>
                <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials--> */}
        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-1.jpg" alt="..." />
                  <h5>Margaret E.</h5>
                  <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-2.jpg" alt="..." />
                  <h5>Fred S.</h5>
                  <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-3.jpg" alt="..." />
                  <h5>Sarah W.</h5>
                  <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Call to Action--> */}
        <section className="call-to-action text-white text-center" id="signup">
          <div className="container position-relative">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                <form className="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                  {/* <!-- Email address input--> */}
                  <div className="row">
                    <div className="col">
                      <input className="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                      <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                      <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
                    </div>
                  </div>
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">Form submission successful!</div>
                      <p>To activate this form, sign up at</p>
                      <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                  </div>
                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">Error sending message!</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Card;
