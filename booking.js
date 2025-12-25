function goToConfirm(event) {
    event.preventDefault();

    // Get Step 1 data
    let data = JSON.parse(localStorage.getItem("bookingStep1")) || {};

    // Room selection
    let selectedRoom = document.querySelector('input[name="room"]:checked');
    if (!selectedRoom) {
        alert("Please select a room");
        return;
    }
    data.room = selectedRoom.value;

    // Food selection
    data.food = [];
    document.querySelectorAll(".food").forEach(item => {
        if(item.checked) data.food.push(item.value);
    });

    // Calculate price
    let roomPrice = 0;
    if(data.room === "Single") roomPrice = 1000;
    if(data.room === "Double") roomPrice = 2000;
    if(data.room === "Deluxe") roomPrice = 3000;

    let foodPrice = data.food.length * 300;
    data.total = roomPrice + foodPrice;

    // Save final data
    localStorage.setItem("bookingFinal", JSON.stringify(data));

    // Go to confirm page
    window.location.href = "confirm.html";
}