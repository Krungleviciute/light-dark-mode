const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('navigation');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';


const toggleThemeMode = (mode) => {
    nav.style.backgroundColor = mode === DARK_THEME ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
    textBox.style.backgroundColor = mode === DARK_THEME ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = mode === DARK_THEME ? 'Dark Mode' : 'Light Mode';
    mode === DARK_THEME ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    toggleImageMode(mode === DARK_THEME ? DARK_THEME : LIGHT_THEME)
}

const toggleImageMode = (mode) => {
    image1.src = `img/undraw_travel_mode_${mode}.svg`;
    image2.src = `img/undraw_Yacht_re_${mode}.svg`;
    image3.src = `img/undraw_sunlight_${mode}.svg`;
}

//Switching theme dinamically
const switchTheme = (event) => {
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
        toggleThemeMode(DARK_THEME)
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME)
        localStorage.setItem('theme', LIGHT_THEME)
        toggleThemeMode(LIGHT_THEME)
    }
}

toggleSwitch.addEventListener('change', switchTheme)

//Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');

if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === DARK_THEME){
        toggleSwitch.checked = true;
        toggleThemeMode(DARK_THEME)
    }
}
