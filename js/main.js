// Select dom items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuAvatar = document.querySelector('.menu-avatar');
const menuUl = document.querySelector('.menu-nav');
const ulItem = document.querySelectorAll('.nav-item');
// inital state of menu
let showMenu = false;
console.log(ulItem);
menuBtn.addEventListener('click',Switcher);

function Switcher(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuAvatar.classList.add('show');
        menuUl.classList.add('show');
        ulItem.forEach(item =>
            item.classList.add('show'));

        showMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuAvatar.classList.remove('show');
        menuUl.classList.remove('show');
        ulItem.forEach(item =>
            item.classList.remove('show'));
        showMenu = false;
    }
}

