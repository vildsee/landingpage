/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const isViewport = (sections) => {
    const distance = sections.getBoundingClientRect();
    return (
        distance.top >= -400 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const buildNav = (items) => {
    for (item of items) {
    
    const navItem = document.createElement('li');    
    const navLink = document.createElement('a');
    
    navItem.className = 'navbar__item';
    navLink.className = 'menu__link'
    navLink.innerHTML = `${item.dataset.nav}`;
    navLink.id = `${item.id}`;
    navLink.href = `#${item.id}`;
  
    navItem.appendChild(navLink);
    document.querySelector('#navbar__list').appendChild(navItem);
    
    }
};
   
buildNav(sections);

// Add class 'active' to section when near top of viewport
const activator = (sections) => {
window.addEventListener('scroll', () => {
    
for (section of sections) {
    const currentLink = document.getElementById(`${section.id}`);
    if (isViewport(section)) {
        
        section.classList.add('your-active-class');
        currentLink.classList.add('active');
    }   else {
        
        section.classList.remove('your-active-class');
        currentLink.classList.remove('active');
    }    
};
}, false);
};
activator(sections);

// Scroll to anchor ID using scrollTO event

document.querySelectorAll('.navbar__menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
    // Scroll to section on link click
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


