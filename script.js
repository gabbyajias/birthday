// Sample data for events
const events = [
    { image: "baby.JPEG", text: "Event 1 description" },
    { image: "flag.webp", text: "Event 2 description" },
    { image: "bron.webp", text: "Event 3 description" },
    { image: "coal.webp", text: "Event 4 description" },
    { image: "mex.webp", text: "Event 5 description" }
];


function showEvent(index) {
    const currentImage = document.getElementById("currentImage");
    const currentText = document.getElementById("currentText");

    currentImage.src = events[index - 1].image;
    currentText.textContent = events[index - 1].text;
}

document.addEventListener("DOMContentLoaded", function () {
    showEvent(1); 
});
