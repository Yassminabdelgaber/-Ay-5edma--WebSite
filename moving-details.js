const services = [

{
id:1,
name:"Home Moving",
image:"img/home-moving.jpg",
rating:4.9,
price:600,
description:"Complete home moving service with safe transportation.",
duration:"5 Hours",
availability:"Available Every Day",
included:[
"Packing",
"Loading",
"Transportation",
"Furniture Arrangement",
"Unloading"
]
},

{
id:2,
name:"Furniture Moving",
image:"img/furniture-moving.jpg",
rating:4.8,
price:400,
description:"Move your furniture safely without damage.",
duration:"3 Hours",
availability:"Available Every Day",
included:[
"Furniture Protection",
"Heavy Lifting",
"Transportation",
"Assembly",
"Safe Delivery"
]
},

{
id:3,
name:"Packing Service",
image:"img/packing.jpg",
rating:4.9,
price:300,
description:"Professional packing for your valuable items.",
duration:"2 Hours",
availability:"24 / 7",
included:[
"Boxes",
"Bubble Wrap",
"Labeling",
"Packing Tape",
"Fragile Protection"
]
},

{
id:4,
name:"Apartment Moving",
image:"img/apartment-moving.jpg",
rating:4.9,
price:1000,
description:"Complete apartment moving with careful packing and transportation.",
duration:"7 Hours",
availability:"Every Day",
included:[
"Packing",
"Loading",
"Transportation",
"Furniture Assembly",
"Unpacking"
]
},

{
id:5,
name:"Loading & Unloading",
image:"img/loading.jpg",
rating:4.8,
price:250,
description:"Professional loading and unloading assistance.",
duration:"2 Hours",
availability:"Daily",
included:[
"Heavy Lifting",
"Truck Loading",
"Truck Unloading",
"Furniture Handling",
"Safety Equipment"
]
},

{
id:6,
name:"Emergency Moving",
image:"img/emergency-moving.jpg",
rating:5.0,
price:900,
description:"Fast moving solutions when you need them.",
duration:"4 Hours",
availability:"24 / 7",
included:[
"Urgent Response",
"Packing",
"Transportation",
"Fast Delivery",
"Professional Team"
]
}

];

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const service = services.find(item => item.id === id);

const serviceDetails = document.getElementById("serviceDetails");

if(!service){

serviceDetails.innerHTML=`

<div class="col-12 text-center py-5">

<h2>Service Not Found</h2>

</div>

`;

}

else{

serviceDetails.innerHTML=`

<div class="col-lg-6">

<img
src="${service.image}"
class="details-img img-fluid"
alt="${service.name}">

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

${service.included.map(item=>`

<li>✔ ${item}</li>

`).join("")}

</ul>

<div class="details-info mt-4">

<span>

<i class="fa-regular fa-clock"></i>

${service.duration}

</span>

<span>

<i class="fa-solid fa-calendar-check"></i>

${service.availability}

</span>

</div>

<a href="booking.html?category=moving&id=${service.id}" class="btn book-btn mt-4">

Book Now

</a>

`;

}

const relatedContainer =
document.getElementById("relatedServices");

if(service){

const relatedServices =
services.filter(item=>item.id!==service.id).slice(0,3);

relatedServices.forEach(item=>{

relatedContainer.innerHTML+=`

<div class="col-lg-4 col-md-6">

<div class="service-card">

<img
src="${item.image}"
class="service-img">

<div class="service-content">

<div class="rating">

⭐ ${item.rating}

</div>

<h4>${item.name}</h4>

<p>${item.description}</p>

<a
href="moving-details.html?id=${item.id}"
class="btn service-btn">

View Details

</a>

</div>

</div>

</div>

`;

});

}