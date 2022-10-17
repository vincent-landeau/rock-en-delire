import React from 'react';

export default function InfosPratiques() {
    return(
      <main className="padding-menu">
        <section className="infos-pratiques">
          <div className="container">
            <h1 className="uppercase">Infos Pratiques</h1>
            <h2 className="uppercase">Plan D'accès</h2>
            <div className="plan">
              <div className="maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2279.318338756866!2d-1.5649540589878954!3d47.20520155662358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ec00ea1db5e1%3A0x7b126db0d224d153!2sSTEREOLUX!5e0!3m2!1sfr!2sfr!4v1620983493320!5m2!1sfr!2sfr" width="100%" height="100%" style={{"border": "none"}}></iframe>
              </div>
              <div className="acces">
                <div className="acces-row top">
                  <h4 className="acces-title">En voiture</h4>
                  <p className="acces-text">
                    Continuer sur Boulevard de la Prairie de Mauves. Prendre Boulevard de Seattle, Boulevard de Sarrebruck, Quai André Morice et Boulevard de la Prairie au Duc en direction de Boulevard Léon Bureau à Nantes.
                  </p>
                </div>
                <div className="acces-row">
                  <h4 className="acces-title">En train</h4>
                  <p className="acces-text">
                    La gare de Nantes est desservie par de nombreuses lignes (TGV et TER) et se situe à moins de 15min à pied du festival. Des navettes-bus gratuites entre la gare et le festival sont également mises en place pendant toute la durée du festival.                  </p>
                </div>
                <div className="acces-row">
                  <h4 className="acces-title">En bus</h4>
                  <p className="acces-text">
                    Avec l’autocar, Rock en délire est accesible facilement. Cette route passe par Paris - Nantes. Ce bus vous déposera à l’entrée principale de Rock en délire et passera plusieurs fois par heure.                  </p>
                </div>
                <div className="acces-row">
                  <h4 className="acces-title">En avion</h4>
                  <p className="acces-text">
                    Au départ de l'Aéroport Paris-Charles-de-Gaulle, des vols seront disponibles tout au long de la journée pour rejoindre Nantes et des navettes seront disponibles dès votre arrivée.                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="main-bg"></div>
      </main>
    )
}
