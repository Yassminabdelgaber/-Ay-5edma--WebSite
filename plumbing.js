const plumbingServices = [

{
    id:1,
name:"Pipe Repair",
image:"img/pipe-repair.jpg",
rating:4.9,
price:250,
description:
"Professional pipe repair and replacement services."
},


{
     id: 2,
name:"Water Leakage Repair",
image:"img/water-leak.jpg",
rating:4.8,
price:300,
description:
"Fast detection and repair of water leaks."
},


{
     id: 3,
name:"Bathroom Installation",
image:"img/bathroom-installation.jpg",
rating:4.9,
price:600,
description:
"Complete bathroom plumbing installation."
},


{
     id:4,
name:"Kitchen Plumbing",
image:"img/kitchen-plumbing.jpg",
rating:4.7,
price:350,
description:
"Kitchen sink and water system solutions."
},


{
     id: 5,
name:"Drain Cleaning",
image:"img/drain-cleaning.jpg",
rating:4.8,
price:200,
description:
"Professional drain cleaning service."
},


{
     id:6,
name:"Emergency Plumbing",
image:"img/plumbing-emergency.jpg",
rating:5,
price:450,
description:
"24/7 emergency plumbing support."
}


];





const container =
document.getElementById("servicesContainer");





function displayPlumbing(data){


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


<a href="plumbing-details.html?id=${service.id}" class="btn details-btn">

View Details

</a>



</div>



</div>


</div>



`;


});


}



displayPlumbing(plumbingServices);








// Search

document.getElementById("searchInput")
.addEventListener("input",function(){


let value=this.value.toLowerCase();



let filtered =
plumbingServices.filter(service =>


service.name.toLowerCase()
.includes(value)


);



displayPlumbing(filtered);


});








// Sort

document.getElementById("sortSelect")
.addEventListener("change",function(){


let data=[...plumbingServices];



if(this.value==="priceLow"){


data.sort((a,b)=>a.price-b.price);


}


else if(this.value==="priceHigh"){


data.sort((a,b)=>b.price-a.price);


}


else if(this.value==="rating"){


data.sort((a,b)=>b.rating-a.rating);


}



displayPlumbing(data);


});