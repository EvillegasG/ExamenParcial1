// Cambiar tema claro/oscuro
document.getElementById('tema-btn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Validar formulario
document.getElementById('registro-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const carrera = document.getElementById('carrera').value.trim();

  if (!nombre || !correo || !carrera) {
    alert("Por favor completa todos los campos.");
  } else {
    alert("Formulario enviado correctamente.");
    this.reset();
  }
});

// Cargar participantes desde la API
window.addEventListener('DOMContentLoaded', () => {
  fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => {
      const contenedor = document.getElementById('participantes');
      data.results.forEach(persona => {
        const div = document.createElement('div');
        div.classList.add('participante');
        div.innerHTML = `
          <img src="${persona.picture.medium}" alt="Foto de ${persona.name.first}" />
          <p>${persona.name.first} ${persona.name.last}</p>
        `;
        contenedor.appendChild(div);
      });
    });
});
