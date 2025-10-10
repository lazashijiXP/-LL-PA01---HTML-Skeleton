(function(){
  console.log("Welcome to my webpage!");
  console.log("Repository URL: [https://github.com/lazashijiXP/-LL-PA01---HTML-Skeleton.git]");

  // Sample variable declarations
  let myString = "This is a string.";
  let myNumber = 100;
  let myBoolean = true;
  let myArray = [1, 2, 3, 4, 5];
  let myObject = { name: "Python", type: "Language" };
  let myNull = null;
  let myUndefined; 

  console.log("String variable:", myString);
  console.log("Number variable:", myNumber);
  console.log("Boolean variable:", myBoolean);
  console.log("Array variable:", myArray);
  console.log("Object variable:", myObject);
  console.log("Null variable:", myNull);
  console.log("Undefined variable:", myUndefined);

  // Operator demonstrations
  let resultArithmetic = myNumber * 2;
  console.log("Arithmetic operation (myNumber * 2):", resultArithmetic);

  let resultComparison = (myNumber === 100);
  console.log("Strict comparison (myNumber === 100):", resultComparison);

  let resultLogical = myBoolean && (myArray.length > 0);
  console.log("Logical operation (myBoolean && (myArray.length > 0)):", resultLogical);

  // Event Listener for form submission
  const form = document.getElementById('myForm');
  const emailInput = document.getElementById('email');
  const firstNameInput = document.getElementById('first_name');
  const lastNameInput = document.getElementById('last_name');
  const countrySelect = document.getElementById('country');
  const validationFeedback = document.getElementById('validation-feedback');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Email validation
      const emailValue = emailInput.value;

      if (emailValue === '') {
          validationFeedback.textContent = 'Email field cannot be empty. (Fail)';
          validationFeedback.style.color = 'red';
      } else {
          validationFeedback.textContent = 'Email field is not empty. (Pass)';
          validationFeedback.style.color = 'green';
      }

      // Retrieves other input values
      const firstNameValue = firstNameInput.value;
      const lastNameValue = lastNameInput.value;
      const countryValue = countrySelect.value;

      // Conditional check based on country and update DOM
      const countryFeedback = document.createElement('p'); // Create a new paragraph element
      if (countryValue === 'usa') {
          countryFeedback.textContent = `Welcome, ${firstNameValue} from USA!`;
          countryFeedback.style.color = 'blue';
      } else {
          countryFeedback.textContent = `Hello, ${firstNameValue} from another country (${countryValue}).`;
          countryFeedback.style.color = 'orange';
      }

      // Append the feedback message to the validation feedback div
      validationFeedback.appendChild(countryFeedback);
  });
})();
