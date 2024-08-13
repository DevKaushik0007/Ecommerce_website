const carousel = document.querySelector('.hero-carousel');
const carouselItems = document.querySelectorAll('.hero-carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentItem = 0;
let isTransitioning = false;

function showItem(itemIndex) {
    if (isTransitioning) return;

    isTransitioning = true;

    carouselItems.forEach((item, index) => {
        item.classList.remove('active');
    });

    carouselItems[itemIndex].classList.add('active');

    setTimeout(() => {
        isTransitioning = false;
    }, 1000); // Match this duration to the CSS transition duration
}

function prevItem() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = carouselItems.length - 1;
    }
    showItem(currentItem);
}

function nextItem() {
    currentItem++;
    if (currentItem >= carouselItems.length) {
        currentItem = 0;
    }
    showItem(currentItem);
}

prevButton.addEventListener('click', prevItem);
nextButton.addEventListener('click', nextItem);

showItem(currentItem);
