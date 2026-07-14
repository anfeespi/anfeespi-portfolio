import './footer.scss'

export default function Footer() {
  return (
    <footer>
      <div className="animate-footer">
        <ul className="footer-left-bar d-none d-md-block">
          <li>
            <a href="https://github.com/anfeespi" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anfeespi" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
        <div className="footer-right-bar d-none d-md-block">
          <a href="mailto:andres.espitia.afer@gmail.com" target="_blank">
            andres.espitia.afer@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-credits text-center">
        <a href="https://github.com/anfeespi" target="_blank" rel="nofollow noopener noreferrer">
          <div>Built with React by Andrés Espitia</div>
        </a>
      </div>
    </footer>
  )
}
