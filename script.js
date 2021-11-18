let $menu_mobile = document.querySelector('#menu-mobile')
let $nav_mobile = document.querySelector('#nav-mobile')
$menu_mobile.addEventListener('click',() => {
    console.log( $nav_mobile.classList)
    $nav_mobile.classList.toggle('hidden');
    $nav_mobile.classList.toggle('block')
    console.log( $nav_mobile.classList)

})