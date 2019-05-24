import React from "react"
import ContactStyles from "./Contact.module.scss"

const Contact = ({ height, id }) => {
  return (
    <div style={height} id={id} className={ContactStyles.flex}>
      <h2>Contact</h2>
      <div>
        <p>Have a question or want to work together?</p>
        <div className={ContactStyles.flexForm}>
          <form action="" method="POST">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="5" required />
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