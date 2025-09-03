
const mobileMenu = document.getElementById("mobile-menu")

function toggleButton() {
    //console.log(mobileMenu.classList); // arr ['ábsolute',"hidden", etc mais classes deste elemento]

    // mobileMenu.classList.forEach(element => {
    //     console.log(element)

    //     if (element === "hidden") {
    //         mobileMenu.classList.remove("hidden")
    //     } else {
    //         mobileMenu.classList.add("hidden")
    //     }
    // });

    // faz o mesmo q em cima
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden")
    } else {
        mobileMenu.classList.add("hidden")
    }

}