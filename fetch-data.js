// Ensure the script runs after the entire HTML document has been loaded.
// This prevents errors where the script might try to access elements
// that haven't been created yet by the browser.
document.addEventListener('DOMContentLoaded', function() {

    /**
     * @async
     * @function fetchUserData
     * @description Asynchronously fetches user data from a public API and
     * displays the names of the users in a list on the webpage.
     * It also handles potential errors during the fetch operation.
     */
    async function fetchUserData() {
        // Define the API URL from which to fetch user data.
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Select the HTML element where the fetched data will be displayed.
        // This element initially contains the "Loading user data..." message.
        const dataContainer = document.getElementById('api-data');

        try {
            // Attempt to fetch data from the specified API URL.
            // The 'await' keyword pauses the execution of this async function
            // until the fetch operation completes and returns a Response object.
            const response = await fetch(apiUrl);

            // Check if the network response was OK (status 200-299).
            // If not, throw an error to be caught by the catch block.
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the JSON body of the response.
            // 'await' again pauses execution until the JSON parsing is complete.
            const users = await response.json();

            // Clear the initial "Loading user data..." message from the container.
            dataContainer.innerHTML = '';

            // Create an unordered list (<ul>) element to hold the user names.
            const userList = document.createElement('ul');

            // Loop through the 'users' array obtained from the API.
            // For each user object, create a list item (<li>) and append their name.
            users.forEach(user => {
                const listItem = document.createElement('li');
                // Set the text content of the list item to the user's 'name' property.
                listItem.textContent = user.name;
                // Append the created list item to the unordered list.
                userList.appendChild(listItem);
            });

            // After all users have been added to the userList, append the entire
            // unordered list to the data container in the HTML.
            dataContainer.appendChild(userList);

        } catch (error) {
            // If any error occurs during the fetch operation (e.g., network error,
            // invalid JSON, or HTTP error from response.ok check),
            // this block will catch it.

            // Clear any existing content in the data container.
            dataContainer.innerHTML = '';
            // Display an error message to the user.
            dataContainer.textContent = 'Failed to load user data. Please try again later.';
            // Log the error to the console for debugging purposes.
            console.error('Error fetching user data:', error);
        }
    }

    // Call the fetchUserData function when the DOM is fully loaded.
    // This ensures that the data fetching process starts as soon as the page is ready.
    fetchUserData();
});
