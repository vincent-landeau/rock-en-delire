import {useParams} from "react-router-dom";
import prog from './programmation-data.jsx';

export default function Artiste() {
  let {name} = useParams();
  let {day} = useParams();

  var artiste = prog[day][name];
  console.log(artiste);
  return(
    <main className="padding-menu">
      <section className="artiste">
        <div className="container artiste-container">
          <div className="artiste grid-container">
            <div className="artiste-text">
              <h1 className="artiste-title">{artiste['title']}</h1>
              <p className="artiste-description">{artiste['description']}</p>
              <a href="#" class="artiste-btn">Réserver mon billet</a>
            </div>
            <div className="artiste-image">
              <div style={{"backgroundImage":"radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url("+artiste['url-image']+")"}}></div>
            </div>
            <div className="artiste-video">
              <iframe src={"https://www.youtube.com/embed/"+artiste['id-video']} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
      <div className="main-bg"></div>
    </main>
  );
}
