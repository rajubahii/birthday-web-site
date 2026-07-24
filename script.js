function openGift() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("surprise").style.display = "block";
    document.getElementById("bgMusic").play();
}

// Photo Slideshow
let images = [
    "image/Screenshot_20260613_205559.jpg",
    "image/IMG_20260613_175239_904.jpg",
    "image/IMG-20260715-WA0007.jpg",
    "image/IMG-20260715-WA0003.jpg",
    "image/IMG-20250716-WA0001.jpg",
    "image/1000023158.jpg",
    "image/IMG-20260715-WA0009.jpg",
    "image/IMG-20260715-WA0008.jpg",
    "image/Screenshot_20260614_103249.jpg",
    "image/IMG_20250930_132104.jpg"

];

let index = 0;

setInterval(function () {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    document.getElementById("slide").src = images[index];

}, 5000);

// Final Surprise Message
function showMessage() {
    document.getElementById("msg").innerHTML =
    "💖 Once Again Happy Birthday! Stay Happy And Be Strong 🎂🎉❤️";
}