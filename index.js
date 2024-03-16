/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const convertInput = document.getElementById("convert-input")
const convertMeterFeet = document.getElementById("convert-meter-feet")
const convertLiterGallon = document.getElementById("convert-liter-gallon")
const convertKilogramPound = document.getElementById("convert-kilogram-pound")

convertBtn.addEventListener("click", function() {
    const input = Number(convertInput.value)
    const meter = (input / 3.281).toFixed(3) 
    const feet = (input * 3.281).toFixed(3)
    const liter = (input / 0.264).toFixed(3)
    const gallon = (input * 0.264).toFixed(3)
    const kilogram = (input / 2.204).toFixed(3)
    const pound = (input * 2.204).toFixed(3)
convertMeterFeet.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meter} meters`
convertLiterGallon.textContent = `${input} liters = ${gallon} gallons | ${input} gallons = ${liter} liters`
convertKilogramPound.textContent = `${input} kilos = ${pound} pounds | ${input} pounds = ${kilogram} kilos`


// console.log("convert clicked!!")
})