function submitBooking(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let room = document.getElementById("room").value;

    let foodItems = [];
    let foodCheckboxes = document.querySelectorAll(".food");

    foodCheckboxes.forEach(item => {
        if (item.checked) {
            foodItems.push(item.value);
        }
    });

    if (foodItems.length === 0) {
        foodItems.push("No food selected");
    }

    // Pricing
    let roomPrice = 0;
    if (room === "Single") roomPrice = 1000;
    if (room === "Double") roomPrice = 2000;
    if (room === "Deluxe") roomPrice = 3000;

    let foodPrice = foodItems.length * 300;
    let total = roomPrice + foodPrice;

    alert(
        "Booking Successful!\n\n" +
        "Name: " + name + "\n" +
        "Room Type: " + room + "\n" +
        "Food Menu: " + foodItems.join(", ") + "\n" +
        "Check-in: " + checkin + "\n" +
        "Check-out: " + checkout + "\n" +
        "Total Price: ₹" + total
    );
}
