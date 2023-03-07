const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

function toggleDarkLightMode(isLight){
  nav.style.backgroundColor = isLight=='light'? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
  textBox.style.backgroundColor = isLight=='light'? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'
  toggleIcon.children[0].textContent = isLight=='light' ? 'Light Mode' : 'Dark Mode'
  isLight=='light' ? toggleIcon.children[1].classList.replace('fa-moon','fa-sun') : toggleIcon.children[1].classList.replace('fa-sun','fa-moon')
  isLight=='light'? imageMode('light') : imageMode('dark')
}

// Dark or light image
function imageMode(color){
  image1.src = `img/undraw_proud_coder_${color}.svg`
  image2.src = `img/undraw_feeling_proud_${color}.svg`
  image3.src = `img/undraw_conceptual_idea_${color}.svg`
}



// Switch theme function
function switchTheme(e){
  if(e.target.checked){
    document.documentElement.setAttribute('data-theme','dark')
    toggleDarkLightMode('dark')
    localStorage.setItem('theme','dark')
  }else{
    document.documentElement.setAttribute('data-theme','light')
    toggleDarkLightMode('light')
    localStorage.setItem('theme','light')
  }
}

// Event listener
toggleSwitch.addEventListener('change',switchTheme)

const currentTheme = localStorage.getItem('theme')
if(currentTheme){
  document.documentElement.setAttribute('data-theme',currentTheme)
  if(currentTheme === 'dark'){
    toggleSwitch.checked = true
    darkMode()
  }else{
    toggleIcon.checked = false
    lightMode()
  }
}