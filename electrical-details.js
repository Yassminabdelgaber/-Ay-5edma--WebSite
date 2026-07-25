const services = [

{
id:1,
name:"Electrical Repair",
image:"img/electrical-repair.jpg",
rating:4.9,
price:250,
description:"Professional electrical repair and troubleshooting services.",
duration:"2 Hours",
availability:"Available Every Day",

included:[
"Fault Diagnosis",
"Wire Repair",
"Socket Replacement",
"Circuit Testing",
"Safety Check"
]

},

{
id:2,
name:"Lighting Installation",
image:"img/lighting.jpg",
rating:4.8,
price:300,
description:"Modern lighting installation for your home.",
duration:"2 Hours",
availability:"Available Every Day",

included:[
"LED Installation",
"Ceiling Lights",
"Wall Lights",
"Switch Installation",
"Testing"
]

},

{
id:3,
name:"Wiring Installation",
image:"img/wiring.jpg",
rating:4.9,
price:500,
description:"Safe wiring installation by experienced technicians.",
duration:"4 Hours",
availability:"Sat - Thu",

included:[
"New Wiring",
"Cable Protection",
"Distribution Box",
"Power Testing",
"Safety Inspection"
]

},

{
id:4,
name:"Electrical Inspection",
image:"img/electrical-inspection.jpg",
rating:4.7,
price:200,
description:"Complete electrical safety inspection.",
duration:"1 Hour",
availability:"Every Day",

included:[
"Power Check",
"Socket Inspection",
"Circuit Testing",
"Load Analysis",
"Safety Report"
]

},

{
id:5,
name:"Power Backup Installation",
image:"img/power-backup.jpg",
rating:4.8,
price:700,
description:"Installation of backup power solutions.",
duration:"5 Hours",
availability:"Available Every Day",

included:[
"UPS Installation",
"Generator Setup",
"Battery Testing",
"Power Switching",
"System Configuration"
]

},

{
id:6,
name:"Emergency Electrical Service",
image:"img/electrical-emergency.jpg",
rating:5,
price:400,
description:"Fast response for urgent electrical problems.",
duration:"1 Hour",
availability:"24 / 7",

included:[
"Emergency Visit",
"Power Restoration",
"Short Circuit Repair",
"Safety Check",
"Immediate Solution"
]

}

];

const params=new URLSearchParams(window.location.search);

const id=Number(params.get("id"));

const service=services.find(item=>item.id===id);

const serviceDetails=document.getElementById("serviceDetails");

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

<img src="${service.image}" class="details-img img-fluid">

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

${service.included.map(item=>`<li>✔ ${item}</li>`).join("")}

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

<a href="booking.html?category=electrical&id=${service.id}" class="btn book-btn mt-4">

Book Now

</a>
`;

}

const relatedContainer=document.getElementById("relatedServices");

if(service){

const relatedServices=services.filter(item=>item.id!==service.id).slice(0,3);

relatedServices.forEach(item=>{

relatedContainer.innerHTML+=`

<div class="col-lg-4 col-md-6">

<div class="service-card">

<img src="${item.image}" class="service-img">

<div class="service-content">

<div class="service-rating">

⭐ ${item.rating}

</div>

<h4>${item.name}</h4>

<p>${item.description}</p>

<a href="electrical-details.html?id=${item.id}" class="details-btn">

View Details

</a>

</div>

</div>

</div>

`;

});

}