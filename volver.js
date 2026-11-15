// Volver (accesibilidad): en las páginas interiores, una flecha antes del nombre lleva a la página anterior;
// si se llegó desde fuera del sitio, lleva al inicio.
(() => {
  const h1 = document.querySelector('header h1');
  if (!h1 || /(^|\/)(index\.html)?$/.test(location.pathname)) return;
  const a = document.createElement('a');
  a.className = 'volver'; a.href = 'index.html'; a.textContent = '←';
  a.setAttribute('aria-label', 'Volver'); a.title = 'Volver';
  a.addEventListener('click', e => {
    if (document.referrer && new URL(document.referrer).origin === location.origin && history.length > 1) {
      e.preventDefault(); history.back();
    }
  });
  h1.prepend(a);
})();
