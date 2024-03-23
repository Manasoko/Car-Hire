var drop = document.querySelector('.backdrop');
var mobileNav = document.querySelector('.mobile-nav');
var toggle = document.querySelector('.toggle-button');
var closeNav = document.querySelector('.close');

closeNav.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});


function closeModal() {
    drop.classList.remove('open')
    setTimeout(function () {
        ;drop.style.display = "none";
    }, 200)
}

toggle.addEventListener('click', function(){
    mobileNav.classList.add('open'); 
    drop.style.display = "block";
    setTimeout(function () {
        drop.classList.add('open');
    }, 10);
});