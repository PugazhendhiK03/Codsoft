// script.js
function cta() {
    alert('Sign up functionality coming soon!');
}

// Example: Add a smooth scroll effect for feature section links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
