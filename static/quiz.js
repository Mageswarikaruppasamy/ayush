const quizData = [
    { question: "Which plant is known as 'Indian Ginseng'?", options: ["Neem", "Tulsi", "Ashwagandha", "Amla"], answer: "Ashwagandha" },
    { question: "Which herb is commonly used for liver detox?", options: ["Amla", "Giloy", "Turmeric", "Aloe Vera"], answer: "Giloy" },
    { question: "Which plant is known for its antibacterial properties?", options: ["Neem", "Rose", "Black Seed", "Clove"], answer: "Neem" },
    { question: "Which herb is used for skin healing and sunburn relief?", options: ["Garlic", "Aloe Vera", "Ginger", "Basil"], answer: "Aloe Vera" },
    { question: "Which of these is used to boost immunity?", options: ["Turmeric", "Fenugreek", "Sandalwood", "Belladonna"], answer: "Turmeric" },
    { question: "Which plant is called the 'Queen of Herbs' in Ayurveda?", options: ["Tulsi", "Neem", "Ashwagandha", "Brahmi"], answer: "Tulsi" },
    { question: "Which herb is used to control diabetes?", options: ["Amla", "Bitter Gourd", "Fenugreek", "All of the above"], answer: "All of the above" },
    { question: "Which plant is used in traditional medicine for digestion?", options: ["Mint", "Pepper", "Cinnamon", "Clove"], answer: "Mint" },
    { question: "Which herb is famous for reducing stress and anxiety?", options: ["Ashwagandha", "Turmeric", "Giloy", "Lemongrass"], answer: "Ashwagandha" },
    { question: "Which herbal tea is good for relaxation?", options: ["Green Tea", "Chamomile Tea", "Peppermint Tea", "Black Tea"], answer: "Chamomile Tea" },
    { question: "Which plant is known for its role in wound healing?", options: ["Aloe Vera", "Neem", "Turmeric", "All of the above"], answer: "All of the above" },
    { question: "Which herb is commonly used to treat cough and cold?", options: ["Ginger", "Basil", "Honey", "All of the above"], answer: "All of the above" },
    { question: "Which plant is called 'The Elixir of Life' in Ayurveda?", options: ["Giloy", "Amla", "Neem", "Tulsi"], answer: "Giloy" },
    { question: "Which of these herbs helps in weight loss?", options: ["Cinnamon", "Green Tea", "Ginger", "All of the above"], answer: "All of the above" },
    { question: "Which herb is best known for its anti-inflammatory properties?", options: ["Turmeric", "Pepper", "Mint", "Clove"], answer: "Turmeric" },
    { question: "Which plant is used in toothpaste for oral health?", options: ["Neem", "Mint", "Clove", "All of the above"], answer: "All of the above" },
    { question: "Which herb is useful for improving memory and focus?", options: ["Brahmi", "Ashwagandha", "Tulsi", "Mint"], answer: "Brahmi" },
    { question: "Which medicinal plant is known for controlling high blood pressure?", options: ["Garlic", "Basil", "Amla", "All of the above"], answer: "All of the above" },
    { question: "Which herb is commonly used for digestive issues?", options: ["Ginger", "Peppermint", "Fennel", "All of the above"], answer: "All of the above" }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Function to shuffle and pick 10 questions
function selectRandomQuestions() {
    let shuffled = quizData.sort(() => 0.5 - Math.random()); // Shuffle array
    selectedQuestions = shuffled.slice(0, 10); // Pick first 10 questions
}

// Function to load a question
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("next-btn");

    if (currentQuestionIndex < selectedQuestions.length) {
        let q = selectedQuestions[currentQuestionIndex];
        questionElement.innerText = `${currentQuestionIndex + 1}. ${q.question}`;
        optionsElement.innerHTML = "";

        q.options.forEach(option => {
            let btn = document.createElement("button");
            btn.innerText = option;
            btn.classList.add("option-btn");
            btn.onclick = () => checkAnswer(option, q.answer);
            optionsElement.appendChild(btn);
        });

        nextBtn.style.display = "none";
    } else {
        showResult();
    }
}

// Function to check answer
function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    document.getElementById("next-btn").style.display = "block";
}

// Function to move to next question
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";

    let message = "";
    if (score <= 4) {
        message = "Keep learning! You'll do better next time! 🌱";
    } else if (score >= 5 && score <= 7) {
        message = "Good job! You're getting there! 🍃";
    } else {
        message = "Excellent! You're a herbal expert! 🌿✨";
    }

    document.getElementById("result").innerHTML = `
        <h3>You scored ${score} out of 10! 🎯</h3>
        <p>${message}</p>
    `;

    document.getElementById("result-buttons").style.display = "block"; // Show buttons
}

// Function to restart the quiz properly
function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5); // Shuffle again

    document.getElementById("result").innerHTML = "";
    document.getElementById("result-buttons").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    showQuestion();
}

// Function to go back to the dashboard
function goToDashboard() {
    window.location.href = "/dashboard"; // Update based on actual route
}

function restart() {
    window.location.href = "/quiz"; // Update based on actual route
}


// Initialize quiz
window.onload = function() {
    selectRandomQuestions();
    loadQuestion();
};
