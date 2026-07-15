import { sendAnalyticEvent } from '../../../services/analytics'
import './about.scss'

const skills = [
  'Go',
  'Java',
  'Spring',
  'TypeScript',
  'Python',
  'C++',
  'AI Agents',
  'Microservices',
  'React',
  'MySQL',
  'MongoDB',
  'JavaScript',
  'Git',
  'Evals'
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
                  My name is <span className="underline"> Andrés Espitia </span>, also known as <span className="underline">anfeespi</span>, i'm a Software Engineer from Colombia,
                  currently working at <a className="underline" href="https://www.y.uno/" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>Yuno</a> building AI Agents and internal platforms for payment operations.
                  I love to develop software and enjoy participating in events such as hackathons or problem-solving contests: i represented my
                  university in competitive programming, reaching the <span className="underline">ICPC South America-North regional finals (LAR 2025)</span>,
                  and now i coach the next generations of competitors.
                </p>

                <p data-aos="fade-up" data-aos-duration="1000">
                  In my career, I've learned a lot, my main tools today are <span className="underline"> Go, Java & Spring, TypeScript and
                  Python</span>, working on microservices and distributed architectures, however i don't close myself into these, i love to learn
                  at every moment, keeping a strong <span className="underline">Backend</span> foundation while
                  exploring <span className="underline">AI Agents, observability and evaluation systems</span>
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
                  src="assets/images/me/anfeespi.jpg"
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
