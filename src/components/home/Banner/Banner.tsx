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
              <h3 className="text-capitalize">Backend developer</h3>
            </div>
            <div className="banner-description">
              <p className="mt-4">
                I'm a <span className="underline"> Systems Engineering </span> student with a Technical Industrial Bachelor's degree in
                <span className="underline"> Systems and Computing </span> and extensive experience in competitive programming. I have a broad knowledge
                of <span className="underline"> Java, C++, Spring and React</span>, i also have knowledge of data structures, algorithms and web
                development with emphasis on <span className="underline">Backend</span>, with experience working in Scrum and Crystal Methodology.
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
