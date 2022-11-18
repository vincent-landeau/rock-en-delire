import { Link } from 'react-router-dom'

export default function Header() {
    return(
      <header>
        <div className="container header-container">
          <Link to="/rock-en-delire/">
            <img src={`${process.env.PUBLIC_URL}/img/logo-blanc.png`} className="header-logo" alt="logo" />
          </Link>
          <nav>
            <ul>
              <li><Link to="/rock-en-delire/programmation">Programmation</Link></li>
              <li><Link to="/rock-en-delire/boutique">Boutique</Link></li>
              <li><Link to="/rock-en-delire/infos-pratiques">Infos Pratiques</Link></li>
            </ul>
          </nav>
          <div className="reseaux">

            <img src={`${process.env.PUBLIC_URL}/img/bell.png`} alt="Cloche" />

            <a href="#" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/img/facebook.png`} alt="Facebook" />
            </a>

            <a href="#" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/img/twitter.png`} alt="Twitter" />
            </a>

            <a href="#" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/img/youtube.png`} alt="Youtube" />
            </a>

            <a href="#" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/img/instagram.png`} alt="Instagram" />
            </a>

          </div>
        </div>
      </header>
    );
}
