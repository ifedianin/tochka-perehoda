// Shared components injected into every page (index.html and pages/*.html)

// Detect whether we're on a subpage (pages/*.html) so links resolve correctly either way
const BASE = window.location.pathname.includes('/pages/') ? '../' : '';

const NAV_HTML = `
<nav class="nav">
  <div class="container nav__inner">
    <a href="${BASE}index.html#top" class="nav__logo">И<span>Точка перехода</span></a>
    <ul class="nav__links" id="navLinks">
      <li><a href="${BASE}index.html#tracks">Треки</a></li>
      <li><a href="${BASE}index.html#methodology">Методология</a></li>
      <li><a href="${BASE}index.html#pricing">Цены</a></li>
      <li><a href="${BASE}index.html#faq">FAQ</a></li>
      <li><a href="https://t.me/tochka_perehoda_coach" class="nav__cta">Записаться</a></li>
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
          <li><a href="${BASE}index.html#tracks">Треки</a></li>
          <li><a href="${BASE}index.html#methodology">Методология</a></li>
          <li><a href="${BASE}index.html#pricing">Цены</a></li>
          <li><a href="${BASE}index.html#faq">FAQ</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Документы</h4>
        <ul>
          <li><a href="${BASE}pages/oferta.html">Публичная оферта</a></li>
          <li><a href="${BASE}pages/privacy.html">Политика конфиденциальности</a></li>
          <li><a href="${BASE}pages/consent.html">Согласие на обработку ПД</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span class="footer__copy">© 2026 Точка перехода. Коучинг и консультирование.</span>
      <a href="https://t.me/tochka_perehoda_coach" style="font-size:0.85rem;color:#7A7068;">Написать в Telegram →</a>
    </div>
  </div>
</footer>`;

const COOKIE_BANNER_HTML = `
<div class="cookie-banner" id="cookieBanner">
  <div class="cookie-banner__inner">
    <p>Сайт использует файлы cookie для аналитики и корректной работы. Продолжая пользоваться сайтом, вы соглашаетесь с этим. Подробнее — в <a href="${BASE}pages/privacy.html">Политике конфиденциальности</a>.</p>
    <div class="cookie-banner__actions">
      <button class="btn btn-primary" id="cookieAccept">Принять</button>
    </div>
  </div>
</div>`;

// Inject nav, footer, cookie banner
document.getElementById('nav-placeholder').insertAdjacentHTML('beforeend', NAV_HTML);
document.getElementById('footer-placeholder').insertAdjacentHTML('beforeend', FOOTER_HTML);
document.body.insertAdjacentHTML('beforeend', COOKIE_BANNER_HTML);

// Burger menu toggle
document.addEventListener('click', e => {
  const burger = e.target.closest('#burger');
  if (burger) {
    document.getElementById('navLinks').classList.toggle('open');
  }
});

// FAQ accordion (only present on index.html, harmless elsewhere)
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

// Cookie consent banner
(function () {
  const KEY = 'tp_cookie_consent';
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  if (!localStorage.getItem(KEY)) {
    requestAnimationFrame(() => banner.classList.add('visible'));
  }
  document.getElementById('cookieAccept').addEventListener('click', () => {
    localStorage.setItem(KEY, '1');
    banner.classList.remove('visible');
  });
})();
