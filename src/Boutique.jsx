import React from "react";
import prog from "./programmation-data.jsx";

export default function Boutique() {
  return (
    <main className="padding-menu">
      <section className="boutique">
        <div className="container">
          <h1 className="uppercase">Boutique</h1>
          <div className="boutique-grid">
            <a href="#">
              <h3>Pass</h3>
              <h2>Vendredi</h2>
              <div class="tarif">55€</div>
            </a>
            <a href="#">
              <h3>Pass</h3>
              <h2>Samedi</h2>
              <div class="tarif">65€</div>
            </a>
            <a href="#">
              <h3>Pass</h3>
              <h2>Dimanche</h2>
              <div class="tarif">45€</div>
            </a>
            <a href="#">
              <h3>Pass</h3>
              <h2>Lundi</h2>
              <div class="tarif">35€</div>
            </a>
            <a href="#">
              <h3>Pass</h3>
              <h2>2 jours</h2>
              <div class="tarif">80€</div>
            </a>
            <a href="#">
              <h3>Pass</h3>
              <h2>3 jours</h2>
              <div class="tarif">120€</div>
            </a>
            <a href="#">
              <h3>Pass</h3>
              <h2>4 jours</h2>
              <div class="tarif">145€</div>
            </a>
            <a href="#">
              <h3>Pass</h3>
              <h2>VIP</h2>
              <div class="tarif">180€</div>
            </a>
          </div>
        </div>
      </section>
      <div className="main-bg"></div>
    </main>
  );
}
