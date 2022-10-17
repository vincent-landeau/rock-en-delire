import React from 'react';
import prog from './programmation-data.jsx';

export default function Boutique() {
    return(
      <main className="padding-menu">
        <section className="boutique">
          <div className="container">
            <h1 className="uppercase">Programmation</h1>
            <div className="tab-pass">
              <a href="/boutique" class="pass">
                <span class="sub-title uppercase">pass</span>
                <h3 className="title uppercase">Vendredi</h3>
                <span className="price">45€</span>
              </a>
              <a href="/boutique" class="pass">
                <span class="sub-title uppercase">pass</span>
                <h3 className="title uppercase">Samedi</h3>
                <span className="price">65€</span>
              </a>
              <a href="/boutique" class="pass">
                <span class="sub-title uppercase">pass</span>
                <h3 className="title uppercase">Dimanche</h3>
                <span className="price">50€</span>
              </a>
              <a href="/boutique" class="pass">
                <span class="sub-title uppercase">pass</span>
                <h3 className="title uppercase">Lundi</h3>
                <span className="price">35€</span>
              </a>
              <a href="/boutique" class="pass">
                <span class="sub-title uppercase">pass</span>
                <h3 className="title uppercase">2 Jours</h3>
                <span className="price">80€</span>
              </a>
              <a href="/boutique" class="pass">
                <span class="sub-title uppercase">pass</span>
                <h3 className="title uppercase">3 Jours</h3>
                <span className="price">120€</span>
              </a>
              <a href="/boutique" class="pass">
                <span class="sub-title uppercase">pass</span>
                <h3 className="title uppercase">4 Jours</h3>
                <span className="price">145€</span>
              </a>
            </div>
          </div>
        </section>
        <div className="main-bg"></div>
      </main>
    )
}
