console.log('js ok');

// creo array contenente immagini
const arrayImages = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// leggo il div container del carosello in html
const carousel = document.querySelector(".carousel")

for (let index = 0; index < arrayImages.length; index++) {
    carousel.innerHTML = '<img class="carousel-item active" src="images/' + arrayImages[0] + '" alt="travel1">'
    const previousBtn = document.getElementById("previous").addEventListener("click", function () {
        carousel.innerHTML = '<img class="carousel-item active" src="images/' + arrayImages[index--] + '" alt="travel1">'
    })
    const nextBtn = document.getElementById("next").addEventListener("click", function () {
        carousel.innerHTML = '<img class="carousel-item active" src="images/' + arrayImages[index++] + '" alt="travel1">'
    })
}





