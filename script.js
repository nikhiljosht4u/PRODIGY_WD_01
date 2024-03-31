const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#333'; 
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

const navLinks = document.querySelectorAll('.nav_link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#12121282'; 
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    window.location.href = `message.html?name=${firstName}+${lastName}`;
}

