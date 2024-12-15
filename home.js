
        const slides = document.querySelector('.slides');
        const slideCount = document.querySelectorAll('.slide').length;
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        let currentIndex = 0;

        function updateSlidePosition() {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? slideCount - 1 : currentIndex - 1;
            updateSlidePosition();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlidePosition();
        });

        // Auto slide
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlidePosition();
        }, 5000);
        const productCarousel = document.querySelector('.product-carousel');
    const productCards = document.querySelectorAll('.product-card');
    const productPrev = document.querySelector('.product-prev');
    const productNext = document.querySelector('.product-next');
    let productIndex = 0;
    const visibleCards = 3;

    function updateProductCarousel() {
        const cardWidth = productCards[0].clientWidth + 20; // Include gap
        const offset = -(productIndex * cardWidth);
        productCarousel.style.transform = `translateX(${offset}px)`;
    }

    productPrev.addEventListener('click', () => {
        productIndex = Math.max(productIndex - 1, 0);
        updateProductCarousel();
    });

    productNext.addEventListener('click', () => {
        productIndex = Math.min(productIndex + 1, productCards.length - visibleCards);
        updateProductCarousel();
    });

    // Auto-slide functionality
    setInterval(() => {
        productIndex = (productIndex + 1) % productCards.length;
        if (productIndex > productCards.length - visibleCards) {
            productIndex = 0;
        }
        updateProductCarousel();
    }, 7000);
  