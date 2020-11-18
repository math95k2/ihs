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




    window.onscroll = function () {
        stickyMenu()
    };
};





async function getFooter() {
    let footer
    let footerUrl = "footer.html";
    let footerData = await fetch(footerUrl);
    footer = await footerData.text();

    document.querySelector("footer").innerHTML = footer;

}






function stickyMenu() {
    let header = document.querySelector("header");
    let mainMenu = document.querySelector("#main_menu");
    let headerLogo = document.querySelector("#header_logo_container")
    let getSticky = header.offsetTop;


    if (window.pageYOffset > getSticky) {
        header.classList.add("sticky_menu");
    } else {
        header.classList.remove("sticky_menu");
    };
    if (window.pageYOffset > 110) {
        mainMenu.classList.add("menu_shrink");
        headerLogo.classList.add("logo_shrink");
        document.querySelector("#header_menu").classList.add("header_menu_scrolled");

        document.querySelector("#kontakt_undermenu").classList.add("drop_shrink");

        document.querySelector("#om_undermenu").classList.add("drop_shrink");


    } else {
        mainMenu.classList.remove("menu_shrink");
        headerLogo.classList.remove("logo_shrink");
        document.querySelector("#header_menu").classList.remove("header_menu_scrolled");

        document.querySelector("#kontakt_undermenu").classList.remove("drop_shrink");

        document.querySelector("#om_undermenu").classList.remove("drop_shrink");
    };

}
