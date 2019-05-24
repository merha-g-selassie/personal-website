import React from "react"
import ContactStyles from "./Contact.module.scss"

const Contact = ({ height, id }) => {
  return (
    <div style={height} id={id} className={ContactStyles.flex}>
      <h2>Contact</h2>
      <div>
        <p>Have a question or want to work together?</p>
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
              value="mgs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value="mgs@gmail.com"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              value="hello mgs."
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
  )
}

export default Contact
