const services = [

{
id:1,
name:"Furniture Assembly",
image:"img/furniture-assembly.jpg",
rating:4.9,
price:300,
description:"Professional furniture assembly and installation.",
duration:"2 Hours",
availability:"Available Every Day",

included:[
"Item Assembly",
"Screws & Fittings",
"Alignment Check",
"Stability Testing",
"Cleanup After Work"
]

},

{
id:2,
name:"Wardrobe Installation",
image:"img/wardrobe.jpg",
rating:4.8,
price:450,
description:"Expert wardrobe installation with perfect finishing.",
duration:"3 Hours",
availability:"Available Every Day",

included:[
"Wardrobe Assembly",
"Wall Fixing",
"Door Alignment",
"Shelf Installation",
"Final Inspection"
]

},

{
id:3,
name:"Kitchen Furniture Installation",
image:"img/kitchen-furniture.jpg",
rating:4.9,
price:700,
description:"Complete kitchen furniture installation service.",
duration:"4 Hours",
availability:"Sat - Thu",

included:[
"Cabinet Assembly",
"Countertop Fixing",
"Drawer Installation",
"Handle Fitting",
"Final Testing"
]

},

{
id:4,
name:"Bed Assembly",
image:"img/bed-assembly.jpg",
rating:4.7,
price:250,
description:"Fast and safe bed installation.",
duration:"1.5 Hours",
availability:"Available Every Day",

included:[
"Frame Assembly",
"Headboard Fixing",
"Slats Installation",
"Stability Check",
"Cleanup After Work"
]

},

{
id:5,
name:"TV Unit Installation",
image:"img/tv-unit.jpg",
rating:4.8,
price:350,
description:"Modern TV unit mounting and installation.",
duration:"2 Hours",
availability:"Available Every Day",

included:[
"Unit Assembly",
"Wall Mounting",
"Cable Management",
"Alignment Check",
"Final Testing"
]

},

{
id:6,
name:"Office Furniture Setup",
image:"img/office-furniture.jpg",
rating:5.0,
price:600,
description:"Professional office furniture arrangement.",
duration:"3 Hours",
availability:"Every Day",

included:[
"Desk Assembly",
"Chair Assembly",
"Storage Unit Setup",
"Cable Organization",
"Final Arrangement"
]

}

];

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const service = services.find(item => item.id === id);

const serviceDetails = document.getElementById("serviceDetails");

if(!service){

serviceDetails.innerHTML = `

<div class="col-12 text-center py-5">

<h2>Service Not Found</h2>

</div>

`;

} else {

serviceDetails.innerHTML = `

<div class="col-lg-6">

<img src="${service.image}" class="details-img img-fluid rounded">

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

${service.included.map(item => `<li>✔ ${item}</li>`).join("")}

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

<a href="booking.html?category=furniture&id=${service.id}" class="btn book-btn mt-4">

Book Now

</a>
`;

}

const relatedContainer = document.getElementById("relatedServices");

if(service){

const relatedServices = services.filter(item => item.id !== service.id).slice(0,3);

relatedServices.forEach(item=>{

relatedContainer.innerHTML += `

<div class="col-lg-4 col-md-6">

<div class="service-card">

<img src="${item.image}" class="service-img">

<div class="service-content">

<div class="service-rating">

⭐ ${item.rating}

</div>

<h4>${item.name}</h4>

<p>${item.description}</p>

<a href="furniture-details.html?id=${item.id}" class="details-btn">

View Details

</a>

</div>

</div>

</div>

`;

});

}
