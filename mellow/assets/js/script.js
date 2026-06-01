document.addEventListener("DOMContentLoaded", () => {



    // =========================
    // HERO FORM
    // =========================

    const bookingForm = document.querySelector(".booking-form form");

    if (bookingForm) {

        bookingForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const button = document.querySelector(".check-btn");

            button.innerHTML = `
                Checking...
            `;

            setTimeout(() => {

                button.innerHTML = `
                    Check Availability
                    <i class="fa-solid fa-arrow-right"></i>
                `;

                alert("Rooms are available!");

            }, 1500);

        });

    }

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // =========================
    // COUNTER ANIMATION
    // =========================

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {

        counter.innerText = "0";

        const updateCounter = () => {

            const target = +counter.getAttribute("data-count");

            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {

                counter.innerText = `${Math.ceil(current + increment)}`;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });


    /* =========================
        GALLERY SLIDER
========================= */

    const galleryItems = document.querySelectorAll(".gallery-item");

    const nextBtn = document.querySelector(".next-btn");

    const prevBtn = document.querySelector(".prev-btn");

    let currentSlide = 0;

    /* SHOW SLIDE */

    function showSlide(index) {

        galleryItems.forEach((item) => {
            item.classList.remove("active");
        });

        galleryItems[index].classList.add("active");
    }

    /* NEXT */

    nextBtn.addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= galleryItems.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    });

    /* PREVIOUS */

    prevBtn.addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = galleryItems.length - 1;
        }

        showSlide(currentSlide);

    });

    /* AUTO SLIDE */

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= galleryItems.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 4000);

    // =========================
    // SCROLL ANIMATION
    // =========================

    const hiddenElements = document.querySelectorAll(
        ".hero-content, .booking-form, .section-title, .stay-content, .stay-gallery, .counter-box, .room-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-item");

            }

        });

    }, {
        threshold: 0.2
    });

    hiddenElements.forEach((el) => observer.observe(el));

    // =========================
    // ROOM DOT ANIMATION
    // =========================

    const dots = document.querySelectorAll(".room-dots span");

    let activeIndex = 0;

    setInterval(() => {

        dots.forEach((dot) => {

            dot.classList.remove("active-dot");

        });

        activeIndex++;

        if (activeIndex >= dots.length) {

            activeIndex = 0;

        }

        dots[activeIndex].classList.add("active-dot");

    }, 2000);

    // =========================
    // SERVICE CARD ANIMATION
    // =========================

    const serviceCards = document.querySelectorAll(".service-card");

    const serviceObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-service");

            }

        });

    }, {
        threshold: 0.2
    });

    serviceCards.forEach((card) => {

        serviceObserver.observe(card);

    });

    // =========================
    // BLOG ANIMATION
    // =========================

    const fadeItems = document.querySelectorAll(".fade-up");

    const fadeObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-item");

            }

        });

    }, {
        threshold: 0.2
    });

    fadeItems.forEach((item) => {

        fadeObserver.observe(item);

    });

    // footer animation on scroll

    const footerItems = document.querySelectorAll(
        ".footer-about, .newsletter, .footer-info, .footer-links, .copyright"
    );

    window.addEventListener("scroll", () => {

        footerItems.forEach((item) => {

            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < window.innerHeight - 100) {

                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }

        });

    });

});