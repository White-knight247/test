// ===== Simple JavaScript File =====

// 1. Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function () {
  console.log('Page loaded successfully! ✅');

  // 2. Show an alert (comment this out if not needed)
  // alert('Welcome to my page!');

  // 3. Change text of an element by ID
  const heading = document.getElementById('heading');
  if (heading) {
    heading.textContent = 'Hello from JavaScript!';
  }

  // 4. Handle a button click
  const button = document.getElementById('myButton');
  if (button) {
    button.addEventListener('click', function () {
      alert('Button was clicked! 🎉');
    });
  }

  // 5. Toggle a CSS class on an element
  const toggleBtn = document.getElementById('toggleBtn');
  const box = document.getElementById('box');
  if (toggleBtn && box) {
    toggleBtn.addEventListener('click', function () {
      box.classList.toggle('active');
    });
  }

  // 6. Get the current date and time
  const dateElement = document.getElementById('date');
  if (dateElement) {
    dateElement.textContent = 'Today is: ' + new Date().toLocaleDateString();
  }

  // 7. Simple form validation example
  const form = document.getElementById('myForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      const input = document.getElementById('nameInput');
      if (input && input.value.trim() === '') {
        event.preventDefault();
        alert('Please enter your name.');
      }
    });
  }
});

// 8. A reusable function
function greet(name) {
  return 'Hello, ' + name + '!';
}

// 9. Array example
const colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
  console.log('Color:', color);
});

// 10. Simple arrow function
const add = (a, b) => a + b;
console.log('2 + 3 =', add(2, 3));