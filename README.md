# responsive-portfolio-websit
A dynamic and responsive personal portfolio for Ankit Rajput, a developer passionate about Data Science, AI/ML, and modern Web Development. This single-page site showcases projects, skills, and experience through a clean interface with smooth animations. Built with HTML5, CSS3, and vanilla JavaScript, and includes a functional contact form.


# Ankit Rajput - Personal Portfolio Website

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A dynamic, fully responsive, single-page portfolio website built to showcase my skills in Data Science, AI/ML, and Web Development.

---

### [Live Demo](https://your-username.github.io/your-repo-name/)

**(Add a link to your deployed website here)**

---

![Portfolio Screenshot](./screenshot.png)
**(To add a screenshot, take a picture of your website, name it `screenshot.png`, and place it in your project's root folder.)**

## About The Project

This project is a personal portfolio created from scratch to serve as a central hub for my professional information. It features a clean, modern design with smooth animations to provide an engaging user experience. The site is structured as a single-page application, allowing seamless navigation between Home, Resume, Portfolio, and Contact sections without page reloads.

## Features

-   **Dynamic Single-Page Experience:** Smooth navigation between sections using JavaScript.
-   **Fully Responsive Design:** The layout adapts perfectly to desktops, tablets, and mobile devices.
-   **Animated Interface:** Features entry animations for all sections and a dynamic typing effect for the headline.
-   **Interactive Resume Section:** A clean, tabbed layout to easily switch between Experience, Education, and Skills.
-   **Project Showcase:** An interactive carousel to display and provide details about my latest projects.
-   **Functional Contact Form:** Integrated with **EmailJS** to send form submissions directly to my personal email address.

## Tech Stack

This project was built using core web technologies, without any external frameworks.

-   **HTML5:** For the structure and content of the website.
-   **CSS3:** For all styling, including Flexbox, Grid, custom animations, and responsive design.
-   **Vanilla JavaScript:** For all interactivity, including section navigation, the portfolio carousel, and handling the contact form submission.
-   **EmailJS:** A third-party service to enable email functionality for the contact form.
-   **Fontawesome cdn & Font Awesome:** For the icon library.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser.

### Installation

1.  Clone the repository:
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/Ankitrajput07/responsive-portfolio-websit.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd your-repo-name
    ```
3.  Open the `index.html` file in your browser to view the website.

## Configuration (Important!)

The contact form **will not work** until you configure it with your own EmailJS credentials.

1.  Sign up for a free account at [EmailJS.com](https://www.emailjs.com).
2.  Connect your email service, create an email template, and get your **Public Key**, **Service ID**, and **Template ID**.
3.  Open the `script.js` file and replace the placeholder values in the "EmailJS Contact Form" section:

    ```javascript
    // Initialize EmailJS with your Public Key
    (function() {
        emailjs.init('YOUR_PUBLIC_KEY'); // <-- Replace with your Public Key
    })();

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'YOUR_SERVICE_ID'; // <-- Replace with your Service ID
        const templateID = 'YOUR_TEMPLATE_ID'; // <-- Replace with your Template ID

        // ... rest of the function
    });
    ```

## Contact

Ankit Rajput - ankitrajput15557@gmail.com

Project Link: [https://github.com/Ankitrajput07/responsive-portfolio-websit.git](https://github.com/Ankitrajput07/responsive-portfolio-websit.git)

## License

This project is licensed under the MIT License.
