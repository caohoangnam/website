import React from 'react'

export default function Footer() {
    return (
	    <footer id="footer" className="footer style-03">
  <div className="section-001 section-020">
    <div className="container">
      <div className="akasha-newsletter style-03">
        <div className="newsletter-inner">
          <div className="newsletter-info">
            <div className="newsletter-wrap">
              <h3 className="title">Newsletter</h3>
              <h4 className="subtitle">Get Discount 30% Off</h4>
              <p className="desc">Nam sed felis at eros blandit ultrices et quis quam. In sit amet molestie
                lectus.</p>
            </div>
          </div>
          <div className="newsletter-form-wrap">
            <div className="newsletter-form-inner">
              <input className="email email-newsletter" name="email" placeholder="Enter your email ..." type="email" />
              <a href="#" className="button btn-submit submit-newsletter">
                <span className="text">Subscribe</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="akasha-socials style-02">
        <div className="content-socials">
          <ul className="socials-list">
            <li>
              <a href="https://facebook.com/" target="_blank">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" target="_blank">
                <i className="fa fa-pinterest-p" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="section-021">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p>© Copyright 2020 <a href="#">Akasha</a>. All Rights Reserved.</p>
        </div>
        <div className="col-md-6">
          <div className="akasha-listitem style-03">
            <div className="listitem-inner">
              <ul className="listitem-list">
                <li>
                  <a href="#" target="_self">
                    Contact </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Term &amp; Conditions </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Shipping </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    )
}

