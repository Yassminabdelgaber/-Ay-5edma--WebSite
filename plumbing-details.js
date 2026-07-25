const services = [

{
id:1,
name:"Pipe Repair",
image:"img/pipe-repair.jpg",
rating:4.9,
price:250,
description:"Professional pipe repair and replacement services.",
duration:"2 Hours",
availability:"Available Every Day",

included:[
"Pipe Inspection",
"Leak Repair",
"Pipe Replacement",
"Pressure Testing",
"Final Check"
]

},

{
id:2,
name:"Water Leakage Repair",
image:"img/water-leak.jpg",
rating:4.8,
price:300,
description:"Fast detection and repair of water leaks.",
duration:"2 Hours",
availability:"24 / 7",

included:[
"Leak Detection",
"Leak Repair",
"Pipe Inspection",
"Water Pressure Test",
"Cleanup"
]

},

{
id:3,
name:"Bathroom Installation",
image:"img/bathroom-installation.jpg",
rating:4.9,
price:600,
description:"Complete bathroom plumbing installation.",
duration:"5 Hours",
availability:"Available Every Day",

included:[
"Toilet Installation",
"Sink Installation",
"Shower Installation",
"Pipe Connection",
"Final Testing"
]

},

{
id:4,
name:"Kitchen Plumbing",
image:"img/kitchen-plumbing.jpg",
rating:4.7,
price:350,
description:"Kitchen sink and water system solutions.",
duration:"3 Hours",
availability:"Sat - Thu",

included:[
"Sink Installation",
"Faucet Repair",
"Drain Cleaning",
"Pipe Replacement",
"Leak Test"
]

},

{
id:5,
name:"Drain Cleaning",
image:"img/drain-cleaning.jpg",
rating:4.8,
price:200,
description:"Professional drain cleaning service.",
duration:"1 Hour",
availability:"Available Every Day",

included:[
"Drain Inspection",
"Blockage Removal",
"Pipe Flushing",
"Odor Removal",
"Final Check"
]

},

{
id:6,
name:"Emergency Plumbing",
image:"img/plumbing-emergency.jpg",
rating:5.0,
price:450,
description:"24/7 emergency plumbing support.",
duration:"1 Hour",
availability:"24 / 7",

included:[
"Emergency Visit",
"Burst Pipe Repair",
"Leak Repair",
"Water Shutoff",
"Safety Inspection"
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

<a href="booking.html?category=plumbing&id=${service.id}" class="btn book-btn mt-4">

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
href="plumbing-details.html?id=${item.id}"

View Details

</a>

</div>

</div>

</div>

`;

});

}