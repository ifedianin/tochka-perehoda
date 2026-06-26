// Shared components injected on every page
const NAV_HTML = `
<nav class="nav">
  <div class="container nav__inner">
    <a href="/index.html" class="nav__logo">И<span>горь</span></a>
    <ul class="nav__links" id="navLinks">
      <li><a href="/index.html">Главная</a></li>
      <li><a href="/pages/about.html">Обо мне</a></li>
      <li><a href="/pages/services.html">Услуги</a></li>
      <li><a href="/pages/blog.html">Блог</a></li>
      <li><a href="/pages/contact.html" class="nav__cta">Записаться</a></li>
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
        <div class="footer__name">И<span>горь</span></div>
        <p class="footer__tagline">Ясность там, где логика не помогает</p>
      </div>
      <div class="footer__col">
        <h4>Навигация</h4>
        <ul>
          <li><a href="/index.html">Главная</a></li>
          <li><a href="/pages/about.html">Обо мне</a></li>
          <li><a href="/pages/services.html">Услуги</a></li>
          <li><a href="/pages/blog.html">Блог и видео</a></li>
          <li><a href="/pages/contact.html">Контакт</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Инструменты</h4>
        <ul>
          <li><a href="/pages/services.html">Таро</a></li>
          <li><a href="/pages/services.html">Ленорман</a></li>
          <li><a href="/pages/services.html">Руны</a></li>
          <li><a href="/pages/services.html">Игра Лила</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span class="footer__copy">© 2026 Игорь. Лайф-коучинг · Консультирование · Менторство</span>
      <a href="/pages/contact.html" style="font-size:0.85rem;color:#7A7068;">Написать в Telegram →</a>
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

// Mark active nav link
const path = window.location.pathname;
document.querySelectorAll('.nav__links a').forEach(a => {
  if (a.getAttribute('href') === path || (path.endsWith('index.html') && a.getAttribute('href') === '/index.html')) {
    a.classList.add('active');
  }
});
