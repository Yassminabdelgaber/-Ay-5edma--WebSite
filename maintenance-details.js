const services = [

{
id:1,
name:"Home Repair",
image:"img/home-repair.jpg",
rating:4.9,
price:250,
description:"Professional repair solutions for all home problems.",
duration:"2 Hours",
availability:"Available Every Day",

included:[
"Wall Repair",
"Door Repair",
"Window Repair",
"Minor Carpentry",
"General Inspection"
]

},

{
id:2,
name:"AC Maintenance",
image:"img/ac-maintenance.jpg",
rating:4.8,
price:300,
description:"Cleaning and repairing air conditioning systems.",
duration:"2 Hours",
availability:"Available Every Day",

included:[
"AC Cleaning",
"Gas Refill",
"Filter Replacement",
"Cooling Test",
"Performance Check"
]

},

{
id:3,
name:"Electrical Maintenance",
image:"img/electrical-maintenance.jpg",
rating:4.9,
price:220,
description:"Safe electrical inspection and repair services.",
duration:"1.5 Hours",
availability:"24 / 7",

included:[
"Wire Repair",
"Socket Replacement",
"Switch Installation",
"Circuit Inspection",
"Safety Testing"
]

},

{
id:4,
name:"Water System Repair",
image:"img/water-repair.jpg",
rating:4.7,
price:280,
description:"Fixing water leaks and plumbing problems.",
duration:"2 Hours",
availability:"Available Every Day",

included:[
"Leak Detection",
"Pipe Repair",
"Drain Cleaning",
"Water Pressure Test",
"Valve Replacement"
]

},

{
id:5,
name:"Kitchen Maintenance",
image:"img/kitchen-maintenance.jpg",
rating:4.8,
price:350,
description:"Kitchen equipment maintenance and installation.",
duration:"3 Hours",
availability:"Sat - Thu",

included:[
"Cabinet Repair",
"Sink Maintenance",
"Countertop Fix",
"Appliance Installation",
"Drawer Repair"
]

},

{
id:6,
name:"Emergency Maintenance",
image:"img/emergency-maintenance.jpg",
rating:5.0,
price:400,
description:"Fast emergency home maintenance service.",
duration:"1 Hour",
availability:"24 / 7",

included:[
"Urgent Visit",
"Immediate Repair",
"Problem Diagnosis",
"Safety Inspection",
"Quick Solution"
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

<a href="booking.html?category=maintenance&id=${service.id}" class="btn book-btn mt-4">

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
href="maintenance-details.html?id=${item.id}"
class="btn service-btn">

View Details

</a>

</div>

</div>

</div>

`;

});

}