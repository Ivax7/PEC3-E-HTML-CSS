export function likesSystem() {
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
}