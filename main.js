const closeBtn = document.querySelector(".close-nav");
const openBtn = document.querySelector(".burger-nav");
const navBar = document.querySelector(".nav-bar");
const navItem = document.querySelectorAll(".nav-item");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

const hide =  document.querySelector(".hide");
const active = document.querySelector(".active");


const skillOneBtn = document.querySelector(".skills-one");
const skillTwoBtn = document.querySelector(".skills-two");
const skillThreeBtn = document.querySelector(".skills-three");
const desOne = document.querySelector(".des-one");
const desTwo = document.querySelector(".des-two");
const desThree = document.querySelector(".des-three");

function activeFunc() {
    navBar.classList.add('active');
    openBtn.classList.add('hide');
    closeBtn.classList.add('active');
}

function closeFunc() {
    navBar.classList.remove('active');
    openBtn.classList.remove('hide');
    closeBtn.classList.remove('active');
}

function showFirstSkill() {
    desOne.classList.add('active');
    skillOneBtn.classList.add('special-option');

    desTwo.classList.remove('active');
    desTwo.classList.add('hide');
    skillTwoBtn.classList.remove('special-option');

    desThree.classList.remove('active');
    desThree.classList.add('hide');
    skillThreeBtn.classList.remove('special-option');
} 

function showSecondSkill() {
    desOne.classList.remove('active');
    desOne.classList.add('hide');
    skillOneBtn.classList.remove('special-option');


    desTwo.classList.add('active');
    skillTwoBtn.classList.add('special-option');

    desThree.classList.remove('active');
    desThree.classList.add('hide');
    skillThreeBtn.classList.remove('special-option');
} 

function showThirdSkill() {
    desOne.classList.remove('active');
    desOne.classList.add('hide');
    skillOneBtn.classList.remove('special-option');

    desTwo.classList.remove('active');
    desThree.classList.add('hide');
    skillTwoBtn.classList.remove('special-option');

    desThree.classList.add('active');
    skillThreeBtn.classList.add('special-option');
} 

openBtn.addEventListener("click", activeFunc);
closeBtn.addEventListener("click", closeFunc);
one.addEventListener("click", closeFunc);
two.addEventListener("click", closeFunc);
three.addEventListener("click", closeFunc);
four.addEventListener("click", closeFunc);

skillOneBtn.addEventListener("click", showFirstSkill);
skillTwoBtn.addEventListener("click", showSecondSkill);
skillThreeBtn.addEventListener("click", showThirdSkill);