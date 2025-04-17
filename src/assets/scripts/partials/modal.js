export function modal() {
  const modal = document.getElementById('participanteModal');
  const modalLabel = document.getElementById('modalLabel');
  const modalImagen = document.getElementById('modalImagen');
  const modalDescripcion = document.getElementById('modalDescripcion');

  document.querySelectorAll('.participante').forEach(participante => {
    participante.addEventListener('click', () => {
      const nombre = participante.getAttribute('data-nombre');
      const imagen = participante.getAttribute('data-imagen');
      const descripcion = participante.getAttribute('data-descripcion');
      console.log('Imagen que se intenta cargar:', imagen);

      modalLabel.textContent = nombre;
      modalImagen.src = imagen;
      modalImagen.alt = nombre;
      modalDescripcion.innerHTML = descripcion;
    });
  });
}
