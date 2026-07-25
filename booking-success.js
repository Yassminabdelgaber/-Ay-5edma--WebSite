const bookingRaw = localStorage.getItem("booking");
const booking = bookingRaw ? JSON.parse(bookingRaw) : null;

// If someone lands on this page directly with no booking in progress,
// send them back home instead of crashing on booking.name.
if(!booking || !booking.date){

    window.location.href = "index.html";

} else {

    const randomID = "AY-" + Math.floor(Math.random()*900000 + 100000);

    document.getElementById("bookingId").innerHTML = randomID;

    document.getElementById("customerName").innerHTML = booking.name || "-";

    document.getElementById("bookingDate").innerHTML = booking.date || "-";

    document.getElementById("bookingTime").innerHTML = booking.time || "-";

    // Add the service name and price to the confirmation, right before
    // the "Back Home" button, if that info was captured.
    if(booking.serviceName){

        const infoBox = document.querySelector(".booking-info");

        if(infoBox){
            infoBox.insertAdjacentHTML("beforeend", `
                <p>
                    <b>Service</b>
                    <span>${booking.serviceName}</span>
                </p>
                <p>
                    <b>Price</b>
                    <span>${booking.price} EGP</span>
                </p>
            `);
        }

    }

    // Clear the booking so refreshing this page or navigating back
    // doesn't show/reuse stale data.
    localStorage.removeItem("booking");

}
