const slides = [
    {
        title : "Aimbot",
        text: `De "Aimbot" is een project dat begonnen was om iets te doen aan de slechte aim van een klasgenoot. Het is een robot die autonomisch rond beweegt terwijl je het moet raken met een laserlamp. Door van dit toestel gebruik te maken kan je hopelijk je aim verbeteren en hoef je nooit meer uit te halen om je teamgenoten!`,
        image: "./images/aimbot.jpg",
        link: ["https://github.com/hamid1103/Aimbot3", "De code die door de aimbot gebruikt wordt is hier op github beschikbaar."]
    },
    {
        title : "Reserveringen Malle Babbe",
        text: "Dit is een custom-made reserveringssysteem voor het eetcafe Malle Babbe. Hiermee kunnen klanten reserveringen maken, en de eigenaren deze bekijken, aanpassen en verwijderen. Dit systeem is niet in gebruik genomen.",
        image: "./images/mb.png",
        link: ["#", "Code is niet openbaar beschikbaar."]
    },
    {
        title : "Bestelling",
        text: "Dit is slechts een onderdeel van een webservice die ingericht is om zo makkelijk mogelijk bruikbaar te zijn voor blind- en slechtzienden. Het bied een fijne interface die met screenreader software goed te navigeren is.",
        image: "./images/cle3.png",
        link: ["https://github.com/hamid1103/CLE3WebserviceApp", "Code op github."]
    },
    {
        title : "Het Meeuwen Banket",
        text: "Het Meeuwen Banket is een kleine game die geinspireerd is door de omgeving van Noordplein, Rotterdam. In deze game speel je als een meeuw die zijn best moet doen om te overleven... door eten te stelen!",
        image: "./images/meeuw.png",
        link: ["github.com", "Code op github."]
    }
];

let currentSlide;

let slide;
let h3;
let p;
let img;
let a;

let leftBtn;
let rightBtn;

window.addEventListener('load', e => init());

function init() {
    console.log('yeah yeah init')

    //content elements
    slide = document.getElementById('slide');
    h3 = document.getElementById('slide-title');
    p = document.getElementById('slide-text');
    img = document.getElementById('slide-img');
    a = document.getElementById('slide-link');

    //set buttons
    leftBtn = document.getElementById('left-btn');
    rightBtn = document.getElementById('right-btn');

    //listeners
    leftBtn.addEventListener('click', (e) => {
        console.log('click');
        let num = currentSlide == 0 ? slides.length - 1 : currentSlide - 1;
        setSlide(num);  
    });

    rightBtn.addEventListener('click', (e) => {
        let num = currentSlide == slides.length - 1 ? 0 : currentSlide + 1;
        setSlide(num);  
    });

    //load first content
    currentSlide = 0;
    setSlide(currentSlide);
}

function setSlide(num) {
    //maybe do some fade thing
    slide.style.transition = '.4s';
    slide.style.opacity = '0';
    slide.style.visibility = 'hidden';
    setTimeout(() => {
        //change values
        h3.innerHTML = slides[num].title;
        p.innerHTML = slides[num].text;
        img.src = slides[num].image;
        a.innerHTML = slides[num].link[1];
        a.href = slides[num].link[0];

        //update vars
        currentSlide = num;

        setTimeout(() => {
            slide.style.opacity = '1';
            slide.style.visibility = 'visible'
        }, 500);
    }, 500);
}

function setImg(num) {
    //nvt
}