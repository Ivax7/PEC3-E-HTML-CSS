/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


// NAV FUNCIONALIDAD



// LIKE / DISLIKE FUNCIONALIDAD
import { likesSystem } from './partials/likes';
likesSystem();

// ALERT FUNCIONALIDAD

import { alertMessage } from './partials/alert';
setTimeout(() => {
  alertMessage();
}, 2500);






// NAV FUNCIONALIDAD
document.addEventListener('DOMContentLoaded', function() {

  $navItems = document.querySelectorAll('.navegacion__item');
  $sectionContent = document.querySelector('.plato-info');
  
  // Duplicamos el html por defecto
  const historiaHTML = $sectionContent.innerHTML;
  
  // Creamos el html de las especificaciones de la receta
  const recetaHTML = `
  <article class="plato__detalle plato__detalle--receta">
  <h2 class="plato__titulo">Recepta de Botifarra amb Seques</h2>
  <h3>Ingredients</h3>
  <ul class="justificado">
  <li>🥩 2 botifarres</li>
  <li>🥔 200g de mongetes blanques</li>
  <li>🧄 2 grans d’all</li>
  <li>🪔 Oli d’oliva verge extra</li>
  <li>🧂 Sal i pebre al gust</li>
  </ul>
  
  <h3 class="">Passos</h3>
  <ol class="justificado">
  <li>🔸 Coure les mongetes fins que estiguin tendres.</li>
  <li>🔸 En una paella amb oli, saltar l’all picat.</li>
  <li>🔸 Afegir les mongetes i daurar-les lleugerament.</li>
  <li>🔸 Cuinar la botifarra a la graella fins que estigui daurada.</li>
  <li>🔸 Servir-ho tot junt i gaudir! 😋</li>
  </ol>
  </article>
  `
  // Creamos el html de los restaurantes
  const restaurantesHTML = `
  <article class="plato__detalle plato__detalle--restaurantes">
  <h2 class="plato__titulo">Restaurants on Menjar Botifarra amb Seques</h2>
  <p class="restaurantes__intro">Si busques els millors llocs per gaudir d'una autèntica botifarra amb seques, aquí tens algunes recomanacions:</p>
  
  <ul class="restaurantes__lista justificado">
  <li>
  <h3>📍 Can Culleretes (Barcelona)</h3>
  <p>Un dels restaurants més antics de Barcelona, conegut per la seva cuina catalana tradicional.</p>
  </li>
  <li>
  <h3>📍 Cal Pep (Palafrugell)</h3>
  <p>Famosos per la seva botifarra a la brasa amb seques i altres plats de la gastronomia local.</p>
  </li>
  <li>
  <h3>📍 Els 4 Gats (Barcelona)</h3>
  <p>Un clàssic que ofereix una versió deliciosa d'aquest plat emblemàtic.</p>
  </li>
  <li>
  <h3>📍 Masia Can Vinyers (Terrassa)</h3>
  <p>Gaudeix d'una experiència rústica i autèntica amb ingredients de proximitat.</p>
  </li>
  <li>
  <h3>📍 Restaurant La Masia (Girona)</h3>
  <p>Especialitzat en brasa i plats tradicionals catalans.</p>
  </li>
  </ul>
  
  <p class="restaurantes__nota">🔎 Tots aquests llocs ofereixen una experiència gastronòmica única. Reserva amb antelació per assegurar taula!</p>
  </article>
  `
  
$navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Eliminar la clase 'active' de todos los elementos de navegación
      $navItems.forEach((navItem) => {
        navItem.classList.remove("active");
      });
      
      // Añadir la clase 'active' al item que ha sido clickeado
      item.classList.add("active");
      
      // Cargar contenido según el item seleccionado
      if (item.textContent.trim() === "Recepta") {
        $sectionContent.innerHTML = recetaHTML;
      } else if(item.textContent.trim() === "Restaurants") {
        $sectionContent.innerHTML = restaurantesHTML;
      } else if (item.textContent.trim() === "Història") {
        $sectionContent.innerHTML = historiaHTML;
      }
    });
  });


});
