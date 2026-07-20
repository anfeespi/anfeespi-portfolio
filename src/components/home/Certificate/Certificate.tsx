import './certificate.scss'

const certificates = [
  {
    Title: 'Certified Backend Developer - Java & Spring Framework',
    Organization: ['Alura Latam + Oracle'],
    image: 'assets/images/certificates/OracleBackend.png'
  },
  {
    Title: 'Google Cybersecurity Foundations',
    Organization: ['Coursera + Google'],
    image: 'assets/images/certificates/GoogleCybersecurityFoundations.png'
  },
  {
    Title: 'Google Prompting Essentials',
    Organization: ['Coursera + Google'],
    image: 'assets/images/certificates/GooglePromptingEssentials.png'
  },
  {
    Title: 'Certificate of Achievement ICPC South America North Finals 2025 - 43rd Place',
    Organization: ['ICPC'],
    image: 'assets/images/certificates/2025-SA-North.png'
  },
  {
    Title: 'Certificate of participation ICPC Colombia 2025 - 35th Place',
    Organization: ['ICPC'],
    image: 'assets/images/certificates/2025-Place.png'
  },
  {
    Title: 'Certificate of participation ICPC Colombia 2024',
    Organization: ['ICPC'],
    image: 'assets/images/certificates/2024-Honorable.png'
  },
  {
    Title: 'Certificate of participation ICPC Colombia 2023',
    Organization: ['ICPC'],
    image: 'assets/images/certificates/2023-Honorable.png'
  },
  {
    Title: 'Certificate of participation ICPC Colombia 2022',
    Organization: ['ICPC'],
    image: 'assets/images/certificates/2022-Honorable.png'
  },
  {
    Title: 'Certificate of participation Google Kickstart',
    Organization: ['Google'],
    image: 'assets/images/certificates/Kickstart2022.png'
  }
]

export default function Certificate() {
  return (
    <section className="section certificate" id="certificates">
      <div className="container">
        <div className="section-box">
          <div className="">
            <h3 className="section-title">
              <span className="n-section-title">04.</span> Certificates
            </h3>
          </div>
          <div className="mt-5">
            <div className="row p-0">
              {certificates.map((cert) => (
                <div
                  key={cert.Title}
                  className="col-12 col-md-6 col-lg-6 col-xl-4 proyect-col"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="more-proyect-box">
                    <div className="row w-100 text-left m-0 p-0">
                      <div className="col-6 p-0">
                        <img src="assets/images/folder.svg" width="40" />
                      </div>

                      <h5 className="other-proyect-title mt-4">{cert.Title}</h5>
                    </div>
                    <div className="d-flex items-center justify-center">
                      <img className="certificate-img" width="100%" src={cert.image} alt={cert.Title} />
                    </div>
                    <div>
                      <ul className="more-proyects-skills">
                        {cert.Organization.map((o) => (
                          <li key={o}>
                            <span className="underline">{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
