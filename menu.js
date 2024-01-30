document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("menu-button").addEventListener("click",showMenu)

    document.getElementById("close-menu").addEventListener("click",closeMenu)

    

    function showMenu(){
        console.log("I'm click");
       const menu=  document.querySelector("section.menu");
        menu.style.height="100%";
    }

    function closeMenu(){
        const menu=  document.querySelector("section.menu");
        menu.style.height="0";
    }

    function addClicktoMenuItems(){
     const menuItems=   document.querySelectorAll("section.menu nav ul>li");

     for (const menuItem of menuItems) {
        menuItem.addEventListener("click",closeMenu);
     }
    }
    addClicktoMenuItems();
})