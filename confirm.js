let data = JSON.parse(localStorage.getItem("bookingFinal"));

let summary = document.getElementById("summary");

// Room image
let roomImg = "";
if(data.room === "Single") roomImg = "images/single.jpg";
if(data.room === "Double") roomImg = "images/double.jpg";
if(data.room === "Deluxe") roomImg = "images/deluxe.jpg";

summary.innerHTML = `
<p><b>Name:</b> ${data.name}</p>
<p><b>Check-in:</b> ${data.checkin}</p>
<p><b>Check-out:</b> ${data.checkout}</p>
<p><b>Room:</b> ${data.room}</p>
<img src="${roomImg}" width="200"><br>
<p><b>Food:</b> ${data.food.join(", ") || "None"}</p>
<p><b>Total Price:</b> ₹${data.total}</p>
`;

function confirmBooking() {
    alert("Booking Confirmed!\nThank you!");
    localStorage.clear();
    window.location.href = "index.html";
}