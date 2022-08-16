const menu_open = document.getElementById("menu-open");
const menu = document.getElementById("menu");
const menu_close = document.getElementById("close");

console.log(menu_close.innerHTML);

menu_open.addEventListener("click", ()=>{
  menu.style.display = "block";
})
menu_close.addEventListener("click", ()=>{
  menu.style.display = "none";
})