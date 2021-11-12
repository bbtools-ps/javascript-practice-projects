// move slides
function carousel(slides, counter) {
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

// update counter value by moving slides back and forth
function updateCounterInfinite(slides, counter) {
    // working with slides
    if (counter === slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }
    return counter;
}

// update counter value by hiding btnPrev or btnNext
function updateCounterVisibility(slides, counter, btnNext, btnPrev) {
    // until slider reaches last slide show btnNext
    if (counter < slides.length - 1) {
        btnNext.style.display = "block";
    } else {
        btnNext.style.display = "none";
    }

    // if slider is more than 0 show btnPrev
    if (counter > 0) {
        btnPrev.style.display = "block";
    } else {
        btnPrev.style.display = "none";
    }

    return counter;
}

(function () {
    const slides = document.querySelectorAll(".slide");
    const btnNext = document.querySelector(".btn-next");
    const btnPrev = document.querySelector(".btn-prev");

    slides.forEach(function (slide, index) {
        slide.style.left = `${index * 100}%`;
    });

    // initial state of counter
    let counter = 0;

    btnNext.addEventListener("click", function () {
        counter++;
        // counter = updateCounterInfinite(slides, counter);
        counter = updateCounterVisibility(slides, counter, btnNext, btnPrev);
        carousel(slides, counter);
    });

    btnPrev.addEventListener("click", function () {
        counter--;
        // counter = updateCounterInfinite(slides, counter);
        counter = updateCounterVisibility(slides, counter, btnNext, btnPrev);
        carousel(slides, counter);
    });

    // inital state of btnPrev
    btnPrev.style.display = "none";
})();
