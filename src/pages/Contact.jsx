import React from 'react'
import '../styles/Contact.css';


const Contact = () => {
  return (
    < >
      <div>
  <div className="hero-content position-absolute top-50 start-50 translate-middle">
    <h1 className="text-white">CONTACT US</h1>
  </div>
  <section>
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-4">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your message (optional)</label>
                <textarea id="message" name="message" defaultValue={""} />
              </div>
            </form>
          </div>
          <hr />
        </div>
        <div className="col-lg-4 offset-lg-1">
          <div className="company-info">
            <h2>Nepal Wanders Pvt. Ltd.</h2>
            <p>Saraswatinagar, Bouddha – 6, Kathmandu</p>
            <p>+977-9841255236, +977-9841708209</p>
            <div className="social-icons">
              <span>❌ nepalwanders</span> <br />
              <span>☉ 977+ 9841255236</span> <br />
              <span>📍 info@nepalwanders.com</span>
            </div>
          </div>
        </div>    
      </div>
    </div></section>
</div>

    </>
  )
}

export default Contact
