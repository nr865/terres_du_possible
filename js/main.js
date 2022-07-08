const logo = document.querySelector('.logo');
const title = document.querySelector('.title');
const titleH1 = document.querySelector('.titleH1');

console.log(logo);

window.onscroll=function(){

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop>50) {
        title.style.paddingTop = "15px";
        logo.style.width = "60px";
        titleH1.style.marginTop = "-40px";
        titleH1.style.fontSize = "1.2rem";
    } else {
        title.style.paddingTop = "70px";
        logo.style.width = "100px";
        titleH1.style.marginTop = "2.5%";
        titleH1.style.fontSize = "1.5rem";


    }
}


