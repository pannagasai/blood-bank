
const express = require('express');
const app = express();
const db = require('./db'); // Adjust the path if needed
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the "public" folder

// Registration route to handle POST requests
app.post('/register', async (req, res) => {
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Insert user into the database
        const [result] = await db.execute(
            'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
            [username, password, role]
        );
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Database error occurred' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

    // Handle the blood request form submission
    const bloodRequestForm = document.getElementById("bloodRequestForm");
    if (bloodRequestForm) {
        bloodRequestForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the default form submission
            // Perform AJAX request or redirect
            alert("Blood request functionality not implemented yet.");
        });
    }

    // Handle the add inventory form submission
    const addInventoryForm = document.getElementById("addInventoryForm");
    if (addInventoryForm) {
        addInventoryForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the default form submission
            // Perform AJAX request or redirect
            alert("Add inventory functionality not implemented yet.");
        });
    }

    // Handle the events form submission (if applicable)
    const eventsForm = document.getElementById("eventsForm");
    if (eventsForm) {
        eventsForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the default form submission
            // Perform AJAX request or redirect
            alert("Events functionality not implemented yet.");
        });
    }

    // Handle the dashboard interactions
    const dashboard = document.getElementById("dashboard");
    if (dashboard) {
        // Example: Handle a button click to logout
        const logoutButton = document.getElementById("logoutButton");
        if (logoutButton) {
            logoutButton.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default behavior
                // Perform logout functionality, such as clearing session data
                alert("Logout functionality not implemented yet.");
                // Redirect to login page if necessary
                window.location.href = "login.html";
            });
        }

        // Additional dashboard functionalities can be added here
        // For example: Fetch user stats or display recent requests
        // Implement AJAX calls to your API as needed
        loadDashboardData(); // Call a function to load data (to be implemented)
    }
;

// Example function to load dashboard data
function loadDashboardData() {
    // Fetch user stats or recent activities
    // You can perform an AJAX request here to get the necessary data
    // For example:
    fetch('/api/dashboard/data') // Your API endpoint
        .then(response => response.json())
        .then(data => {
            // Update the dashboard with the fetched data
            console.log(data); // Process and display data as needed
        })
        .catch(error => {
            console.error('Error loading dashboard data:', error);
        });
}
