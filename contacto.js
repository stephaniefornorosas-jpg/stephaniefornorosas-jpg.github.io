// Contacto sin depender de un programa de correo: el primer clic muestra y copia el correo;
// el segundo abre el correo si el equipo tiene uno configurado.
document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
  a.addEventListener('click', e => {
    if (a.dataset.abierto) return;
    e.preventDefault(); a.dataset.abierto = '1';
    const d = a.getAttribute('href').slice(7).split('?')[0];
    a.textContent = d + ' · copiado';
    try { navigator.clipboard.writeText(d); } catch (_) {}
  });
});
