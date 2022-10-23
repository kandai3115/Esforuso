const responsive_menu_btn = Document.querySelector('.responsive_btn');
responsive_menu_btn.addEventListener('click',menuToggle);
function menuToggle(){
    const header_menu_detail=Document.querySelector('.header_nav');
    header_menu_detail.classList.toggle('menu_active');
}
