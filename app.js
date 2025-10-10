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

  //Operator demonstrations
  let resultArithmetic = myNumber * 2;
  console.log("Arithmetic operation (myNumber * 2):", resultArithmetic);

  let resultComparison = (myNumber === 100);
  console.log("Strict comparison (myNumber === 100):", resultComparison);

  let resultLogical = myBoolean && (myArray.length > 0);
  console.log("Logical operation (myBoolean && (myArray.length > 0)):", resultLogical);

  //Input Validations
  const form = document.getElementById('myForm');
  const emailInput = document.getElementById('email');
  const validationFeedback = document.getElementById('validation-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const emailValue = emailInput.value;

        if (emailValue === '') {
            validationFeedback.textContent = 'Email field cannot be empty. (Fail)';
            validationFeedback.style.color = 'red';
        } else {
            validationFeedback.textContent = 'Email field is not empty. (Pass)';
            validationFeedback.style.color = 'green';
        }
    });
})();
