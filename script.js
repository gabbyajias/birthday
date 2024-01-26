// Sample data for events
const events = [
    { image: "baby.JPEG", text: "The first and most important event was me being born. I was born in Huntington Hospital located in long island at 7:55 PM" },
              
    { image: "flag.webp", text: "On December 30, 1922, the Union of Soviet Socialist Republics (USSR) was officially established, having its capital in Moscow. This event marked the consolidation of power by the Bolsheviks led by Vladimir Lenin after the Russian Revolution of 1917. The USSR encompassed 15 republics, including the Russian SFSR, Ukrainian SSR, Byelorussian SSR, and others. It was the largest country in the world by area until its dissolution in 1991. The Soviet Union played a significant role in global affairs during the Cold War, emerging as one of the superpowers alongside the United States. The dissolution took place on December 26, 1991, leading to the formation of the Commonwealth of Independent States (CIS) and the independence of the individual republics, with Russia as its successor state." },
    { image: "bron.webp", text: " Born on this date in 1984, LeBron James went on to become a basketball icon, achieving superstar status in the NBA with his exceptional skills and contributions to the sport. Throughout his career, he has garnered widespread recognition for his athleticism, leadership, and impact both on and off the basketball court." },
    { image: "coal.webp", text: "The British government made an announcement indicating the substitution of canaries with electronic sensors for the detection of carbon monoxide in coal mines as an early-warning measure. This change reflects a modernization in safety practices, aligning with technological advancements to enhance the protection of miners from potential hazards. The implementation of electronic sensors signifies a progressive shift towards more reliable and sophisticated methods for monitoring air quality in coal mines." },
    { image: "mex.webp", text: " Through the Gadsden Purchase, the United States expanded its territory by acquiring approximately 30,000 square miles (78,000 square km) in the northern regions of Mexico. This transaction, marked by the signing of the Gadsden Purchase, played a significant role in shaping the geographic boundaries of the southwestern United States. The acquisition aimed to facilitate the construction of a transcontinental railroad and further solidify the nation's interests in the expanding western frontier during the mid-19th century." }
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

function showEvent(index) {
    const currentImage = document.getElementById("currentImage");
    const currentText = document.getElementById("currentText");

    currentImage.src = events[index - 1].image;
    currentText.textContent = events[index - 1].text;

   
    const targetWidth = 3 * 250; // 600 pixels
    const targetHeight = 3 * 200; // 450 pixels

    currentImage.style.width = targetWidth + 'px';
    currentImage.style.height = targetHeight + 'px';
}

document.addEventListener("DOMContentLoaded", function () {
    showEvent(1);
});