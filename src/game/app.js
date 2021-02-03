document.addEventListener('DOMContentLoaded' , () => {
    const egg = document.querySelector('.egg')
    const gameDisplay = document.querySelector('.game-container')
    const counter = document.querySelector('.counter-moving')

    let eggLeft = 220
    let eggBottom = 220
    let gravity = 3
    let isGameOver = false
    let gap = 470


    function startGame() {
        eggBottom -= gravity
        egg.style.bottom = eggBottom + 'px'
        egg.style.left = eggLeft + 'px'
    }
    let gameTimerId = setInterval(startGame, 20)

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        if (eggBottom < 500) eggBottom += 50
        egg.style.bottom = eggBottom + 'px'
    }
    document.addEventListener('keyup', control)


    function generateObstacle() {
        let obstacleLeft = 500
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight

        const pot = document.createElement('div')
        const extractorFan = document.createElement('div')

        if (!isGameOver) {
            pot.classList.add('pot')
            extractorFan.classList.add('extractorFan')
        }
        
        gameDisplay.appendChild(pot)
        gameDisplay.appendChild(extractorFan)

        pot.style.left = obstacleLeft + 'px'
        extractorFan.style.left = obstacleLeft + 'px'
        pot.style.bottom = obstacleBottom + 'px'
        extractorFan.style.bottom = obstacleBottom + gap + 'px'

        function moveObstacle() {
            obstacleLeft -=2
            pot.style.left = obstacleLeft + 'px'
            extractorFan.style.left = obstacleLeft + 'px'

            if (obstacleLeft === -60) {
                clearInterval(timerId)
                gameDisplay.removeChild(pot)
                gameDisplay.removeChild(extractorFan)
            }
            if (
                obstacleLeft > 200 && obstacleLeft < 280 && eggLeft === 220 &&
                (eggBottom < obstacleBottom + 153 || eggBottom > obstacleBottom + gap -200)||
                eggBottom === 0 
                ) {
                gameOver()
                clearInterval(timerId)
            }
        }
        let timerId = setInterval(moveObstacle, 20) 
        if (!isGameOver) setTimeout(generateObstacle, 3000)

    }
    generateObstacle()


    function gameOver() {
        clearInterval(gameTimerId)
        isGameOver = true
        document.removeEventListener('keyup', control)
        counter.classList.add('counter')
        counter.classList.remove('counter-moving')
    }


})