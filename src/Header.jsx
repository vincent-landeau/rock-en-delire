
export default function Header() {
    return(
      <header>
        <div className="container header-container">
          <a href="/">
            <img src="/img/logo-blanc.png" className="header-logo" alt="logo" />
          </a>
          <nav>
            <ul>
              <li><a href="/programmation">Programmation</a></li>
              <li><a href="/boutique">Boutique</a></li>
              <li><a href="/infos-pratiques">Infos Pratiques</a></li>
            </ul>
          </nav>
          <div className="reseaux">

            <img src="/img/bell.png" alt="Cloche" />

            <a href="#" target="_blank">
              <img src="/img/facebook.png" alt="Facebook" />
            </a>

            <a href="#" target="_blank">
              <img src="/img/twitter.png" alt="Twitter" />
            </a>

            <a href="#" target="_blank">
              <img src="/img/youtube.png" alt="Youtube" />
            </a>

            <a href="#" target="_blank">
              <img src="/img/instagram.png" alt="Instagram" />
            </a>

          </div>
        </div>
      </header>
    );
}
