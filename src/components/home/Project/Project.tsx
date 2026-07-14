import Carousel from '../../ui/Carousel'
import './project.scss'

const Projects = [
  {
    imgs: [
      '/assets/images/puretouch/1.png',
      '/assets/images/puretouch/2.png',
      '/assets/images/puretouch/3.png',
      '/assets/images/puretouch/4.png'
    ],
    Title: 'Pure Touch',
    Description:
      'During a Hackathon we need to preserve the good habits of washing hands, so we develop an application that follows up all the proccess, using AI to identify the hands and its movements.',
    Technologies: ['JavaScript', 'React', 'TensorFlow', 'Figma'],
    ghLink: 'https://github.com/anfeespi/PureTouch'
  },
  {
    imgs: [
      '/assets/images/forestbet/1.png',
      '/assets/images/forestbet/2.png',
      '/assets/images/forestbet/3.png',
      '/assets/images/forestbet/4.png',
      '/assets/images/forestbet/5.png',
      '/assets/images/forestbet/6.png',
      '/assets/images/forestbet/7.png',
      '/assets/images/forestbet/8.png',
      '/assets/images/forestbet/9.png'
    ],
    Title: 'ForestBet',
    Description:
      'A web application through which bets could be placed and registered, with emails to confirm accounts and race performance in real time through an api, also using 3 different databases, 4 different projects or APIs to emulate modules and an architecture that would allow scalability and upgrades.',
    Technologies: ['Spring Boot', 'Thymeleaf', 'MongoDB', 'MySQL', 'Bootstrap', 'Figma', 'APIs'],
    ghLink: 'https://github.com/anfeespi/ForestBet'
  },
  {
    imgs: [
      '/assets/images/pokedex/1.png',
      '/assets/images/pokedex/2.png',
      '/assets/images/pokedex/3.png',
      '/assets/images/pokedex/4.png',
      '/assets/images/pokedex/5.png'
    ],
    Title: 'Pokedex Gen V',
    Description:
      'A Java desktop application that emulates a generation 5 pokedex, using pure Java and pokeApi API queries in order to obtain pokemon images and information.',
    Technologies: ['Java', 'MVC', 'APIs', 'Java Swing', 'Figma'],
    ghLink: 'https://github.com/anfeespi/myRepository/tree/main/MyProjects/Pokedex'
  },
  {
    imgs: [
      '/assets/images/connect4/1.png',
      '/assets/images/connect4/2.png',
      '/assets/images/connect4/3.png',
      '/assets/images/connect4/4.png',
      '/assets/images/connect4/5.png',
      '/assets/images/connect4/6.png',
      '/assets/images/connect4/7.png'
    ],
    Title: 'Connect 4',
    Description:
      'A Java application that uses persistence through serialized or binary files, that allows to play 4 online Transformers themed games, having support for 2 languages and light and dark themes, as well as handling property files.',
    Technologies: ['Java', 'Persistence', 'Properties', 'MVC', 'Figma', 'Java Swing'],
    ghLink: 'https://github.com/anfeespi/myRepository/tree/main/MyProjects/ConnectFour'
  }
]

export default function Project() {
  return (
    <section className="section proyects" id="proyects">
      <div className="container">
        <div className="section-box">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h3 className="section-title">
              <span className="n-section-title">03.</span> My Projects
            </h3>
          </div>

          {Projects.map((project, i) => (
            <div key={project.Title} className="d-flex proyect-container" data-aos="fade-up" data-aos-duration="1000">
              {i % 2 === 0 && <Carousel images={project.imgs} alt={project.Title} />}

              {i % 2 === 0 && (
                <div className="img-feature-proyect-container" data-aos="fade-up" data-aos-duration="1000">
                  <div className="img-feature-proyect-box">
                    <div className="img-container" style={{ width: 'auto' }}>
                      <img
                        className="img-feature-proyect rounded"
                        src={project.imgs[0]}
                        alt={project.imgs[0]}
                        width={600}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div
                className={i % 2 === 0 ? 'proyect-info-right' : 'proyect-info-left'}
                style={{ backgroundImage: `url(${project.imgs[0]})` }}
              >
                <div className="proyect-box">
                  <h5 className={`proyect-name ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>{project.Title}</h5>

                  <div className="proyect-description-box">
                    <p className="mb-0">{project.Description}</p>
                  </div>
                  <ul className={`proyect-skills ${i % 2 === 0 ? 'justify-content-end' : 'justify-content-start'}`}>
                    {project.Technologies.map((technology) => (
                      <li key={technology} className="mx-2">
                        <span className="underline technology">{technology}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`proyect-links ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {project.ghLink && (
                      <a className="mx-3" style={{ color: 'inherit' }} href={project.ghLink} target="_blank">
                        <i className="ml-3 fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {i % 2 !== 0 && <Carousel images={project.imgs} alt={project.Title} />}

              {i % 2 !== 0 && (
                <div className="img-feature-proyect-container" data-aos="fade-up" data-aos-duration="1000">
                  <div className="img-feature-proyect-box">
                    <div className="img-container" style={{ width: 'auto' }}>
                      <img
                        className="img-feature-proyect rounded"
                        src={project.imgs[0]}
                        alt={project.imgs[0]}
                        width={600}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div></div>
        </div>
      </div>
    </section>
  )
}
