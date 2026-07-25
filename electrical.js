const electricalServices = [

{
id:1,
name:"Electrical Repair",
image:"img/electrical-repair.jpg",
rating:4.9,
price:250,
description:"Professional electrical repair and troubleshooting services."
},

{
id:2,
name:"Lighting Installation",
image:"img/lighting.jpg",
rating:4.8,
price:300,
description:"Modern lighting installation for your home."
},

{
id:3,
name:"Wiring Installation",
image:"img/wiring.jpg",
rating:4.9,
price:500,
description:"Safe wiring installation by experienced technicians."
},

{
id:4,
name:"Electrical Inspection",
image:"img/electrical-inspection.jpg",
rating:4.7,
price:200,
description:"Complete electrical safety inspection."
},

{
id:5,
name:"Power Backup Installation",
image:"img/power-backup.jpg",
rating:4.8,
price:700,
description:"Installation of backup power solutions."
},

{
id:6,
name:"Emergency Electrical Service",
image:"img/electrical-emergency.jpg",
rating:5,
price:400,
description:"Fast response for urgent electrical problems."
}

];




const container =
document.getElementById("servicesContainer");





function displayElectrical(data){


container.innerHTML="";



data.forEach(service=>{


container.innerHTML += `


<div class="col-lg-4 col-md-6">


<div class="service-card">


<img src="${service.image}"
class="service-img">


<div class="service-content">


<div class="service-rating">

⭐ ${service.rating}

</div>



<h3>
${service.name}
</h3>



<p>
${service.description}
</p>



<h5>
${service.price} EGP
</h5>



<a href="electrical-details.html?id=${service.id}" class="btn details-btn">
View Details
</a>


</div>


</div>


</div>



`;



});


}



displayElectrical(electricalServices);






// Search

document.getElementById("searchInput")
.addEventListener("input",function(){


let value=this.value.toLowerCase();



let filtered =
electricalServices.filter(service=>


service.name.toLowerCase()
.includes(value)


);



displayElectrical(filtered);


});






// Sort

document.getElementById("sortSelect")
.addEventListener("change",function(){


let data=[...electricalServices];



if(this.value==="priceLow"){

data.sort((a,b)=>a.price-b.price);

}



else if(this.value==="priceHigh"){

data.sort((a,b)=>b.price-a.price);

}



else if(this.value==="rating"){

data.sort((a,b)=>b.rating-a.rating);

}



displayElectrical(data);


});