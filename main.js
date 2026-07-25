const swiper = new Swiper(".serviceSwiper", {
    loop: true,
    spaceBetween: 25,

    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});

    // Why Us 

    const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            counters.forEach(counter => {

                const target = parseFloat(counter.dataset.target);

                let current = 0;

                const increment = target / 80;

                const updateCounter = () => {

                    current += increment;

                    if(current < target){

                        if(target % 1 !== 0){
                            counter.innerText = current.toFixed(1);
                        }else{
                            counter.innerText = Math.floor(current);
                        }

                        requestAnimationFrame(updateCounter);

                    }else{

                        counter.innerText = target;

                    }

                };

                updateCounter();

            });

            counterObserver.disconnect();

        }

    });

});

counterObserver.observe(document.querySelector(".why-us"));

// Testimonial

new Swiper(".testimonialSwiper",{

    loop:true,

    autoplay:{
        delay:3000,
    },

    spaceBetween:30,

    breakpoints:{

        0:{
            slidesPerView:1,
        },

        768:{
            slidesPerView:2,
        },

        1200:{
            slidesPerView:3,
        }

    }

});



    // Service Page 

