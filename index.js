document.addEventListener('DOMContentLoaded' , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 220
    let birdBottom = 200
    let gravity = 2

    function startGame() {
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    let timerId = setInterval(startGame, 20)

    function control(e){
        if (e.keyCode === 32){
            if (birdBottom < 480){
                jump()
            } 
        }
    }

    function jump() {
        if(birdBottom < 480) birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
        console.log(birdBottom)
    }

    document.addEventListener('keyup', control)
    document.addEventListener('mouseup', jump)
})