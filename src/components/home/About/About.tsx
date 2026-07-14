import { sendAnalyticEvent } from '../../../services/analytics'
import './about.scss'

const skills = [
  'Java',
  'Spring',
  'C++',
  'MySQL',
  'HTML',
  'JavaScript',
  'TypeScript',
  'Git',
  'CSS',
  'PHP',
  'Python 3',
  'JSF',
  'Bootstrap',
  'React'
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-box">
          <div className="about-title" data-aos="fade-up">
            <h3 className="section-title">
              <span className="n-section-title">01.</span> About me
            </h3>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div className="about-description">
                <p data-aos="fade-up" data-aos-duration="1000">
                  Hello <span className="underline">World!</span>! 👋
                </p>
                <p data-aos="fade-up" data-aos-duration="1000">
                  My name is <span className="underline"> Andrés Espitia </span>, also known as <span className="underline">anfeespi</span> i'm a Java Backend certified developer from Colombia.
                  I love to develop software and enjoy participating in events such as hackathons or problem-solving contest (ACIS/REDIS Colombian
                  Collegiate Programming League), playing video games, watching TV and
                  videos about my areas of work, such as mathematics and engineering. I like to be proactive
                  and make the most of my time.
                </p>

                <p data-aos="fade-up" data-aos-duration="1000">
                  In my career, I've learned a lot, but my specialities are <span className="underline"> Java &
                  Spring.</span> and i have experience as a tutor on these topics, however i don´t close myself into these, i love to learn
                  at every moment, i work with <span className="underline">React, C++ and MySQL</span>
                </p>

                <p data-aos="fade-up" data-aos-duration="1000">Some of the Software that i have experience:</p>
                <ul className="skills-list" data-aos="fade-up">
                  {skills.map((skill) => (
                    <li key={skill} className="skill-element" data-aos="fade-up" data-aos-duration="1000">
                      <span className="underline">{skill} </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-4 mt-md-0 text-center" data-aos="fade-up" data-aos-duration="1000">
              <div className="about-img-container">
                <img
                  onClick={() => sendAnalyticEvent('click_image', 'about', 'image')}
                  width="300"
                  height="400"
                  src="/assets/images/me/anfeespi.jpg"
                  alt="Git User"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
