function goToBooking(event) {
    event.preventDefault();

    let data = {
        name: document.getElementById("name").value,
        checkin: document.getElementById("checkin").value,
        checkout: document.getElementById("checkout").value
    };

    localStorage.setItem("bookingStep1", JSON.stringify(data));
    window.location.href = "booking.html";
}