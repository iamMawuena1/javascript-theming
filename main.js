const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark mode styles
/*function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = 'images/undraw_proud_coder_dark.svg';
    image2.src = 'images/undraw_feeling_proud_dark.svg';
    image3.src = 'images/undraw_conceptual_dark.svg';
}

function lightMode() {
    nav.style.backgroundColor = 'rgb(225 225 225 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src = 'images/undraw_proud_coder_light.svg';
    image2.src = 'images/undraw_feeling_proud_light.svg';
    image3.src = 'images/undraw_conceptual_light.svg';
}*/
// A DRY CODE
//Dark or Light Images
function imageMOde(color) {
    image1.src = `images/undraw_proud_coder_${color}.svg`;
    image2.src = `images/undraw_feeling_proud_${color}.svg`;
    image3.src = `images/undraw_conceptual_${color}.svg`;
}
//Dark mode styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMOde('dark');
}

function lightMode() {
    nav.style.backgroundColor = 'rgb(225 225 225 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMOde('light');
}


 

//Switch Theme
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

//Event Listner
toggleSwitch.addEventListener('change', switchTheme);

//Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
} 

    
