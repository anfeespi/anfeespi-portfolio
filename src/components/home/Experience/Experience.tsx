import { useState } from 'react'
import './experience.scss'

const Experiences = [
  {
    Tab: 'Yuno',
    Organization: 'Yuno',
    Title: 'Full Stack Developer',
    Date: 'Jun 2026 - Present',
    Description: [
      'After finishing my internship, i moved into a full-time role, continuing the design and development of internal products, platforms and AI-Agent-based tools used by teams across the organization.',
      'Implementation of microservices and integrations using Go, Python and TypeScript on distributed architectures.',
      'Development of observability, monitoring and evaluation solutions to improve the performance and response quality of AI agents.'
    ]
  },
  {
    Tab: 'Yuno (Intern)',
    Organization: 'Yuno',
    Title: 'Full Stack Developer Intern',
    Date: 'Jan 2026 - Jun 2026',
    Description: [
      'Design and development of internal products, platforms and tools used by teams across the organization, including AI-Agent-based solutions for observability, evaluation, information centralization and process optimization.',
      'Contributed to the launch of an AI support agent that handles queries and escalates cases efficiently to the right teams.'
    ]
  },
  {
    Tab: 'Tutoring',
    Organization: 'Universidad El Bosque',
    Title: 'Programming Tutor',
    Date: 'Jan 2024 - Jun 2024',
    Description: [
      'I served as a tutor in front of students from lower semesters helping with\n' +
        'topics about Programming 1 (DAO, DTO, Inheritance, Computational Logic, Project Management and\n' +
        'management and project management, programming fundamentals, MVC, Distribution and software\n' +
        'software architecture), at the same time I must generate reports and reports for the coordination and the professors\n' +
        'and the professors themselves, complying with minimum semester schedules.'
    ]
  },
  {
    Tab: 'University',
    Organization: 'Universidad El Bosque',
    Title: 'Systems Engineer',
    Date: '2022 - 2026',
    Description: [
      'Competitive Programming Group Representation, reaching the ICPC Latin American Regional Finals (LAR 2025) — first participation for the university.',
      'Now coaching the university competitive programming teams.',
      'Cumulative Weighted Average 4.5/5.0.'
    ]
  },
  {
    Tab: 'High School',
    Organization: 'Escuela Tecnológica Instituto Técnico Central',
    Title: 'Industrial Technical Bachelor in the speciality of systems and computer science',
    Date: '2016 - 2021',
    Description: [
      'Achievement of gold medal for academic performance (2017, 2021).',
      'Bronze medal for academic achievement (2020).',
      'Obtaining honorable mention for academic average higher than 4.0/5.0 (2016(3), 2017(4), 2018(3), 2019(3), 2020(4), 2021(4)).',
      'Earned honors diploma for academic achievement (2017, 2020, 2021).',
      'Weighted average of the entire academic process higher than 4.0/5.0.'
    ]
  }
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const job = Experiences[active]

  return (
    <section className="section jobs" id="jobs">
      <div className="container">
        <div className="section-box">
          <div className="about-title mb-5" data-aos="fade-up" data-aos-duration="1000">
            <h3 className="e-font section-title">
              <span className="code-font n-section-title">02.</span> Experience & Education
            </h3>
          </div>
          <div className="jobs-tabs" data-aos="fade-up" data-aos-duration="1000">
            <ul className="nav-tabs jobs-tabs nav flex-column">
              {Experiences.map((exp, i) => (
                <li key={i} className="nav-item" title={exp.Tab}>
                  <a
                    className={`nav-link${active === i ? ' active' : ''}`}
                    onClick={() => setActive(i)}
                  >
                    {exp.Tab}
                  </a>
                </li>
              ))}
            </ul>
            <div className="tab-content mt-2">
              <div className="tab-pane active">
                <h4 className="title-tab-content">
                  {job.Title} | <span className="company-tab-content">{job.Organization}</span>
                </h4>
                <h5 className="job-time">{job.Date}</h5>
                {job.Description.map((jobDescriptionParagraph, i) => (
                  <p key={i} className="job-description">
                    {jobDescriptionParagraph}
                  </p>
                ))}
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
