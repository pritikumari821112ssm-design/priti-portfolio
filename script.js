/* =========================================================
   PRITI KUMARI | DATA ANALYTICS PORTFOLIO
   Professional Interactive JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE NAVIGATION ================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");

            const isOpen = navMenu.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        });

        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* ================= SMOOTH SCROLL ================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* ================= ACTIVE NAVIGATION ================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(
        '.navbar nav a[href^="#"]'
    );

    const updateActiveNavigation = () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                currentSection &&
                link.getAttribute("href") === `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });
    };

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(
        ".section, .timeline-item, .skill-card, .project-card, " +
        ".certificate-card, .profile-card, .experience-card, " +
        ".achievement-card, .resume-card, .stat-card"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealElements.forEach(element => {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* ================= EXTERNAL LINKS ================= */

    document.querySelectorAll('a[target="_blank"]').forEach(link => {

        link.setAttribute("rel", "noopener noreferrer");

    });


    /* ================= EMAIL LINK ================= */

    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {

        link.addEventListener("click", () => {

            console.log("Opening email client...");

        });

    });


    /* ================= RESUME DOWNLOAD ================= */

    const resumeLink = document.querySelector(
        'a[download], a[href$=".pdf"]'
    );

    if (resumeLink) {

        resumeLink.addEventListener("click", () => {

            console.log("Resume download started.");

        });

    }


    /* ================= CURRENT YEAR ================= */

    const yearElements = document.querySelectorAll(
        "[data-current-year]"
    );

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });


    /* ================= BACK TO TOP ================= */

    const logoLinks = document.querySelectorAll(
        '.logo, .footer-logo'
    );

    logoLinks.forEach(logo => {

        logo.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });


    /* ================= CERTIFICATE SAFETY ================= */

    /*
       Certificate images are intentionally not opened in a modal.
       The portfolio now presents certificates as clean,
       professional information cards.
    */

    const certificateCards = document.querySelectorAll(
        ".certificate-card"
    );

    certificateCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("certificate-hover");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("certificate-hover");
        });

    });


    /* ================= EXTERNAL PROFILE TRACKING ================= */

    const profileLinks = document.querySelectorAll(
        ".profile-card, .quick-links a, .contact-buttons a"
    );

    profileLinks.forEach(link => {

        link.addEventListener("click", () => {

            const destination =
                link.getAttribute("href") || "unknown";

            console.log(
                `Opening profile: ${destination}`
            );

        });

    });


    /* ================= KEYBOARD ACCESSIBILITY ================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (navMenu) {
                navMenu.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        }

    });


    /* ================= PAGE READY ================= */

    document.body.classList.add("page-loaded");

    console.log(
        "Priti Kumari | Data Analytics Portfolio loaded successfully."
    );

});