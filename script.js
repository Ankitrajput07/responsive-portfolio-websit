// Navbar, Logo, and Sections
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');

// Reset all active classes
const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    barsBox.classList.remove('active');

    setTimeout(() => {
        header.classList.add('active');
        barsBox.classList.add('active');
    }, 1100);

    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
};

// Navigation click to switch sections
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

// Logo click to go Home
logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

// Resume Section Button Toggle
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

// Portfolio Carousel Navigation
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');

    // Slide images using translateX
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    // Active detail box update
    portfolioDetails.forEach(detail => detail.classList.remove('active'));
    portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < portfolioDetails.length - 1) {
        index++;
        arrowLeft.classList.remove('disabled');
    }

    if (index === portfolioDetails.length - 1) {
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    }

    if (index === 0) {
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});

// Optional: Activate Home section on page load
document.addEventListener('DOMContentLoaded', () => {
    activePage();
    navLinks[0].classList.add('active');
    sections[0].classList.add('active');
});

// Mobile Navigation (Hamburger Menu)
const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('header nav');

// Toggles the .show class on the nav menu when the icon is clicked
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Closes the mobile menu when a navigation link is clicked
const navLinksMobile = document.querySelectorAll('header nav a');
navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});


// EmailJS Contact Form
const contactForm = document.getElementById('contact-form');
const sendButton = contactForm.querySelector('button[type="submit"]');

// Initialize EmailJS with your Public Key
(function() {
    emailjs.init('F2N3vkRoA-EDK2H8u'); // <--- Replace with your Public Key
})();

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const serviceID = 'service_lkryvml'; // <--- Replace with your Service ID
    const templateID = 'template_5a13sg2'; // <--- Replace with your Template ID

    // Change button text to show it's working
    sendButton.textContent = 'Sending...';
    sendButton.disabled = true;

    // Send the form data using EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            // On Success
            sendButton.textContent = 'Message Sent!';
            alert('Your message has been sent successfully!');
            contactForm.reset(); // Clears the form fields
            
            // Reset button text after a few seconds
            setTimeout(() => {
                sendButton.textContent = 'Send Message';
                sendButton.disabled = false;
            }, 4000);

        }, (err) => {
            // On Error
            sendButton.textContent = 'Send Message';
            sendButton.disabled = false;
            alert('Failed to send the message. Please try again. Error: ' + JSON.stringify(err));
        });
});