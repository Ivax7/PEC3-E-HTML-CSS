/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import Swal from 'sweetalert2';

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


// LIKE / DISLIKE FUNCIONALIDAD

const buttons = document.querySelectorAll(".likes__button");
let selectedButton = null; // Almacena el botón seleccionado

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Cantidad de likes/dislikes
    const countSpan = button.querySelector(".likes__count");
    let currentCount = parseInt(countSpan.textContent);

    if (selectedButton === button) {
      // Si el usuario hace clic en el mismo botón, se deselecciona
      button.classList.remove("selected");
      countSpan.textContent = currentCount - 1;
      selectedButton = null;
    } else {
      // Si ya había seleccionado otro botón, lo deselecciona y resta el contador
      if (selectedButton) { // Comprobamos que no sea null
        const prevCountSpan = selectedButton.querySelector(".likes__count");
        prevCountSpan.textContent = parseInt(prevCountSpan.textContent) - 1;
        selectedButton.classList.remove("selected");
      }

      // Selecciona el nuevo botón y aumenta el contador
      button.classList.add("selected");
      countSpan.textContent = currentCount + 1;
      selectedButton = button;
    }
  });
});


// ALERT FUNCIONALIDAD
// Swal.fire('¡Hola!', 'Esto es una alerta con SweetAlert2', 'success');




// NAV FUNCIONALIDAD

$navItems = document.querySelectorAll('.navegacion__item');
$sectionContent = document.querySelector('.plato-info');

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
      loadContent('receta.html');
    } else if (item.textContent.trim() === "Historia") {
      loadContent('historia.html');
    }
  });
});

// Función para cargar contenido desde un archivo HTML
function loadContent(file) {
  fetch(`../views/${file}`)
    .then(response => response.text())  // Obtener el contenido como texto
    .then(html => {
      console.log(html)
      $sectionContent.innerHTML = html;  // Inyectar el contenido en la sección
    })
    .catch(err => {
      console.warn('Error cargando el archivo HTML:', err);
      $sectionContent.innerHTML = "<p>Error al cargar el contenido.</p>";
    });
}
