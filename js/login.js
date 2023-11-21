//const Airtable = require('airtable');

var base = new Airtable({apiKey: 'patjitzhNSkmNMNdy.8d02e26eafa47c6fe802a0bdf0c4f75f960f0c1bfb2848e8b0146b64ea203352'}).base('apphT3pxr5fwUWpO0');

const table = base('Table 1');

// TESTING/DEBUGGING FUNCTIONS
const getRowByEmail = async (email) => {
    try {
        const records = await table.select({
            filterByFormula: `{email} = "${email}"`, // Adjust the field name and value based on your actual data
            fields: ['firstName', 'lastName', 'learningStyle']
        }).firstPage();

        if (records.length > 0) {

            const user = records[0].fields;
            // first name, last name, onboarding state, learning style
            const firstName = user['firstName'];
            const lastName = user['lastName'];
            const onboardingState = user['onboardingState'];
            const learningStyle = user['learningStyle'];

            const userArray = [firstName, lastName, onboardingState, learningStyle];
            return userArray;

        } else {
            console.log(`User ${email} not found.`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching records:', error);
    }
}

// Retrieve password from database given email
const getPasswordFromEmail = async (email) => {

    console.log('Getting password from email: ' + email);

    // Try to retrieve table using API
    try {
        const records = await table.select({
            filterByFormula: `{email} = "${email}"`, // Adjust the field name and value based on your actual data
            fields: ['password']
        }).firstPage();

        console.log("Searching database...");

        // check if email exists
        if (records.length > 0) {
            const user = records[0].fields;
            const password = user['password'];

            console.log("Data retrieved. Your real password is: " + password);


            return password;
        } else {
            console.log(`User with email "${email}" not found.`);
            return "PASSWORDNOTFOUND";
        }
    } catch (error) {
        console.error('Error fetching records:', error);
        // You might want to throw the error here to propagate it to the caller
        throw error;
    }
};

// LOGIN FUNCTIONS
async function validateLogin () {
    var email = document.getElementById('emailFieldLogin').value;
    var password = document.getElementById('passFieldLogin').value;

    console.log('Email: ' + email);
    console.log('Password: ' + password);

    try {
            const realPassword = await getPasswordFromEmail(email);

            if (password === realPassword) {
                console.log('You have successfully logged in!');
                window.location.href = 'userHome.html?email=' + encodeURIComponent(email);

                return true;
            } else {
                console.log('Incorrect password.');
                return false;
            }
        } catch (error) {
            console.error('Error fetching real password:', error);
            return false; // or handle the error accordingly
        }
}