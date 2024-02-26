# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./public/Screenshot.jpg)


### Links
Pending

## My process

### Built with

- ReactJS created with Vite
- CSS custom properties
- Flexbox
- React-router-dom


### What I learned

Developed an email input form validation method, testing against a sample regEx code. "No valid" message is reset automatically to "false" by using the onFocus method.

Practiced the conditional rendering, by the use of some state variaables.

- Example of CSS for conditional styling
```css

input {
  width: 100%; 
  border: solid 1px var(--grey);
  outline: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 0.8rem;
}

input.invalid {
  border: solid 2px var(--primary);
  background: rgba(255, 98, 87, 0.2); 
}
```

- Input form validation. Two state variables are set for using in conditional rendering.
```js
const handleSubmit = (e) => {
    e.preventDefault();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setInputValid(true);
    } else {
      setInputValid(false);
      return;
    }

    setIsActive(true)
    navigate("/thanks")
  };
```

### Continued development

Use of react-router-dom in more complex applications.

The routes definition in this small application is a simple case.



### Useful resources

Some ideas are taken from a couple of video tutorials:

- [Form validation example](https://www.youtube.com/watch?v=tIdNeoHniEY) - A special feature is the use of onFocus to de-activate the "no valid" messages.
- [A way to set routes](https://www.youtube.com/watch?v=TWz4TjSssbg) - Good example for a small application.



## Author

- Website - [Guillermo Dominguez](https://gdominguez-portfolio.netlify.app)
- Frontend Mentor - [@memominguez](https://www.frontendmentor.io/profile/memominguez)


## Acknowledgments

Thanks to all those who share their knowledge, free of charge, through video tutorials. 