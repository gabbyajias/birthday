// Sample data for events
const events = [
    { image: "Screenshot 2024-01-11 145358.png", text: "Event 1 description" },
    { image: "b.b", text: "Event 2 description" },
    { image: "event3.jpg", text: "Event 3 description" },
    { image: "event4.jpg", text: "Event 4 description" },
    { image: "event5.jpg", text: "Event 5 description" }
];

// Function to update displayed content based on the selected year
function showEvent(index) {
    const currentImage = document.getElementById("currentImage");
    const currentText = document.getElementById("currentText");

    currentImage.src = events[index - 1].image;
    currentText.textContent = events[index - 1].text;
}

// Initial content for the current day
document.addEventListener("DOMContentLoaded", function () {
    showEvent(1); // Display the content for the current year on page load
});
