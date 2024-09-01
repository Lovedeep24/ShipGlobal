
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function showSlide(index) {
        
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;


        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

       
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentIndex);
        });


        document.body.style.backgroundImage = `url(${slides[currentIndex].querySelector('img').src})`;
    }


    document.querySelector('.next').addEventListener('click', () => showSlide(currentIndex + 1));
    document.querySelector('.prev').addEventListener('click', () => showSlide(currentIndex - 1));

    indicators.forEach(indicator => {
        indicator.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-slide'), 10);
            showSlide(index);
        });
    });

    // Initialize the carousel
    showSlide(currentIndex);
});
