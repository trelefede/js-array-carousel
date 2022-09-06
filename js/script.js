console.log('js ok');

// creo array contenente immagini
const arrayImages = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// leggo il div container del carosello in html
const carousel = document.querySelector(".carousel")

let activeIndex = 0;

// ciclo for per aggiungere al div carousel le rispettive immagini con rispettive classi
for (let index = 0; index < arrayImages.length; index++) {
    const image = arrayImages[index];
    const classImage = index === activeIndex ? 'carousel-item active' : 'carousel-item';
    carousel.innerHTML += '<img class="' + classImage + '" src="images/' + image + '" alt="travel' + index + '">'
}

// leggo bottoni dal'html
const nextBtn = document.getElementById("next")
const previousBtn = document.getElementById("previous")

// creo gli eventi alla pressione di next
nextBtn.addEventListener("click", function () {
    console.log('next cliccato');

    if (activeIndex === arrayImages.length - 1) {
        activeIndex = -1;
    }

    // active index non deve superare mai la lunghezza dell'array
    if (activeIndex < (arrayImages.length - 1)) {
        activeIndex++;

        for (let index = 0; index < arrayImages.length; index++) {
            const image = arrayImages[index];
            const classImage = index === activeIndex ? 'carousel-item active' : 'carousel-item';
            carousel.innerHTML += '<img class="' + classImage + '" src="images/' + image + '" alt="travel' + index + '">'
        }
    }

    console.log(activeIndex);

})

// creo gli eventi alla pressione di previous
previousBtn.addEventListener("click", function () {
    console.log('previous cliccato');

    if (activeIndex === 0) {
        activeIndex = arrayImages.length;
    }

    // active index non deve mai andare sotto lo zero
    if (activeIndex > 0) {
        activeIndex--;

        for (let index = 0; index < arrayImages.length; index++) {
            const image = arrayImages[index];
            const classImage = index === activeIndex ? 'carousel-item active' : 'carousel-item';
            carousel.innerHTML += '<img class="' + classImage + '" src="images/' + image + '" alt="travel' + index + '">'
        }
    }
    console.log(activeIndex);

})






