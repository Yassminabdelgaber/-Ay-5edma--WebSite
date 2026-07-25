const furnitureServices = [

{
id:1,
name:"Furniture Assembly",
image:"img/furniture-assembly.jpg",
rating:4.9,
price:300,
description:
"Professional furniture assembly and installation."
},


{
id:2,
name:"Wardrobe Installation",
image:"img/wardrobe.jpg",
rating:4.8,
price:450,
description:
"Expert wardrobe installation with perfect finishing."
},


{
id:3,
name:"Kitchen Furniture Installation",
image:"img/kitchen-furniture.jpg",
rating:4.9,
price:700,
description:
"Complete kitchen furniture installation service."
},


{
id:4,
name:"Bed Assembly",
image:"img/bed-assembly.jpg",
rating:4.7,
price:250,
description:
"Fast and safe bed installation."
},


{
id:5,
name:"TV Unit Installation",
image:"img/tv-unit.jpg",
rating:4.8,
price:350,
description:
"Modern TV unit mounting and installation."
},


{
id:6,
name:"Office Furniture Setup",
image:"img/office-furniture.jpg",
rating:5,
price:600,
description:
"Professional office furniture arrangement."
}


];





const container =
document.getElementById("servicesContainer");






function displayFurniture(data){


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





<a href="furniture-details.html?id=${service.id}" class="btn details-btn">

View Details

</a>




</div>




</div>



</div>



`;



});


}




displayFurniture(furnitureServices);







// Search


document.getElementById("searchInput")
.addEventListener("input",function(){


let value=this.value.toLowerCase();



let filtered = furnitureServices.filter(service=>


service.name.toLowerCase()
.includes(value)


);



displayFurniture(filtered);


});







// Sort


document.getElementById("sortSelect")
.addEventListener("change",function(){


let data=[...furnitureServices];



if(this.value==="priceLow"){


data.sort((a,b)=>a.price-b.price);


}



else if(this.value==="priceHigh"){


data.sort((a,b)=>b.price-a.price);


}



else if(this.value==="rating"){


data.sort((a,b)=>b.rating-a.rating);


}



displayFurniture(data);



});