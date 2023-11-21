// Track the user's responses
const userResponses = [];


// Start the quiz
function startQuiz() {
    // Get the quiz container element
    const h1Container = document.querySelector(".h1-container");
    const quizContainer = document.querySelector(".shadow-box-quiz");
    const buttonContainer = document.querySelector(".button-container");

    // Clear the quiz container
    h1Container.innerHTML = '';

    console.log("hello world");

    // Display the first question
    displayQuestion(0, quizContainer, buttonContainer);
}

function displayQuestion(index, quizContainer, buttonContainer) {
    // CLEAR PREVIOUS QUESTION
    quizContainer.innerHTML = "";
    buttonContainer.innerHTML = "";



    const question = quizQuestions[index];

    // CREATE HEADER
    const header = document.createElement("h3");
    header.textContent = question.prompt;

    // CREATE IMAGE
//    const image = document.createElement("img");
//    image.src = question.image;

//    image.id = 'questionImage'; // Set the ID as "questionImage"


    // Create a list of answer options
    const answerList = document.createElement("div");
    answerList.classList.add("options-list");

    counter = 0; 

    for (const answer of question.answers) {
        const answerButton = document.createElement("button");
        answerButton.type = "button"; // Add the right button type
        answerButton.classList.add("btn", "btn-light", "option-button");
        answerButton.dataset.answer = answer;
        answerButton.innerHTML = `<h5>${answer}</h5>`;

        // GO TO NEXT QUESTION WHEN CLICKED
        answerButton.addEventListener("click", function() {

            // ADD what the user clicked
            userResponses.push(counter);

            if (index === quizQuestions.length - 1) {

                submitPage(quizContainer);

            } else {
                console.log(userResponses);
                displayQuestion(index + 1, quizContainer, buttonContainer);
            }
        });

        answerList.appendChild(answerButton);
    }
    quizContainer.appendChild(header);
//    quizContainer.appendChild(image);
    buttonContainer.appendChild(answerList);
}

function submitPage(quizContainer) {
    window.location.href = "../pages/submitPage.html";    
}
// Start the quiz when the page loads
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startQuiz);