# Little Lemon Restaurant 🍴  

![React](https://img.shields.io/badge/React-18.0-blue?logo=react)  
![Course](https://img.shields.io/badge/Coursera-Meta%20Front--End%20Developer-blue)  

This repository contains the source code for the Little Lemon restaurant website, a responsive web application built with React. The project provides a modern, user-friendly online presence for the restaurant, featuring key information, weekly specials, customer testimonials, and a fully functional table reservation system.

👉 This project was developed as part of the **[Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer)** on Coursera.  

---

## Features 🚀

*   **Dynamic Homepage**: Showcases weekly specials, customer testimonials, and an introduction to the restaurant.
*   **Table Reservation System**: A core feature allowing users to book a table.
    *   Select a date, time, number of guests, and occasion.
    *   Available time slots are dynamically fetched based on the selected date.
    *   Client-side validation ensures all required fields are filled correctly and meet specific criteria (e.g., guest count between 1 and 10).
    *   Successful submissions are confirmed on a dedicated confirmation page.
    *   Reservation details are persisted in the browser's `localStorage`.
*   **Responsive Design**: The layout adapts seamlessly to various screen sizes, from mobile phones to desktops, using CSS and media queries for an optimal user experience.
*   **Client-Side Routing**: Smooth, single-page application (SPA) navigation between the Home, About, Menu, and Reservation pages is handled by React Router.
*   **Component-Based Architecture**: The application is built with reusable React components and styled with CSS Modules to ensure maintainability and scoped styling.

## Technology Stack 🛠️

*   **Frontend**: React, JavaScript (ES6+), HTML5, CSS3
*   **Routing**: React Router
*   **Styling**: CSS Modules
*   **Testing**: Jest & React Testing Library

## Getting Started 🚦

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/samyakchiche/little-lemon.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd little-lemon
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### `npm test`

Launches the test runner in interactive watch mode. The project includes a comprehensive suite of tests for the reservation functionality, located in `src/App.test.js`. These tests cover:

*   Component rendering and functionality.
*   State management for available reservation times.
*   Form submission and validation logic.
*   Correct use of HTML5 attributes for form elements.
*   Interaction with `localStorage` for data persistence.
