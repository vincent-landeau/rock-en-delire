var today = new Date();
const year = today.getFullYear();

export default function Footer() {
    return(
      <footer>
        <div className="container">
          <div className="reseaux">
            <a href="">
              <img src="/img/facebook-white-round.png"/>
            </a>
            <a href="">
              <img src="/img/intagram-white-round.png"/>
            </a>
            <a href="">
              <img src="/img/youtube-white-round.png"/>
            </a>
            <a href="">
              <img src="/img/twitter-white-round.png"/>
            </a>
          </div>
          <div className="menu">
            <a href="">Programmation</a>
            <a href="">Boutique</a>
            <a href="">Infos Pratique</a>
          </div>
          <div className="infos-site">
            <div className="copyright">
              Copyright ©{year} Tous droits réservés | Ce site a été conçu par <a href="https://www.vincent-landeau.fr" target="_blank">Vincent Landeau</a>
            </div>
            <div className="rgpd">
              <a href="">Mentions Légales </a>
              -
              <a href=""> Conditions Générales d'utilisation</a>
            </div>
          </div>
        </div>
      </footer>
    );
}
