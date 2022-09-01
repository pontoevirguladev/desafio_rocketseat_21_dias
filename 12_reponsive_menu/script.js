const menu = document.getElementById("menu");
const menuOptions = document.getElementById('menu-options');

menu.onclick = () => {
    menuOptions.classList.toggle("active");
}