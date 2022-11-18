import {Link} from "react-router-dom";

var today = new Date();
const year = today.getFullYear();

export default function Footer() {
    return(
      <footer>
        <div className="container">
          <div className="reseaux">
            <a href="">
              <img src={`${process.env.PUBLIC_URL}/img/facebook-white-round.png`}/>
            </a>
            <a href="">
              <img src={`${process.env.PUBLIC_URL}/img/intagram-white-round.png`}/>
            </a>
            <a href="">
              <img src={`${process.env.PUBLIC_URL}/img/youtube-white-round.png`}/>
            </a>
            <a href="">
              <img src={`${process.env.PUBLIC_URL}/img/twitter-white-round.png`}/>
            </a>
          </div>
          <div className="menu">
            <Link to="/rock-en-delire/programmation">Programmation</Link>
            <Link to="/rock-en-delire/boutique">Boutique</Link>
            <Link to="/rock-en-delire/infos-pratiques">Infos Pratique</Link>
          </div>
          <div className="infos-site">
            <div className="copyright">
              Copyright ©{year} Tous droits réservés | Ce site a été conçu par <a href="https://vincent-landeau.github.io/" target="_blank">Vincent Landeau</a>
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
