const slides = [
    {
        title : "voorbeeld project 0",
        text: "ja dit is 1",
        image: "https://cataas.com/cat/says/1",
        link: ["github.com", "naar github"]
    },
    {
        title : "voorbeeld project 2",
        text: "ja dit is 2",
        image: "https://cataas.com/cat/says/2",
        link: ["", "heb geen git :("]
    },
    {
        title : "voorbeeld project 3",
        text: "ja dit is 3",
        image: "https://cataas.com/cat/says/3",
        link: ["github.com", "deze wel weer!"]
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