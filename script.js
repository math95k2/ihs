//Burgermenu

document.addEventListener("DOMContentLoaded", getMenu);



async function getMenu() {
    let menu
    let menuUrl = "menu.html";
    let menuData = await fetch(menuUrl);
    menu = await menuData.text();

    document.querySelector("header").innerHTML = menu;
    constructMenu();
    getFooter();


}


function constructMenu() {

    const menuBtn = document.querySelector(".menu_btn");
    const menuNav = document.querySelector("#header_menu");
    let menuOpen = false;



    menuBtn.addEventListener("click", () => {
        if (menuOpen == false) {
            menuBtn.classList.add("open");
            menuNav.classList.remove("hidden");
            menuOpen = true;
        } else {
            menuBtn.classList.remove("open");
            menuNav.classList.add("hidden");
            menuOpen = false;
        }
    })
};





async function getFooter() {
    let footer
    let footerUrl = "footer.html";
    let footerData = await fetch(footerUrl);
    footer = await footerData.text();

    document.querySelector("footer").innerHTML = footer;

}
