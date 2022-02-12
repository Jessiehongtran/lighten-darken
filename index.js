const slider = document.getElementsByClassName('slider')[0]
const color = document.getElementsByClassName('color')[0]
slider.addEventListener("change", lightenOrDarken)
let curR = 208
let curG = 30
let curB = 15
let curSliderValue = 50

function lightenOrDarken(e){
    let change =  parseInt(e.target.value) - curSliderValue

    if (curR - change >= 0 &&  curR - change <= 255){
        curR -= change 
    } 

    color.style.backgroundColor = `rgb(${curR}, ${curG}, ${curB})`
    curSliderValue = parseInt(e.target.value)
}