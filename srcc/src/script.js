document.addEventListener('DOMContentLoaded', () => {
    // Slider
    const slider = document.querySelectorAll('.slider');
    const btnPrev = document.getElementById('prev-button');
    const btnNext = document.getElementById('next-button');

    let currentSlide = 0;

    function hideSlider() {
        slider.forEach(item => item.classList.remove('on'));
    }

    function showSlider() {
        slider[currentSlide].classList.add('on');
    }

    function nextSlider() {
        hideSlider();
        if (currentSlide === slider.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        showSlider();
    }

    function prevSlider() {
        hideSlider();
        if (currentSlide === 0) {
            currentSlide = slider.length - 1;
        } else {
            currentSlide--;
        }
        showSlider();
    }

    setInterval(nextSlider, 2000);

    if (btnNext && btnPrev) {
        btnNext.addEventListener('click', nextSlider);
        btnPrev.addEventListener('click', prevSlider);
    }

    // Seção de jogos
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const firstCardwidth = carousel ? carousel.querySelector(".card").offsetWidth : 0;

    let isDragging = false, startX, startScrollLeft;

    if (carousel) {
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === "left" ? -firstCardwidth : firstCardwidth;
            });
        });

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
    }

    // Segundo carrosel de jogos
    const carouselContainer = document.querySelector(".carousel-items");
    const navigationButtons = document.querySelectorAll(".carousel-wrapper i");
    const cardWidth = carouselContainer ? carouselContainer.querySelector(".carousel-card").offsetWidth : 0;

    if (carouselContainer) {
        navigationButtons.forEach(button => {
            button.addEventListener("click", () => {
                carouselContainer.scrollLeft += button.id === "left-arrow" ? -cardWidth : cardWidth;
            });
        });

        const startDrag = (event) => {
            isDragging = true;
            carouselContainer.classList.add("dragging");
            startX = event.pageX;
            initialScrollLeft = carouselContainer.scrollLeft;
        }

        const performDrag = (event) => {
            if (!isDragging) return;
            carouselContainer.scrollLeft = initialScrollLeft - (event.pageX - startX);
        }

        const stopDrag = () => {
            isDragging = false;
            carouselContainer.classList.remove("dragging");
        }

        carouselContainer.addEventListener("mousedown", startDrag);
        carouselContainer.addEventListener("mousemove", performDrag);
        document.addEventListener("mouseup", stopDrag);
    }

    // Terceiro carrosel
    const carrosselCont = document.querySelector(".carousel-item-s");
    const navegacaoButton = document.querySelectorAll(".carousel-wrapper-r i");
    const cardsWidth = carrosselCont ? carrosselCont.querySelector(".carousel-card-s").offsetWidth : 0;

    if (carrosselCont) {
        navegacaoButton.forEach(button => {
            button.addEventListener("click", () => {
                carrosselCont.scrollLeft += button.id === "left-arrow-w" ? -cardsWidth : cardsWidth;
            });
        });

        const startDragg = (event) => {
            isDragging = true;
            carrosselCont.classList.add("draggingg");
            startX = event.pageX;
            initialScrollLeft = carrosselCont.scrollLeft;
        }

        const performDragg = (event) => {
            if (!isDragging) return;
            carrosselCont.scrollLeft = initialScrollLeft - (event.pageX - startX);
        }

        const stopDragg = () => {
            isDragging = false;
            carrosselCont.classList.remove("draggingg");
        }

        carrosselCont.addEventListener("mousedown", startDragg);
        carrosselCont.addEventListener("mousemove", performDragg);
        document.addEventListener("mouseup", stopDragg);
    }
});

/* sessao do dark mode */

document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('btn');
    const bodyElement = document.body;

    toggleSwitch.addEventListener('change', () => {
        bodyElement.classList.toggle('dark', toggleSwitch.checked);
    });
});

/* fim do dark */

/* sessão formulário */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (event) => {
        let allFieldsFilled = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFieldsFilled = false;
                input.style.border = '2px solid red';
            } else {
                input.style.border = '2px solid green';
            }
        });

        if (!allFieldsFilled) {
            event.preventDefault();
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim()) {
                input.style.border = '2px solid green';
            } else {
                input.style.border = '2px solid red';
            }
        });
    });
});

/* fim do formulário */