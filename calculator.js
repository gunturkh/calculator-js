const addForm = document.getElementById("add-form")
const addResult = document.getElementById("add-result")
const substractForm = document.getElementById("substract-form")
const substractResult = document.getElementById("substract-result")
const multiplyForm = document.getElementById("multiply-form")
const multiplyResult = document.getElementById("multiply-result")
const divideForm = document.getElementById("divide-form")
const divideResult = document.getElementById("divide-result")
const moduloForm = document.getElementById("modulo-form")
const moduloResult = document.getElementById("modulo-result")
const squareAreaForm = document.getElementById("square-area-form")
const squareAreaResult = document.getElementById("square-area-result")
const circleAreaForm = document.getElementById("circle-area-form")
const circleAreaResult = document.getElementById("circle-area-result")

// Basic Functions

const add = (a, b) => Number (a + b).toFixed(2)
const substract = (a, b) => Number (a - b).toFixed(2)
const multiply = (a, b) => Number (a * b).toFixed(2)
const divide = (a, b) => Number (a / b).toFixed(2)
const modulo = (a, b) => Number (a % b).toFixed(2)
const squareArea = (a) => Number (Math.pow(a, 2)).toFixed(2)
const circleArea = (a) => Number (Math.PI * Math.pow(a,2)).toFixed(2)

// DOM Functions

const addDOM = (event) => {
    event.preventDefault()
    const addFirst = Number(document.getElementById("addVar1").value)
    const addSecond = Number(document.getElementById("addVar2").value)
    if (addFirst && addSecond) addResult.innerHTML = add(addFirst, addSecond)

}

const substractDOM = (event) => {
    event.preventDefault()
    const substractFirst = Number(document.getElementById("substractVar1").value)
    const substractSecond = Number(document.getElementById("substractVar2").value)
    if (substractFirst && substractSecond) substractResult.innerHTML = substract(substractFirst, substractSecond)

}

const multiplyDOM = (event) => {
    event.preventDefault()
    const multiplyFirst = Number(document.getElementById("multiplyVar1").value)
    const multiplySecond = Number(document.getElementById("multiplyVar2").value)
    if (multiplyFirst && multiplySecond) multiplyResult.innerHTML = multiply(multiplyFirst, multiplySecond)
}

const divideDOM = (event) => {
    event.preventDefault()
    const divideFirst = Number(document.getElementById("divideVar1").value)
    const divideSecond = Number(document.getElementById("divideVar2").value)
    if (divideFirst && divideSecond) divideResult.innerHTML = divide(divideFirst, divideSecond)
}

const moduloDOM = (event) => {
    event.preventDefault()
    const moduloFirst = Number(document.getElementById("moduloVar1").value)
    const moduloSecond = Number(document.getElementById("moduloVar2").value)
    if (moduloFirst && moduloSecond) moduloResult.innerHTML = modulo(moduloFirst, moduloSecond)
}

const squareAreaDOM = (event) => {
    event.preventDefault()
    const squareAreaValue = Number(document.getElementById("square-area-input").value)
    squareAreaResult.innerHTML = squareArea(squareAreaValue) + " cm2"
}

const circleAreaDOM = (event) => {
    event.preventDefault()
    const circleAreaValue = Number(document.getElementById("circle-area-input").value)
    circleAreaResult.innerHTML = circleArea(circleAreaValue) + " cm2"
}

// Event Listener
addForm.addEventListener("submit", addDOM)
substractForm.addEventListener("submit", substractDOM)
multiplyForm.addEventListener("submit", multiplyDOM)
divideForm.addEventListener("submit", divideDOM)
moduloForm.addEventListener("submit", moduloDOM)
squareAreaForm.addEventListener("submit", squareAreaDOM)
circleAreaForm.addEventListener("submit",circleAreaDOM)