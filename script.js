/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================
   PROJECT VISUAL PARALLAX
========================= */

const projectVisuals = document.querySelectorAll(".project-visual");

projectVisuals.forEach((visual) => {

    visual.addEventListener("mousemove", (event) => {

        const rect = visual.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;

        visual.style.setProperty(
            "--mouse-x",
            `${x * 14}px`
        );

        visual.style.setProperty(
            "--mouse-y",
            `${y * 14}px`
        );

    });


    visual.addEventListener("mouseleave", () => {

        visual.style.setProperty(
            "--mouse-x",
            "0px"
        );

        visual.style.setProperty(
            "--mouse-y",
            "0px"
        );

    });

});


/* =========================
   SMALL PROJECT MOTION
========================= */

document.querySelectorAll(".project").forEach((project) => {

    project.addEventListener("mouseenter", () => {

        project.classList.add("project-active");

    });

    project.addEventListener("mouseleave", () => {

        project.classList.remove("project-active");

    });

});


/* =========================
   SMOOTH INTERNAL LINKS
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================
   DYNAMIC YEAR
========================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    ".nav nav a"
);

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav nav a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        threshold: 0.35
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});