import React from "react"
import ContactStyles from "./Contact.module.scss"

const Contact = ({ height, id }) => {
  return typeof window !== `undefined` ? (
    <div style={height} id={id} className={ContactStyles.flex}>
      <div>
        <div className="wow bounceInDown">
          <h2 className={ContactStyles.headerTwo}>Contact</h2>
        </div>
        <div>
          <div className="wow  bounceInLeft">
            <p>Have a question or want to work together?</p>
          </div>
          <div className="wow  bounceInLeft">
            <div className={ContactStyles.flexForm}>
              <form
                method="post"
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  style={{ paddingLeft: "10px" }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  style={{ paddingLeft: "10px" }}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                  style={{ paddingLeft: "10px" }}
                />
                <div className={ContactStyles.flexRight}>
                  <input
                    className={ContactStyles.button}
                    type="submit"
                    name="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default Contact
