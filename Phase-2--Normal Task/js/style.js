let tablinks = document.getElementsByClassName('tab_links');
let tabcontents = document.getElementsByClassName('tab_contents');
const myNav = document.getElementById('header');

function opentab(tabname){
for(tablink of tablinks){
     tablink.classList.remove("active_link");
            }
 for(tabcontent of tabcontents){
    tabcontent.classList.remove("active_tab");
            }
 event.currentTarget.classList.add("active_link");
            document.getElementById(tabname).classList.add("active_tab");
}


window.onscroll = () => {
    if (window.scrollY > 50) {
        myNav.classList.add('nav-active');
    } else {
        myNav.classList.remove('nav-active');
    }
};

const sr = ScrollReveal({
    origin:'top',
    distance:'50px',
    duration:'2000',
    delay:400,
})

sr.reveal('.container_left');
sr.reveal('.container_right',{origin:'bottom'})
sr.reveal('.about_left',{origin:'left'})
sr.reveal('.about_right',{origin:'right'})
sr.reveal('.work',{interval:200})
sr.reveal('.conatct_left',{origin:'left'})
sr.reveal('.contact_right',{origin:'right'})


const menu = document.querySelector(".links");
const menuBtn = document.querySelector("#menu_btn");
const closeBtn = document.querySelector("#close_btn");


menuBtn.addEventListener('click',() =>{
    menu.style.display ="flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () =>{
    menu.style.display ="none";
    closeBtn.style.display ="none";
    menuBtn.style.display ="inline-block";
}

closeBtn.addEventListener('click', closeNav)