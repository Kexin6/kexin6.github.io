document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('nav-ready');

    const toggle = document.querySelector('.nav-toggle');
    const navigation = document.querySelector('.site-nav');
    const links = [...document.querySelectorAll('.nav-link')];
    const sections = links
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    const closeNavigation = () => {
        toggle.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('open');
    };

    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        navigation.classList.toggle('open', !expanded);
    });

    links.forEach((link) => link.addEventListener('click', closeNavigation));

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeNavigation();
    });

    const observer = new IntersectionObserver((entries) => {
        const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        links.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${visible.target.id}`;
            link.classList.toggle('active', isActive);
            if (isActive) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
        });
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.1, 0.5] });

    sections.forEach((section) => observer.observe(section));
});
