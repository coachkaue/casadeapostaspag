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
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('btn');
    const bodyElement = document.body;

    toggleSwitch.addEventListener('change', () => {
        bodyElement.classList.toggle('dark', toggleSwitch.checked);
    });
});

/* sessão formulario */

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

/* fim formulário */