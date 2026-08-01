// Shared components injected into the single-page site
const NAV_HTML = `
<nav class="nav">
  <div class="container nav__inner">
    <a href="#top" class="nav__logo">И<span>Точка перехода</span></a>
    <ul class="nav__links" id="navLinks">
      <li><a href="#tracks">Треки</a></li>
      <li><a href="#methodology">Методология</a></li>
      <li><a href="#pricing">Цены</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="https://t.me/YOUR_TELEGRAM" class="nav__cta">Записаться</a></li>
    </ul>
    <button class="nav__burger" id="burger" aria-label="Меню">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__inner">
      <div class="footer__brand">
        <div class="footer__name">И<span>Точка перехода</span></div>
        <p class="footer__tagline">Ясность вместо готовых ответов</p>
      </div>
      <div class="footer__col">
        <h4>Навигация</h4>
        <ul>
          <li><a href="#tracks">Треки</a></li>
          <li><a href="#methodology">Методология</a></li>
          <li><a href="#pricing">Цены</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Документы</h4>
        <ul>
          <li><a href="pages/oferta.html">Публичная оферта</a></li>
          <li><a href="pages/privacy.html">Политика конфиденциальности</a></li>
          <li><a href="pages/consent.html">Согласие на обработку ПД</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span class="footer__copy">© 2026 Точка перехода. Коучинг и консультирование.</span>
      <a href="https://t.me/YOUR_TELEGRAM" style="font-size:0.85rem;color:#7A7068;">Написать в Telegram →</a>
    </div>
  </div>
</footer>`;

// Inject nav and footer
document.getElementById('nav-placeholder').innerHTML = NAV_HTML;
document.getElementById('footer-placeholder').innerHTML = FOOTER_HTML;

// Burger menu toggle
document.addEventListener('click', e => {
  const burger = e.target.closest('#burger');
  if (burger) {
    document.getElementById('navLinks').classList.toggle('open');
  }
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(open => {
      open.classList.remove('open');
      open.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!wasOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
