const services = [
{
    id: 1,
    name: "Home Cleaning",
    description: "Professional cleaning for houses and apartments.",
    price: 150,
    rating: 4.9,
    duration: "2 Hours",
    availability: "Available Every Day",
    image: "img/home-cleaning.jpg",
    included: [
        "Living Room Cleaning",
        "Bedroom Cleaning",
        "Kitchen Cleaning",
        "Bathroom Cleaning",
        "Floor Mopping"
    ]
},
{
    id: 2,
    name: "Kitchen Cleaning",
    description: "Professional cleaning for kitchens, cabinets, and appliances.",
    price: 200,
    rating: 4.9,
    duration: "3 Hours",
    availability: "Available Sat - Thu",
    image: "img/kitchen-cleaning.jpg",
    included: [
        "Kitchen Cabinets",
        "Countertops",
        "Sink Cleaning",
        "Microwave Cleaning",
        "Oven Cleaning"
    ]
},
{
    id: 3,
    name: "Deep Cleaning",
    description: "Deep cleaning for every corner of your home.",
    price: 300,
    rating: 5.0,
    duration: "4 Hours",
    availability: "24 / 7",
    image: "img/deep-cleaning.jpg",
    included: [
        "Full House Cleaning",
        "Furniture Cleaning",
        "Window Cleaning",
        "Bathroom Sanitizing",
        "Kitchen Deep Cleaning"
    ]
},
{
    id: 4,
    name: "Carpet Cleaning",
    description: "Professional carpet washing and stain removal.",
    price: 180,
    rating: 4.7,
    duration: "2 Hours",
    availability: "Available Every Day",
    image: "img/carpet-cleaning.jpg",
    included: [
        "Vacuum Cleaning",
        "Steam Cleaning",
        "Stain Removal",
        "Drying",
        "Odor Removal"
    ]
},
{
    id: 5,
    name: "Sofa Cleaning",
    description: "Keep your sofas fresh and spotless.",
    price: 250,
    rating: 4.8,
    duration: "2 Hours",
    availability: "Available Every Day",
    image: "img/sofa-cleaning.jpg",
    included: [
        "Fabric Cleaning",
        "Steam Cleaning",
        "Stain Removal",
        "Dust Removal",
        "Quick Dry"
    ]
},
{
    id: 6,
    name: "Window Cleaning",
    description: "Crystal-clear windows for your home.",
    price: 120,
    rating: 4.6,
    duration: "1 Hour",
    availability: "Mon - Fri",
    image: "img/window-cleaning.jpg",
    included: [
        "Glass Cleaning",
        "Frame Cleaning",
        "Track Cleaning",
        "Spot Removal",
        "Glass Polishing"
    ]
}
];

const servicesContainer = document.getElementById("servicesContainer");

function displayServices(data) {

    servicesContainer.innerHTML = "";

    data.forEach(service => {

        servicesContainer.innerHTML += `

        <div class="col-lg-4 col-md-6">

            <div class="service-card">

                <img src="${service.image}"
                     class="service-img preview-img"
                     alt="${service.name}">

                <div class="service-content">

                    <div class="rating">
                        ⭐ ${service.rating}
                    </div>

                    <h4>${service.name}</h4>

                    <p>${service.description}</p>

                    <h5>Starting From ${service.price} EGP</h5>

                    <span>
                        <i class="fa-regular fa-clock"></i>
                        ${service.duration}
                    </span>

                    <br><br>

                    <a href="service-details.html?id=${service.id}"
                       class="btn service-btn">

                        View Details

                    </a>

                </div>

            </div>

        </div>

        `;

    });

    imagePreview();
}

displayServices(services);

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const filtered = services.filter(service =>
        service.name.toLowerCase().includes(value)
    );

    displayServices(filtered);

});

const sortSelect = document.getElementById("sortSelect");

sortSelect.addEventListener("change", function () {

    let sorted = [...services];

    if (this.value === "priceLow") {
        sorted.sort((a, b) => a.price - b.price);
    }

    else if (this.value === "priceHigh") {
        sorted.sort((a, b) => b.price - a.price);
    }

    else if (this.value === "rating") {
        sorted.sort((a, b) => b.rating - a.rating);
    }

    displayServices(sorted);

});

function imagePreview() {

    const images = document.querySelectorAll(".preview-img");

    const modal = document.getElementById("imageModal");

    const modalImg = document.getElementById("modalImg");

    const close = document.querySelector(".close-modal");

    if (!modal || !modalImg || !close) return;

    images.forEach(img => {

        img.onclick = function () {

            modal.style.display = "flex";

            modalImg.src = this.src;

        };

    });

    close.onclick = function () {

        modal.style.display = "none";

    };

    modal.onclick = function (e) {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    };

}