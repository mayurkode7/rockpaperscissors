const rock = 'rock'
const paper = 'paper'
const scissors = 'scissors'

const game = () => {
    let playerScore = 0
    let computerScore = 0

    const startGame = () => {
        const playBtn = document.querySelector('.play-btn')
        const introScreen = document.querySelector('.intro')
        const matchScreen = document.querySelector('.match')

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fade-out')
            matchScreen.classList.add('fade-in')
            playMatch()
        })
    }

    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')

        const computerOptions = [rock, paper, scissors]


        options.forEach(option => {
            option.addEventListener('click', function () {
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]
                computerHand.src = `./assets/${computerChoice}.png`
                const playerChoice = this.textContent;
                playerHand.src = `./assets/${playerChoice}.png`
                compareHands(playerChoice, computerChoice)
            })
        })
    }


    const compareHands = (playerChoice, computerChoice) => {

        const winnerLabel = document.querySelector('.winner')

        if (playerChoice === computerChoice) {
            winnerLabel.textContent = 'It is a tie'
            return;
        }

        if (playerChoice === rock) {
            if (computerChoice === paper) {
                winnerLabel.textContent = 'Computer wins'
                computerScore++
                updateScores()
                return;
            } else {
                winnerLabel.textContent = 'Player wins'
                playerScore++
                updateScores()
                return;
            }

        }

        if (playerChoice === paper) {
            if (computerChoice === scissors) {
                winnerLabel.textContent = 'Computer wins'
                computerScore++
                updateScores()
                return;
            } else {
                winnerLabel.textContent = 'Player wins'
                playerScore++
                updateScores()
                return;
            }

        }

        if (playerChoice === scissors) {
            if (computerChoice === paper) {
                winnerLabel.textContent = 'Player wins'
                playerScore++
                updateScores()
                return;

            } else {
                winnerLabel.textContent = 'Computer wins'
                computerScore++
                updateScores()
                return;
            }
        }

    }

    const updateScores = () => {
        const playerScoreLabel = document.querySelector('.player-score p')
        const computerScoreLabel = document.querySelector('.computer-score p')
        playerScoreLabel.textContent = playerScore
        computerScoreLabel.textContent = computerScore
    }

    startGame()
}


// to start the game
game();
