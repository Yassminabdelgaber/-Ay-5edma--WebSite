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

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const service = services.find(item => item.id === id);

const serviceDetails = document.getElementById("serviceDetails");

if (!service) {

    serviceDetails.innerHTML = `
        <div class="col-12 text-center py-5">
            <h2>Service Not Found</h2>
        </div>
    `;

} else {

serviceDetails.innerHTML = `

<div class="col-lg-6">

    <img
        src="${service.image}"
        class="details-img img-fluid rounded"
        alt="${service.name}"
    >

</div>

<div class="col-lg-6">

    <span class="details-badge">
        ⭐ ${service.rating} Rating
    </span>

    <h1 class="mt-3">
        ${service.name}
    </h1>

    <h3 class="price mt-3">
        Starting From
        <span>${service.price} EGP</span>
    </h3>

    <p class="mt-4">
        ${service.description}
    </p>

    <h5 class="mt-4">
        What's Included
    </h5>

    <ul class="included-list">

        ${service.included.map(item => `
            <li>✔ ${item}</li>
        `).join("")}

    </ul>

    <div class="details-info mt-4">

        <span class="me-4">
            <i class="fa-regular fa-clock"></i>
            ${service.duration}
        </span>

        <span>
            <i class="fa-solid fa-calendar-check"></i>
            ${service.availability}
        </span>

    </div>

    <a href="booking.html?category=cleaning&id=${service.id}" class="btn book-btn mt-4">
        Book Now
    </a>

</div>

`;

}

const relatedContainer =
document.getElementById("relatedServices");

if(service){

const relatedServices =
services
.filter(item => item.id !== service.id)
.slice(0,3);

relatedServices.forEach(item=>{

relatedContainer.innerHTML+=`

<div class="col-lg-4 col-md-6">

<div class="service-card">

<img
src="${item.image}"
class="service-img"
alt="${item.name}">

<div class="service-content">

<div class="rating">

⭐ ${item.rating}

</div>

<h4>${item.name}</h4>

<p>${item.description}</p>

<a
href="service-details.html?id=${item.id}"
class="btn service-btn">

View Details

</a>

</div>

</div>

</div>

`;

});

}



