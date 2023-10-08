const gmailButton = document.querySelector('#gmail_button')
const gmailInput = document.querySelector('#gmail_input')
const gmailResult = document.querySelector('#gmail_result')
const regExp = /^\w{6,30}[@][g][m][a][i][l][.][c][o][m]/
gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
})
const childBlock = document.querySelector('.child_block')
const animation = () => {
    let positionNew = 0
    const positionEnd = 450
    const speedAnimation = 2
const animationStart = () => {
    positionNew += speedAnimation
    childBlock.style.left = positionNew + 'px'
    if (positionNew < positionEnd) {
        requestAnimationFrame(animationStart)
    }
}
animationStart()
}
animation()