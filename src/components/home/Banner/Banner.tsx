import { sendAnalyticEvent } from '../../../services/analytics'
import './banner.scss'

export default function Banner() {
  return (
    <section className="section banner" id="banner">
      <div className="container banner-enter">
        <div className="section-box-banner">
          <div className="content">
            <div>
              {/* <h1>Hola, mi nombre es</h1> */}
              <h1>Hello! My name is</h1>
            </div>
            <div className="banner-title">
              <h2 className="text-capitalize">Andrés Espitia.</h2>
              <h3 className="text-capitalize">Software Engineer</h3>
            </div>
            <div className="banner-description">
              <p className="mt-4">
                I'm a <span className="underline">Software Engineer</span> working on microservices and internal platforms
                on distributed architectures with <span className="underline">Go, Java, Spring, TypeScript and Python</span>,
                building solutions that range from <span className="underline">Backend</span> services
                to <span className="underline">AI-powered tools</span>. I have extensive experience in competitive programming as
                an <span className="underline">ICPC South America-North finalist</span>, with a strong background in
                data structures, algorithms and web development, and experience working in Scrum methodology.
              </p>
            </div>
          </div>
          <div className="div-btn-banner">
            <a
              onClick={() => sendAnalyticEvent('click_send_mail', 'banner', 'email')}
              href="mailto:andres.espitia.afer@gmail.com"
              target="_black"
              className="main-btn text-capitalize"
            >
              get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
