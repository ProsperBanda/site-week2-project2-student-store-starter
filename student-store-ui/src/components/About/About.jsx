import * as React from "react"
import "./About.css"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="content">
        <h3>About</h3>
        <div className="summary">
          <div className="text">
            <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
            <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
            <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
          </div>
          <div className="media">
            <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt="CodePath Logo" />
          </div>
        </div>
      </div>

      <div className="contact" id="Contact">
          <div className="content">
            <h3>Contact Us</h3>
            <div className="summary">
              <ul className="info">
                <li>
                  <span className="label">
                    Email
                    :
                  </span>
                  <span>code@path.org</span>
                </li>
                <li>
                  <span className="label">
                    Phone
                    :
                  </span>
                  <span>1-800-CODEPATH</span>
                </li>
                <li>
                  <span className="label">
                    Address 
                    :
                  </span>
                  <span>123 Fake Street, San Francisco, CA</span>
                </li>
                <li>
                  <span>Socials:</span>
                  <span className="socials">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5V12.5C1.5 14.7091 3.29086 16.5 5.5 16.5H8.91055V11.3683H7.13697V9.36847H8.91055V7.89368C8.91055 6.18202 9.98388 5.25 11.5522 5.25C12.3035 5.25 12.9487 5.30466 13.137 5.32896V7.11791L12.0495 7.11847C11.1967 7.11847 11.0317 7.51325 11.0317 8.0919V9.36902H13.0655L12.8007 11.3689H11.0317V16.5H12.5C14.7091 16.5 16.5 14.7091 16.5 12.5V5.5C16.5 3.29086 14.7091 1.5 12.5 1.5H5.5Z" fill="var(--pure-white)"></path>
                    </svg>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="white"><path d="M8.73551 11.2265C10.0446 11.2265 11.1059 10.1652 11.1059 8.85611C11.1059 7.54698 10.0446 6.48572 8.73551 6.48572C7.42637 6.48572 6.36511 7.54698 6.36511 8.85611C6.36511 10.1652 7.42637 11.2265 8.73551 11.2265Z" fill="var(--pure-white)"></path><path d="M13.2768 12.9783H17.2053V14.778C17.2053 14.778 18.2713 12.6459 21.1719 12.6459C23.7594 12.6459 25.9028 13.9205 25.9028 17.8057V25.9985H21.8317V18.7985C21.8317 16.5066 20.6081 16.2545 19.6758 16.2545C17.7407 16.2545 17.4095 17.9236 17.4095 19.0974V25.9985H13.2768V12.9783Z" fill="var(--pure-white)"></path><path d="M6.66917 12.9783H10.8018V25.9984H6.66917V12.9783Z" fill="var(--pure-white)"></path></svg>

                  </span>
                </li>
              </ul>
              <div className="media">
                <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" alt="Person Picture" />
              </div>
            </div>
          </div>
    </div>
    <footer className="footer">
      <div className="content">
        <div className="top">
          <div className="links">
            <div className="link-column">
              <h4>Categories</h4>
              <ul>
                <li>All Categories</li>
                <li>Clothing</li>
                <li>Food</li>
                <li>Accessories</li>
                <li>Tech</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Find a store</li>
                <li>Terms</li>
                <li>Sitemap</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Support</h4>
              <ul>
                <li>Contact Us</li>
                <li>Money Refund</li>
                <li>Order Status</li>
                <li>Shipping Info</li>
                <li>Open Dispute</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Account</h4>
              <ul>
                <li>Login</li>
                <li>Register</li>
                <li>Account Setting</li>
                <li>My Orders</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Socials</h4>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Our App</h4>
              <ul>
                <li>
                  <img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" alt="app store" />
                </li>
                <li>
                  <img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" alt="google play store" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span className="payment-options">
            <img src="https://codepath-student-store-demo.surge.sh/assets/american_express.40f242c7.svg" alt="american express" />
            <img src="https://codepath-student-store-demo.surge.sh/assets/mastercard.c75b7bc4.svg" alt="mastercard" />
            <img src="https://codepath-student-store-demo.surge.sh/assets/paypal.6a45b239.svg" alt="paypal" />
            <img src="https://codepath-student-store-demo.surge.sh/assets/visa.a818ddc4.svg" alt="visa" />
          </span>
        </div>
      </div>
    </footer>
    </div>
    
    
  )
}

