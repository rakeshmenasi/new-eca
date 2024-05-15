import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [role, setEmail] = useState("");

  return (
    <div className="container">
      <div class="contact_us_2">
        <div class="responsive-container-block big-container">
          <div class="blueBG"></div>
          <div class="responsive-container-block container">
            <form class="form-box">
              <div class="container-block form-wrapper">
                <p class="text-blk contactus-head">Get in Touch</p>
                <p class="text-blk contactus-subhead">
                  We would love to hear from you!
                </p>

                <div class="responsive-container-block">
                  <div class="container row">
                    <div class="col">
                      <p class="text-blk input-title">NAME</p>
                      <input
                        class="input"
                        id="ijowk"
                        name="FirstName"
                        placeholder="Please enter first name..."
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div class="col">
                      <p class="text-blk input-title">EMAIL</p>
                      <input
                        class="input"
                        id="ipmgh"
                        name="Email"
                        placeholder="Please enter email..."
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div class="col">
                      <p class="text-blk input-title">PHONE NUMBER</p>
                      <input
                        class="input"
                        id="imgis"
                        name="PhoneNumber"
                        placeholder="Please enter phone number..."
                      />
                    </div>
                  </div>
                  <div class="container row">
                  <div class="col mt-4">
                    <p class=" text-blk input-title">WHAT DO YOU HAVE IN MIND</p>
                    <textarea
                      class="textinput"
                      id="i5vyy"
                      placeholder="Please enter query..."
                    ></textarea>
                    </div>
                  </div>
                </div>
                <button class="submit-btn">Submit</button>
              </div>
              <div class="social-media-links">
                <a href="#" id="ix94i-2">
                  <img
                    class="link-img"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                  />
                </a>
                <a href="#">
                  <img
                    class="link-img"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                  />
                </a>
                <a href="#">
                  <img
                    class="link-img"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                  />
                </a>
                <a href="#" id="izldf-2">
                  <img
                    class="link-img"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                  />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
