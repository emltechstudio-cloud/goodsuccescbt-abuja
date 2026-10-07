document.head.insertAdjacentHTML('beforeend', `<style>.whatsapp-fab svg{width:20px;height:20px;fill:currentColor}.social-link{display:inline-flex;align-items:center;gap:7px;margin:0}.social-link svg{width:15px;height:15px;fill:var(--cyan)}.image-cards .service-card{padding:0;overflow:hidden}.image-cards .service-card>img{aspect-ratio:1.75;object-fit:cover}.image-cards .card-content{padding:25px 28px 30px}.image-cards .card-content h3{margin:20px 0 10px}.proprietor{border-left:3px solid var(--yellow);margin-top:28px;padding:4px 0 4px 16px}.proprietor strong,.proprietor span{display:block}.proprietor strong{font:700 19px var(--display)}.proprietor span{margin-top:3px;font-size:13px;color:var(--muted)}.logo-list a{display:flex;align-items:center;gap:10px;border:1px solid #496267;padding:12px 15px;font:700 14px var(--display);letter-spacing:.04em;transition:border-color .2s,background .2s}.logo-list a:hover{border-color:var(--yellow);background:rgba(255,255,255,.07)}.logo-list img{width:27px;height:27px;border-radius:4px;background:white;padding:2px}</style>`);
document.head.insertAdjacentHTML('beforeend', `<style>.brand{gap:0}.brand-words{display:inline-flex;align-items:center;flex-wrap:wrap;line-height:1}.brand .brand-mark{display:inline-grid;vertical-align:middle;width:34px;height:34px;margin:0 4px;overflow:hidden;background:none;border-radius:9px}.brand .brand-mark img{width:100%;height:100%;object-fit:cover}.brand-words small{flex-basis:100%;margin-top:5px}.footer-brand .brand-mark{width:36px;height:36px}</style>`);
document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });

const whatsappIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.96c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.93 11.93 0 0 0 5.8 1.48h.01c6.59 0 11.95-5.36 11.95-11.96 0-3.19-1.24-6.2-3.51-8.38Zm-8.45 18.31h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.86 9.86 0 0 1-1.52-5.24c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.91a9.82 9.82 0 0 1 2.9 6.98c0 5.46-4.44 9.9-9.9 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-1.76-.88-2.91-1.57-4.07-3.55-.3-.51.3-.47.86-1.56.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.49 1.08 2.89 1.23 3.09c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg>';
const facebookIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.54-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.94-1.97 1.9v2.25h3.35l-.54 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z"/></svg>';
document.querySelectorAll('.whatsapp-fab').forEach((link) => { link.innerHTML = `${whatsappIcon}<span>WhatsApp</span>`; });
document.querySelectorAll('.footer-bottom').forEach((footer) => { footer.insertAdjacentHTML('beforeend', `<a class="social-link" href="#" aria-label="Facebook link placeholder">${facebookIcon}<span>Facebook</span></a>`); });
document.querySelectorAll('body *').forEach((element) => { if (element.children.length === 0 && element.textContent.includes('Garki branch')) element.textContent = element.textContent.replace('Garki branch', 'Garki Centre'); });

document.querySelectorAll('.brand').forEach((brand) => {
  const mark = brand.querySelector('.brand-mark');
  const words = brand.querySelector('span:not(.brand-mark)');
  const descriptor = words?.querySelector('small');
  if (!mark || !words || !descriptor) return;
  mark.innerHTML = '<img src="assets/good-success-logo-primary.svg" alt="Good Success OO logo">';
  words.firstChild.textContent = 'G';
  words.insertBefore(mark, descriptor);
  words.insertBefore(document.createTextNode('D SUCCESS'), descriptor);
  words.classList.add('brand-words');
});

const garkiTitle = [...document.querySelectorAll('.location-card h2')].find((heading) => heading.textContent.trim() === 'Area 3, Garki');
if (garkiTitle) {
  const garkiCard = garkiTitle.closest('.location-card');
  garkiCard.querySelector('p').textContent = 'Located at No. 3 Orlu Street, Area 3, Garki, adjacent FCT Secondary Education Board.';
  garkiCard.querySelector('address').innerHTML = 'No. 3 Orlu Street,<br>Area 3, Garki,<br>adjacent FCT Secondary Education Board, Abuja.';
  const mapNote = garkiCard.querySelector('.map-note');
  if (mapNote) mapNote.textContent = 'Google Maps link to be added once the Garki Centre listing is confirmed.';
}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open);
    menuButton.textContent = open ? 'Close' : 'Menu';
  });
}

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = `Hello Good Success,%0A%0AName: ${encodeURIComponent(data.get('name'))}%0APhone: ${encodeURIComponent(data.get('phone'))}%0AService: ${encodeURIComponent(data.get('service'))}%0AMessage: ${encodeURIComponent(data.get('message') || 'Not provided')}`;
    window.open(`https://wa.me/2348066483884?text=${message}`, '_blank', 'noopener');
  });
}
