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
const childBlock = document.querySelector('.child_block');
let deg = `0`
let rotateAxis = '';
const rotateBlock = () => {
  childBlock.style.transform = `rotate${rotateAxis}(${deg}deg)`
}
const animationLeftToRight = () => {
  let positionLeft = 0;
  const positionRight = 450;
  const speedAnimation = 2;
  const animationStartLeftToRight = () => {
    positionLeft += speedAnimation;
    childBlock.style.left = positionLeft + 'px';

    if (positionLeft < positionRight) {
      requestAnimationFrame(animationStartLeftToRight);
      deg = 0
      rotateBlock()
    } else {
      setTimeout(animationTopToBottom, 0);
    }
  }
  animationStartLeftToRight();
}
const animationTopToBottom = () => {
  let positionTop = 0;
  const positionBottom = 450;
  const speedAnimation = 2;
  const animationStartTopToBottom = () => {
    positionTop += speedAnimation;
    childBlock.style.top = positionTop + 'px';
    if (positionTop < positionBottom) {
      requestAnimationFrame(animationStartTopToBottom);
       rotateAxis ='Y'
       deg = 0
       rotateBlock()
    } else {
      setTimeout(animationRightToLeft, 0);
    }
  }
  animationStartTopToBottom();
}
const animationRightToLeft = () => {
  let positionLeft = 450;
  const positionRight = 0;
  const speedAnimation = 2;
  const animationStartRightToLeft = () => {
    positionLeft -= speedAnimation;
    childBlock.style.left = positionLeft + 'px';
    if (positionLeft > positionRight) {
      requestAnimationFrame(animationStartRightToLeft);
      deg = 180
      rotateBlock()
    } else {
      setTimeout(animationBottomToTop, 0);
    }
  }
  animationStartRightToLeft();
}
const animationBottomToTop = () => {
  let positionTop = 450;
  const positionBottom = 0;
  const speedAnimation = 2;

  const animationStartBottomToTop = () => {
    positionTop -= speedAnimation;
    childBlock.style.top = positionTop + 'px';
    if (positionTop > positionBottom) {
      requestAnimationFrame(animationStartBottomToTop);
      deg = 0
      rotateBlock()
    } else {
      setTimeout(animationLeftToRight, 0);
    }
  }
  animationStartBottomToTop();
}
animationLeftToRight()
// HW2
const interval = setInterval(()=>{
  watch++
}, 1000)
const watch = document.querySelector('.watch')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
let count = 0
let timer
function watchDisplay() {
  watch.textContent = count
}
start.addEventListener('click', () => {
  if (!timer) {
    timer = setInterval(()=> {
      count++
      watchDisplay()
    }, 1000)
  }
})
stop.addEventListener('click', () => {
  clearInterval(timer)
  timer = null
})
reset.addEventListener('click', () => {
  count = 0
  watchDisplay()
  clearInterval(timer)
  timer = null
})
watchDisplay()
