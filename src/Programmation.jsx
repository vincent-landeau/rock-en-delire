import React from 'react';
import prog from './programmation-data.jsx';
import { Link } from 'react-router-dom';

export default function Programmation() {
  let programmation = [];
    let i = 1;
    for (const [key, value] of Object.entries(prog)) {
      let artistes = Object.entries(value).map((artiste) =>
        <Link to={`${key}/${artiste[0]}`} className="row-prog"><h3>{artiste[1]['title']}</h3><span>{artiste[1]['time']}</span></Link>
      );
      programmation.push(<div className="day-prog"><div className="day-prog-title"><span>jour n°{i}</span><h2>{key}</h2></div>{artistes}</div>);
      i++;
    }

    return(
      <main className="padding-menu">
        <section className="programmation">
          <div className="container artiste-container">
            <h1 className="uppercase">Programmation</h1>
            <div className="tab-prog">
              {programmation}
            </div>
          </div>
        </section>
        <div className="main-bg"></div>
      </main>
    )
}
