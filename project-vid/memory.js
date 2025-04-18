const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restart");
let running = false;

// Game state variables
let hasFlippedCard = false;
let firstCard, secondCard;
let canClick = true; // Prevent clicking during match check
let matchesFound = 0;

const images = [
    "images (1).jpeg",
    "images (2).jpeg",
    "images (3).jpeg",
    "images (4).jpeg"
];
const imagesArray = [...images, ...images];

function startGame() {
    // Reset game state
    hasFlippedCard = false;
    firstCard = secondCard = null;
    canClick = true;
    matchesFound = 0;
    statusText.textContent = "Matches found: 0";

    // Shuffle and assign images
    imagesArray.sort(() => Math.random() - 0.5);
    
    cells.forEach((cell, index) => {
        const cellImg = cell.querySelector(".img-el");
        cellImg.src = imagesArray[index];
        cellImg.style.display = "none";
        cell.classList.remove("matched"); // Remove matched class
    });

    running = true;
}

function cellClicked() {
    if (!canClick || this === firstCard || this.classList.contains("matched")) return;

    const cellImg = this.querySelector(".img-el");
    cellImg.style.display = "block";

    if (!hasFlippedCard) {
        // First card flip
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // Second card flip
        canClick = false;
        secondCard = this;

        // Check for match
        const isMatch = firstCard.querySelector("img").src === secondCard.querySelector("img").src;

        if (isMatch) {
            handleMatch();
        } else {
            handleMismatch();
        }
    }
}

function handleMatch() {
    // Mark cards as matched
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchesFound++;
    statusText.textContent = `Matches found: ${matchesFound}`;

    // Check win condition
    if (matchesFound === images.length) {
        statusText.textContent = "You won!";
        canClick = false;
    }

    resetTurn();
}

function handleMismatch() {
    setTimeout(() => {
        firstCard.querySelector("img").style.display = "none";
        secondCard.querySelector("img").style.display = "none";
        resetTurn();
    }, 1000);
}

function resetTurn() {
    hasFlippedCard = false;
    canClick = true;
    firstCard = secondCard = null;
}

function restart() {
    // Hide all images
    cells.forEach(cell => {
        cell.querySelector("img").style.display = "none";
    });
    startGame();
}

// Initialize game
restartBtn.addEventListener("click", restart);
startGame();