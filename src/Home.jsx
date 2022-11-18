import AwesomeSlider from 'react-awesome-slider';
import withAutoplay  from 'react-awesome-slider/dist/autoplay';
import AwesomeSliderStyles from 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';

const AutoplaySlider = withAutoplay(AwesomeSlider);


export default function Home() {
    return(
      <main>
        <section className="banner">
          <div className="container banner-container">
            <div className="banner-content">
              <span className="banner-title">Festival</span>
              <img src={`${process.env.PUBLIC_URL}/img/logo-blanc.png`} alt="logo" />
              <span className="banner-date">Du 17 au 20 juillet</span>
              <a className="banner-button" href="#">Réserver dès maintenant</a>
            </div>
          </div>
        </section>
        <section className="prog">
          <div className="p-relative">
            <h1 className="artistes">Artistes au programme</h1>
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false}
              interval={4000}
              cssModule={AwesomeSliderStyles}
            >
              <div data-src={`${process.env.PUBLIC_URL}/img/royal-blood.jpeg`} >
                <Link to={`${process.env.PUBLIC_URL}/dimanche/royal-blood`} className="aws-layer" />
              </div>
              <div data-src={`${process.env.PUBLIC_URL}/img/ratm.jpg`} >
                <Link to={`${process.env.PUBLIC_URL}/samedi/ratm`} className="aws-layer" />
              </div>
              <div data-src={`${process.env.PUBLIC_URL}/img/Foals-Alex-Knowles.png`} >
                <Link to={`${process.env.PUBLIC_URL}/samedi/foals`} className="aws-layer" />
              </div>
            </AutoplaySlider>
          </div>
        </section>
        <section className="billeterie">
          <div className="container">
            <h1>Billeterie</h1>
            <div className="pass">
              <h2>Pass 1 Jour</h2>
              <div className="tarif">35€</div>
              <a href="#" className="billeterie-btn">Acheter</a>
            </div>
            <div className="pass">
              <h2>Pass 4 Jours</h2>
              <div className="tarif">120€</div>
              <a href="#" className="billeterie-btn">Acheter</a>
            </div>
          </div>
        </section>
        <section className="preparation">
          <div className="container">
            <h1>Préparer votre festival</h1>
            <div className="prepa-item">
              <a href="" className="">
                <img src={`${process.env.PUBLIC_URL}/img/icon-preparation-1.png`} className=""/>
                <p>Venir au festival</p>
              </a>
            </div>
            <div className="prepa-item">
              <a href="" className="">
                <img src={`${process.env.PUBLIC_URL}/img/icon-preparation-2.png`} className=""/>
                <p>Dormir à proximité</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    );
}


// <AwesomeSlider>
//   <div data-src={testimg} />
//   <div data-src={testimg} />
//   <div data-src={testimg} />
// </AwesomeSlider>
