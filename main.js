const competences = document.getElementById("competences");

const services = [
    {
        image: "./images/PhotoPrincipal.png",
        icon: "fa-solid fa-box-open",
        titre: "Sourcing en Chine",
        paragraph: "Nous trouvons pour vous les meilleurs fournisseurs et produits en Chine."
    },
    {
        image: "./images/PhotoPrincipal.png",
        icon: "fa-solid fa-ship",
        titre: "Transport & Logistique",
        paragraph: "Des solutions de transport maritime et aérien fiables jusqu'au Sénégal."
    },
    {
        image: "./images/PhotoPrincipal.png",
        icon: "fa-solid fa-truck-fast",
        titre: "Suivi de commande",
        paragraph: "Un suivi rigoureux à chaque étape pour une livraison sans souci."
    },
    {
        image: "./images/PhotoPrincipal.png",
        icon: "fa-solid fa-file-contract",
        titre: "Dédouanement",
        paragraph: "Assistance et accompagnement pour un dédouanement rapide et conforme."
    },
    {
        image: "./images/PhotoPrincipal.png",
        icon: "fa-solid fa-headset",
        titre: "Conseil & Assistance",
        paragraph: "Nous vous conseillons et restons disponibles pour toutes vos préoccupations."
    },
    {
        image: "./images/PhotoPrincipal.png",
        icon: "fa-solid fa-globe",
        titre: "Import - Export",
        paragraph: "Gestion complète de vos opérations commerciales entre la Chine et le Sénégal."
    }
];

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

function observeReveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        revealObserver.observe(el);
    });
}

function renderServices() {
    if (!competences) return;

    competences.innerHTML = services.map(service => `
        <article class="skill reveal">
            <img src="${service.image}" alt="${service.titre}">
            <i class="${service.icon}"></i>
            <div class="texte">
                <h3>${service.titre}</h3>
                <p>${service.paragraph}</p>
            </div>
        </article>
    `).join("");

    observeReveal();
}

const header = document.getElementById("header");

function handleHeader() {
    if (!header) return;
    header.classList.toggle("sticky", window.scrollY > 40);
}

window.addEventListener("scroll", handleHeader);
handleHeader();

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            nav.classList.remove("open");
        });
    });
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a[href^='#']");

function updateActiveLink() {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );
    });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.dataset.target;
                const suffix = target === 98 ? "%" : "+";
                let current = 0;

                const step = Math.max(1, Math.ceil(target / 120));

                const update = () => {
                    current += step;

                    if (current >= target) {
                        counter.textContent = `${target}${suffix}`;
                    } else {
                        counter.textContent = `${current}${suffix}`;
                        requestAnimationFrame(update);
                    }
                };

                update();
                counterObserver.unobserve(counter);
            }
        });
    },
    {
        threshold: 0.6
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});

const backToTop = document.getElementById("backToTop");

function toggleBackToTop() {
    if (!backToTop) return;

    backToTop.classList.toggle("show", window.scrollY > 300);
}

window.addEventListener("scroll", toggleBackToTop);
toggleBackToTop();

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

const homeSection = document.querySelector(".home");

window.addEventListener("scroll", () => {
    if (!homeSection) return;

    const offset = window.scrollY * 0.2;

    homeSection.style.backgroundPosition =
        `center calc(50% + ${offset}px)`;
});

renderServices();