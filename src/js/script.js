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
