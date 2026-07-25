const maintenanceServices = [

{
id:1,
name:"Home Repair",
image:"img/home-repair.jpg",
rating:4.9,
price:250,
description:"Professional repair solutions for all home problems."
},


{
id:2,
name:"AC Maintenance",
image:"img/ac-maintenance.jpg",
rating:4.8,
price:300,
description:"Cleaning and repairing air conditioning systems."
},


{
    id:3,
name:"Electrical Maintenance",
image:"img/electrical-maintenance.jpg",
rating:4.9,
price:220,
description:"Safe electrical inspection and repair services."
},


{
    id:4,
name:"Water System Repair",
image:"img/water-repair.jpg",
rating:4.7,
price:280,
description:"Fixing water leaks and plumbing problems."
},


{
    id:5,
name:"Kitchen Maintenance",
image:"img/kitchen-maintenance.jpg",
rating:4.8,
price:350,
description:"Kitchen equipment maintenance and installation."
},


{
    id:6,
name:"Emergency Maintenance",
image:"img/emergency-maintenance.jpg",
rating:5,
price:400,
description:"Fast emergency home maintenance service."
}

];





const container =
document.getElementById("servicesContainer");





function displayServices(data){


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



<a href="maintenance-details.html?id=${service.id}" class="details-btn">
    View Details
    <i class="fa-solid fa-arrow-right"></i>
</a>


</div>


</div>


</div>



`;



});


}



displayServices(maintenanceServices);






// Search

document.getElementById("searchInput")
.addEventListener("input",function(){


let value=this.value.toLowerCase();



let filtered =
maintenanceServices.filter(service=>


service.name.toLowerCase()
.includes(value)


);



displayServices(filtered);



});







// Sort


document.getElementById("sortSelect")
.addEventListener("change",function(){


let data=[...maintenanceServices];



if(this.value==="priceLow"){


data.sort((a,b)=>a.price-b.price);


}


else if(this.value==="priceHigh"){


data.sort((a,b)=>b.price-a.price);


}


else if(this.value==="rating"){


data.sort((a,b)=>b.rating-a.rating);


}



displayServices(data);



});