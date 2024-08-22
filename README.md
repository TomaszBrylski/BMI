# Body Mass Index Calculation

 Link where you can find demo >> [BMI-HOMEPAGE](https://tomaszbrylski.github.io/BMI/ "BMI Homepage") <<

 ## Description:
 > A page contains information on the Body Mass Index, how to calculate it, and a calculator that allows you to calculate such an index.

## Technologies:

- HTML: The structure of the document, where elements such as `<input>` and `<label>` (or similar) are styled.
---
- CSS: The styling of elements, including positioning, size, colors, borders, transitions, and interactive states (focus, valid).
---
- JavaScript:
  - DOM Manipulation: Selecting and manipulating DOM elements using methods like document.querySelector.
  - Event Handling: Handling events with addEventListener, including listening for the submit event on a form and mousemove on a link.
  - Prevent Default: Using event.preventDefault() to prevent the default behavior of the form (preventing the page from reloading upon form submission).
  - Math and Calculations: Calculating BMI (Body Mass Index) using basic mathematical operations.
  - Text Manipulation: Setting the calculated BMI in a DOM element using innerText.
  - Custom Properties (CSS Variables): Dynamically modifying a custom CSS property (--x) for an element based on mouse movement.

```javascript
let btn = document.querySelector("a");
btn.addEventListener("mousemove", (e) => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX * 3 - rect.left;
  btn.style.setProperty("--x", x + "deg");
});
```

>The entire setup relies on standard frontend technologies used to create interactive and responsive user interfaces.
