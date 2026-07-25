// ================= LOAD SELECTED SERVICE =================
// The service is chosen on a "*-details.html" page, which links here as
// booking.html?category=<category>&id=<id>. We read that here and use
// services-data.js (loaded before this file) to find the matching service.

const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const serviceId = Number(params.get("id"));

const selectedService =
    (typeof findService === "function") ? findService(category, serviceId) : null;

let bookingData = {
    category: category || "",
    serviceId: serviceId || "",
    serviceName: selectedService ? selectedService.name : "",
    price: selectedService ? selectedService.price : "",
    date: "",
    time: "",
    name: "",
    phone: "",
    address: ""
};

// ================= FILL SUMMARY CARD (right side) =================
function fillSummary(service){

    if(!service) return;

    const img = document.getElementById("summaryImage");
    const title = document.getElementById("summaryTitle");
    const rating = document.getElementById("summaryRating");
    const price = document.getElementById("summaryPrice");
    const duration = document.getElementById("summaryDuration");
    const availability = document.getElementById("summaryAvailability");

    if(img) img.src = service.image;
    if(img) img.alt = service.name;
    if(title) title.innerText = service.name;
    if(rating) rating.innerText = service.rating;
    if(price) price.innerText = service.price + " EGP";
    if(duration) duration.innerText = service.duration;
    if(availability) availability.innerText = service.availability;

    const reviewService = document.getElementById("reviewService");
    const reviewPrice = document.getElementById("reviewPrice");

    if(reviewService) reviewService.innerText = service.name;
    if(reviewPrice) reviewPrice.innerText = service.price + " EGP";
}

// If no valid service was passed in the URL, warn the user instead of
// silently showing placeholder "Service Name" / broken image.
if(!selectedService){

    const summaryCard = document.querySelector(".summary-card");

    if(summaryCard){
        summaryCard.innerHTML = `
            <h2>No Service Selected</h2>
            <p class="mt-3 mb-4" style="color:#64748B">
                Please go back and choose a service before booking.
            </p>
            <a href="services.html" class="btn next-btn">Browse Services</a>
        `;
    }

} else {
    fillSummary(selectedService);
}

// ================= STEP NAVIGATION =================
const steps = document.querySelectorAll(".step-box");
const progressSteps = document.querySelectorAll(".step");

let currentStep = 0;

function showStep(index){

    steps.forEach(step=>{
        step.classList.add("d-none");
    });

    steps[index].classList.remove("d-none");

    progressSteps.forEach((step,i)=>{

        if(i<=index){
            step.classList.add("active");
        }else{
            step.classList.remove("active");
        }

    });

}

showStep(0);

// ================= DATE =================
const dateCards = document.querySelectorAll("#step1 .date-card");

dateCards.forEach(card=>{

    card.addEventListener("click",()=>{

        dateCards.forEach(c=>c.classList.remove("active"));

        card.classList.add("active");

        bookingData.date = (card.innerText || card.textContent).trim();

    });

});

// ================= TIME =================
const timeCards = document.querySelectorAll("#step2 .date-card");

timeCards.forEach(card=>{

    card.addEventListener("click",()=>{

        timeCards.forEach(c=>c.classList.remove("active"));

        card.classList.add("active");

        bookingData.time = (card.innerText || card.textContent).trim();

    });

});

// ================= BUTTONS =================
const nextButtons = document.querySelectorAll(".next-btn");

nextButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        // Block booking entirely if no service was selected
        if(!selectedService){
            showToast("Please choose a service first.");
            return;
        }

        // Step1 Validation
        if(currentStep===0){

            if(bookingData.date===""){
                showToast("Please choose a date.");
                return;
            }

        }

        // Step2 Validation
        if(currentStep===1){

            if(bookingData.time===""){
                showToast("Please choose a time.");
                return;
            }

        }

        // Step3 Validation
        if(currentStep===2){

            const nameField = document.getElementById("userName");
            const phoneField = document.getElementById("userPhone");
            const addressField = document.getElementById("userAddress");

            bookingData.name = nameField ? nameField.value.trim() : "";
            bookingData.phone = phoneField ? phoneField.value.trim() : "";
            bookingData.address = addressField ? addressField.value.trim() : "";

            if(
                bookingData.name===""||
                bookingData.phone===""||
                bookingData.address===""){

                showToast("Please complete all fields.");
                return;

            }

            const phoneDigits = bookingData.phone.replace(/\D/g,"");

            if(phoneDigits.length < 10){
                showToast("Please enter a valid phone number.");
                return;
            }

        }

        // Confirm
        if(btn.id==="confirmBtn"){

            localStorage.setItem("booking",JSON.stringify(bookingData));

            document.getElementById("loadingScreen").classList.add("show");

            setTimeout(()=>{
                window.location.href="booking-success.html";
            },1800);

            return;

        }

        currentStep++;

        showStep(currentStep);

        // تحديث الـ Review عند الوصول لخطوة المراجعة
        if(currentStep===3){

            document.getElementById("reviewDate").innerText = bookingData.date;
            document.getElementById("reviewTime").innerText = bookingData.time;

            if(selectedService){
                document.getElementById("reviewService").innerText = selectedService.name;
                document.getElementById("reviewPrice").innerText = selectedService.price + " EGP";
            }

        }

    });

});

function showToast(message){

    const toast = document.getElementById("toast");

    document.getElementById("toastText").innerHTML = message;

    toast.classList.add("show");

    setTimeout(()=>{
        toast.classList.remove("show");
    },2500);

}
