const NomDuBouton = document.querySelector('.header__menu-btn');
const NomDuMenu = document.querySelector('.header__menu');

NomDuBouton.addEventListener("click", () =>{
    toggle(NomDuBouton, NomDuMenu)
});

function toggle (btn, menu)  {
    console.log("Je fonctionne !")

    const isOpen = btn.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);

    menu.ariaHidden = isOpen;
    btn.ariaExpanded = isClosed;
}




const carousel = document.querySelector(".caroussel__item");
const prevButton = document.querySelector(".carousel__button carousel__button--prev");
const nextButton = document.querySelector(".carousel__button carousel__button--next");
const premierItem = document.querySelector(".image-carroussel__hero");

if (carousel && prevButton && nextButton && premierItem) {
    prevButton.addEventListener("click", () => {
        const scrollAmount = premierItem.clientWidth;
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        const scrollAmount = premierItem.clientWidth;
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}





