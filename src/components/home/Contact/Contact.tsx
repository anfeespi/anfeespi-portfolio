import { sendAnalyticEvent } from '../../../services/analytics'
import './contact.scss'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-box">
          <div className="mb-4" data-aos="fade-up" data-aos-duration="1000">
            <h3 className="contact-pre-title big-subtitle">05. Now What?</h3>
            <h4 className="e-font contact-title big-title">Get in touch!</h4>
          </div>
          <p data-aos="fade-up" data-aos-duration="1000">
            I’d be happy to hear from you if you'd like to discuss new opportunities. Drop me a message, and I’ll reply as soon as I can.
            If you can imagine, you can program it!
          </p>
          <div className="mt-5">
            <a
              onClick={() => sendAnalyticEvent('click_send_mail', 'contact', 'email')}
              href="mailto:andres.espitia.afer@gmail.com"
              target="_blank"
              className="main-btn"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
