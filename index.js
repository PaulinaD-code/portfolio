const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')




navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

let introContainer = document.querySelector('.js-intro');

function addClassName(){
  introContainer.clasName = "intro js-intro intro-visible"
}

addClassName();

