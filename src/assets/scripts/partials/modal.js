import speaker1 from '../../images/speaker1.jpeg';
import speaker2 from '../../images/speaker2.jpg';
import speaker3 from '../../images/speaker3.jpg';
import speaker4 from '../../images/speaker4.jpg';
import speaker5 from '../../images/speaker5.jpg';
import speaker6 from '../../images/speaker6.jpg';

const imagenes = {
  'Jorge Martínez': speaker1,
  'Laura Gómez': speaker2,
  'Ana Ruiz': speaker3,
  'Pedro López': speaker4,
  'Carla Fernández': speaker5,
  'David Romero': speaker6,
};

export function modal() {
  const modal = document.getElementById('participanteModal');
  const modalLabel = document.getElementById('modalLabel');
  const modalImagen = document.getElementById('modalImagen');
  const modalDescripcion = document.getElementById('modalDescripcion');

  const cerrarBtn = document.getElementById('cerrarModal');

  document.querySelectorAll('.participantes__item').forEach(participante => {
    participante.addEventListener('click', () => {
      const nombre = participante.getAttribute('data-nombre');
      const descripcion = participante.getAttribute('data-descripcion');

      modalLabel.textContent = nombre;
      modalImagen.src = imagenes[nombre] || '';
      modalImagen.alt = nombre;
      modalDescripcion.innerHTML = descripcion;

      modal.classList.remove('hidden');
    });
  });

  cerrarBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
}
