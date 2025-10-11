(function(){
  // Variable declarations
    let myString = "This is a string.";
    let myNumber = 100;
    let myBoolean = true;
    let myArray = [1, 2, 3, 4, 5];
    let myObject = { name: "AI", type: "Assistant" };
    let myNull = null;
    let myUndefined; // Declared but not assigned, defaults to undefined

    console.log("String variable:", myString);
    console.log("Number variable:", myNumber);
    console.log("Boolean variable:", myBoolean);
    console.log("Array variable:", myArray);
    console.log("Object variable:", myObject);
    console.log("Null variable:", myNull);
    console.log("Undefined variable:", myUndefined);

    // Operator demonstrations
    let resultArithmetic = myNumber * 2; // Arithmetic operator (*)
    console.log("Arithmetic operation (myNumber * 2):", resultArithmetic);

    let resultComparison = (myNumber === 100); // Strict comparison operator (===)
    console.log("Strict comparison (myNumber === 100):", resultComparison);

    let resultLogical = myBoolean && (myArray.length > 0); // Logical operator (&&)
    console.log("Logical operation (myBoolean && (myArray.length > 0)):", resultLogical);

    // DOM Elements
    const form = document.getElementById('myForm');
    const emailInput = document.getElementById('email');
    const firstNameInput = document.getElementById('first_name');
    const lastNameInput = document.getElementById('last_name');
    const countrySelect = document.getElementById('country');
    const validationFeedback = document.getElementById('validation-feedback');
    const fetchDataButton = document.getElementById('fetch-data-button');
    const dataContainer = document.getElementById('data-container');
    const dataControls = document.getElementById('data-controls');
    const sortBySelect = document.getElementById('sort-by');
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Approved public API
    let fetchedData = []; // Variable to store fetched data

    // Function to handle form submission and validation
    function handleFormSubmit(event) {
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

        // Retrieve other input values
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
        // Clear previous country feedback first if any
        const existingCountryFeedback = validationFeedback.querySelector('p');
        if (existingCountryFeedback) {
            validationFeedback.removeChild(existingCountryFeedback);
        }
        validationFeedback.appendChild(countryFeedback);
    }

    // Function to render data
    function renderData(dataToRender) {
        dataContainer.innerHTML = ''; // Clear previous data

        if (dataToRender.length === 0) {
            dataContainer.innerHTML = '<p>No data found.</p>';
            return;
        }

        const ul = document.createElement('ul');
        dataToRender.slice(0, 10).forEach(item => { // Render up to 10 items
            const li = document.createElement('li');
            li.textContent = `ID: ${item.id}, Title: ${item.title}`;
            ul.appendChild(li);
        });
        dataContainer.appendChild(ul);
    }

    // Function to handle errors
    function handleError(error) {
        dataContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
        console.error('Fetch error:', error);
    }

    // Function to fetch and render data
    function fetchAndRenderData() {
         // Show loading message
        dataContainer.innerHTML = 'Loading data...';
        dataControls.style.display = 'none'; // Hide controls while loading

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                fetchedData = data; // Store fetched data globally
                renderData(fetchedData); // Render initial data
                dataControls.style.display = 'block'; // Show controls after data is loaded
            })
            .catch(handleError); // Use the error handling function
    }

    // Function to handle sorting
    function handleSortChange() {
        const sortBy = this.value;
        let sortedData = [...fetchedData]; // Create a copy to avoid modifying the original

        if (sortBy === 'id') {
            sortedData.sort((a, b) => a.id - b.id);
        } else if (sortBy === 'title') {
            sortedData.sort((a, b) => a.title.localeCompare(b.title));
        }

        renderData(sortedData); // Render sorted data
    }

    // Event Listeners
    form.addEventListener('submit', handleFormSubmit);
    fetchDataButton.addEventListener('click', fetchAndRenderData);
    sortBySelect.addEventListener('change', handleSortChange);
})();
