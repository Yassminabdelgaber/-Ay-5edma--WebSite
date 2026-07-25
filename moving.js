const movingServices = [

{
id:1,
name:"Home Moving",
image:"img/home-moving.jpg",
rating:4.9,
price:600,
description:"Complete home moving service with safe transportation."
},

{
id:2,
name:"Furniture Moving",
image:"img/furniture-moving.jpg",
rating:4.8,
price:400,
description:"Move your furniture safely without damage."
},

{
id:3,
name:"Packing Service",
image:"img/packing.jpg",
rating:4.9,
price:300,
description:"Professional packing for your valuable items."
},

{
id:4,
name:"Apartment Moving",
image:"img/apartment-moving.jpg",
rating:4.9,
price:1000,
description:"Complete apartment moving with careful packing and transportation."
},

{
id:5,
name:"Loading & Unloading",
image:"img/loading.jpg",
rating:4.8,
price:250,
description:"Professional loading and unloading assistance."
},

{
id:6,
name:"Emergency Moving",
image:"img/emergency-moving.jpg",
rating:5,
price:900,
description:"Fast moving solutions when you need them."
}

];




const container =
document.getElementById("servicesContainer");





function displayMoving(data){


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






<a href="moving-details.html?id=${service.id}" class="details-btn">
    View Details
    <i class="fa-solid fa-arrow-right"></i>
</a>



</div>




</div>



</div>



`;



});


}




displayMoving(movingServices);







// Search


document.getElementById("searchInput")
.addEventListener("input",function(){


let value=this.value.toLowerCase();



let filtered = movingServices.filter(service=>


service.name.toLowerCase()
.includes(value)


);



displayMoving(filtered);


});








// Sort


document.getElementById("sortSelect")
.addEventListener("change",function(){



let data=[...movingServices];



if(this.value==="priceLow"){


data.sort((a,b)=>a.price-b.price);


}



else if(this.value==="priceHigh"){


data.sort((a,b)=>b.price-a.price);


}



else if(this.value==="rating"){


data.sort((a,b)=>b.rating-a.rating);


}



displayMoving(data);



});