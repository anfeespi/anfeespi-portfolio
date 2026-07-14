import { useEffect, useState } from 'react'
import { sendAnalyticEvent } from '../../../services/analytics'
import './header.scss'

const cvName = 'anfeespi-cv.pdf'

const menuItems = [
  { number: '01. ', label: 'About me', target: 'about', event: 'click_about' },
  { number: '02. ', label: 'Experience & Education', target: 'jobs', event: 'click_experience' },
  { number: '03. ', label: 'Projects', target: 'proyects', event: 'click_jobs' },
  { number: '04. ', label: 'Certificates', target: 'certificates', event: 'click_certificate' },
  { number: '05. ', label: 'Contact', target: 'contact', event: 'click_contact' }
]

export default function Header() {
  const [responsiveMenuVisible, setResponsiveMenuVisible] = useState(false)
  const [pageYPosition, setPageYPosition] = useState(0)

  useEffect(() => {
    const getScrollPosition = () => setPageYPosition(window.pageYOffset)
    window.addEventListener('scroll', getScrollPosition)
    return () => window.removeEventListener('scroll', getScrollPosition)
  }, [])

  const scroll = (el: string) => {
    const element = document.getElementById(el)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setResponsiveMenuVisible(false)
  }

  const downloadCV = () => {
    // app url
    const url = window.location.href
    // Open a new window with the CV
    window.open(url + '/../assets/cv/' + cvName, '_blank')
  }

  return (
    <nav className={`navbar main-navbar on-top animate-menu${pageYPosition > 0 ? ' nav-shadow' : ''}`}>
      <div className="container">
        <a className="navbar-brand text-light" href="/">
          <img src="assets/images/me/logo-nobg.png" width="45" />
        </a>
        <ul className="menu-ul nav">
          {menuItems.map((item) => (
            <li
              key={item.target}
              className="nav-item"
              onClick={() => sendAnalyticEvent(item.event, 'menu', 'click')}
            >
              <a className="nav-link" onClick={() => scroll(item.target)}>
                <span className="nav-number">{item.number}</span>{' '}
                <span className="underline nav-text">{item.label}</span>
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a onClick={downloadCV} className="nav-link main-btn cv-btn">
              C.V
            </a>
          </li>
        </ul>
        <div className="menu-wrapper">
          <div
            className={`hamburger-menu${responsiveMenuVisible ? ' animate' : ''}`}
            onClick={() => setResponsiveMenuVisible(!responsiveMenuVisible)}
          ></div>
        </div>
        <div
          className="menu-responsive"
          style={{ pointerEvents: !responsiveMenuVisible ? 'none' : undefined }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setResponsiveMenuVisible(false)
            }
          }}
        >
          <aside
            className={`on-top${responsiveMenuVisible ? ' aside-show' : ''}${pageYPosition > 0 ? ' nav-shadow' : ''}`}
          >
            <nav>
              <ol>
                <li>
                  <a onClick={() => scroll('about')}>
                    <span>01. </span> About me
                  </a>
                </li>
                <li>
                  <a onClick={() => scroll('jobs')}>
                    <span>02. </span> Experience
                  </a>
                </li>
                <li>
                  <a onClick={() => scroll('proyects')}>
                    <span>03. </span> Projects
                  </a>
                </li>
                <li>
                  <a onClick={() => scroll('contact')}>
                    <span>04. </span> Contact
                  </a>
                </li>
                <li>
                  <a onClick={downloadCV} className="main-btn cv-btn">
                    C.V
                  </a>
                </li>
              </ol>
            </nav>
          </aside>
        </div>
      </div>
    </nav>
  )
}
