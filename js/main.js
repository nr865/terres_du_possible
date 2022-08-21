const mediumScreen = document.querySelector('.medium-screen');
const largeScreen = document.querySelector('.large-screen');

const logo = document.querySelector('.logo');
const title = document.querySelector('.title');
const h1 = document.querySelector('.h1');
const h1Short = document.querySelector('.h1Short');
const citation = document.querySelector('.citation');
const hamburgerIcon = document.querySelector('.hamburger-icon')
const nav = document.getElementsByTagName('nav')[0];
const navLinks = document.querySelectorAll('.nav-link');
const navbarNav = document.querySelectorAll('#navbarNav')[0];
const project = document.querySelector('#project');

const sections = document.getElementsByTagName('section');
const links = document.querySelectorAll('.link');
const actors =  document.querySelector('.dropbtn');

var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");

let indexWhite = 0;

// bouton hamburger
icon.addEventListener('click', closeNav);

function closeNav(){
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    indexWhite++;
    if(indexWhite % 2 != 0){
          nav.classList.add('white'); 
    }
    else{
      setTimeout(function() {
          nav.classList.remove('white');
      },400)
    }
}

if(window.getComputedStyle(mediumScreen, null).display != 'none'){
    nav.classList.add('white');
}


// fermeture du menu au click sur l'un des onglets
navLinks.forEach(el=>{
    el.addEventListener('click',()=>{
        if(window.getComputedStyle(mediumScreen, null).display == 'none'){
            navbarNav.classList.toggle('show');
            closeNav();
        }
    })
})

// modification du header au scroll
window.addEventListener('scroll',()=>{

    /*  rétrécissement de la partie réservée au titre
        version écran > 992px et version mobile
    */
    if(window.getComputedStyle(largeScreen, null).display != 'none'){
        if (document.documentElement.scrollTop > 50) {
            title.style.paddingTop = "15px";
            logo.style.width = "60px";
            h1.style.fontSize = "1.2rem";
            citation.style.fontSize = "1.05rem";
            h1.style.marginTop = "-10px";

        } else {
            title.style.paddingTop = "70px";
            logo.style.width = "100px";
            h1.style.fontSize = "1.5rem";
            citation.style.fontSize = "1.3rem";
        }
    }
    else if(window.getComputedStyle(mediumScreen, null).display != 'none'){
        if (document.documentElement.scrollTop > 50) {
            title.style.paddingTop = "25px";
            title.style.paddingBottom = "5px";
            logo.style.width = "60px";
            h1.style.fontSize = "1.2rem";
            citation.style.fontSize = "1.05rem";
            h1.style.marginTop = "-10px";
            project.style.marginTop = "300px";

        } else {
            title.style.paddingTop = "60px";
            title.style.paddingBottom = "10px";
            logo.style.width = "80px";
            h1.style.fontSize = "1.45rem";
            citation.style.fontSize = "1.1rem";
            project.style.marginTop = "270px";
        }
    }
    else{
        if (document.documentElement.scrollTop>50) {
            citation.style.display = 'none';
            h1Short.style.display = 'block';
            h1.style.display = 'none';
            logo.style.width = '60px';
            hamburgerIcon.style.transform = 'scale(1)';
            hamburgerIcon.style.top = '32px';

            if(indexWhite % 2 != 0){
                nav.classList.add('white');
            }
            else{
                nav.classList.remove('white'); 
            }
            nav.style.top = '0';
            project.style.marginTop = '220px'

        } 
        else {
            citation.style.display = 'block';
            h1Short.style.display = 'none';
            h1.style.display = 'block';
            logo.style.width = '70px';
            hamburgerIcon.style.transform = 'scale(1.2)';
            hamburgerIcon.style.top = '35px';
            if(indexWhite % 2 != 0){
                nav.classList.add('white');
            }
            else{
                nav.classList.remove('white'); 
            }
            nav.style.top = '-210px';
            project.style.marginTop = '350px'
        }
    }
}
)


// carrousel de photos
let photos = []
for (let i = 1; i < 13; i++) {
    photos.push(document.querySelector('#photo'+i))
}
const cover = document.querySelector('.cover');

const carrousel = document.querySelector('.carrousel');
const imageCarrousel1 = document.querySelector('#carrousel1');

if(window.getComputedStyle(largeScreen, null).display == 'none'){
    carrousel.classList.add('active');
    imageCarrousel1.classList.add('active');
}

let photosCarrousel = []
for (let i = 1; i < 13; i++) {
    photosCarrousel.push(document.querySelector('#carrousel'+i))
}

const btnNext = document.querySelector('.next');
const btnPrevious = document.querySelector('.previous');
const close = document.querySelector('.bi-x-lg');
let i;
let nbImages = photosCarrousel.length;


// affichage du fond noir transparent et du carrousel au clic sur une photo
photos.forEach(el=>{
    el.addEventListener('click',(e)=>{
        /*on récupère le n° dans l'id de la photo pour commencer le slider
        par la photo correspondante dans la partie carrousel
        */
        
        i = +e.target.id.match(/\d+/g)
        document.querySelector('#carrousel'+i).classList.add('active');
        i--;
        cover.classList.add('active');
        carrousel.classList.add('active');
    })
})
// si clic sur l'une des photos let i = le numéro de la photo


// disparition du carroussel au clic sur la croix en haut à droite
close.addEventListener('click',(e)=>{
    carrousel.classList.remove('active');
    cover.classList.remove('active');
})


// défilement des photos vers la droite et vers la gauche 
function next(e){
    /* si écran de téléphone on affiche seulement le diaporama
    donc l'utilisateur ne clique pas sur une photo et i reste undefined
    si i n'est pas undefined, il a la valeur du n° de la photo -1
    */
    if(i==undefined){
        photosCarrousel[0].classList.remove('active');
        i=0;
    }
    else{
        photosCarrousel[i].classList.remove('active');
    }

    if (i < nbImages -1){
        
        i++;

    }
    else {
        i = 0;
    }

    /* bouton close dans la div .next, 
     si clic ailleurs que sur la croix, rajouter la classe 'active' */
    if(e.target.classList[1]!='bi-x-lg'){
        photosCarrousel[i].classList.add('active');
    }

}
btnNext.addEventListener("click",(e)=>{
    next(e)
});

function previous(){
    photosCarrousel[i].classList.remove('active');
    if ( i > 0 ){
        i--;
    }
    else {
        i = nbImages-1;
    }
    photosCarrousel[i].classList.add('active');
}

btnPrevious.addEventListener("click",previous);


// Owl-carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav:true,
        dots:true,
        dotsEach:4,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3,
                margin:20,
                slideBy:3
            },
            992:{
                items:4,
                margin:20,
                slideBy:4
            }
        }
    });
    });