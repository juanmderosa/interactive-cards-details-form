const cardHolder= document.getElementById("cardHolder");
const inputCardNumber= document.getElementById("inputCardNumber");
const inputMM= document.querySelector(".inputMM");
const inputYY= document.querySelector(".inputYY");
const CVC= document.getElementById("CVC");
const inputBtn = document.getElementById("inputBtn");
const cardNumber = document.querySelector(".cardNumber");
const cardName = document.querySelector(".cardName");
const cardBackCvc = document.querySelector(".cardBackCvc");
const cardExpMM = document.querySelector(".cardExpMM");
const cardExpYY = document.querySelector(".cardExpYY");
const errorTextCardNumber= document.querySelector(".errorTextCardNumber")
const errorTextMM= document.querySelector(".errorTextMM")
const errorTextYY= document.querySelector(".errorTextYY")
const errorTextCVC= document.querySelector(".errorTextCVC")
const thankYouSection = document.querySelector(".thankYouSection")
const form = document.querySelector(".form")
let cardNumberIsValidated = false;
let cardBackCvcIsValidated = false;
let cardExpMMIsValidated = false;
let cardExpYYIsValidated = false;


const changeValue = (input, node) => {
    let nodeDefault = node.textContent
    input.addEventListener("input", (e)=>{
        node.textContent = e.target.value 
        if(e.target.value.length === 0){
            node.textContent = nodeDefault;
        }
    })
}

const validateMMYY = (input, errorText) =>{
    if(input.value.length !== 2){
        errorText.classList.add("errorTextVisible")
        cardExpMMIsValidated = false;
        cardExpYYIsValidated = false;

    }else{
        errorText.classList.remove("errorTextVisible")
        cardExpMMIsValidated = true;
        cardExpYYIsValidated = true;
    }
}

const validateCVC = () =>{
    if(CVC.value.length !== 3){
        errorTextCVC.classList.add("errorTextVisible")
        cardBackCvcIsValidated = false
    }else{
        errorTextCVC.classList.remove("errorTextVisible")
        cardBackCvcIsValidated = true
    }
}

const validateCardNumber = (input) =>{

    let onlyNumbers = CardOnlyNumbers(input)
    let cardinput = []

    if(input.value.length !== 0){
        for (let i =0; i<input.value.length; i++){
            cardinput.push(input.value[i])
        }
        let cardInputJoin = cardinput.join("")
        if(cardInputJoin === onlyNumbers){
            errorTextCardNumber.classList.remove("errorTextVisible")
            cardNumberIsValidated = true
        }else{
            errorTextCardNumber.classList.add("errorTextVisible")
            cardNumberIsValidated = false
        }
    }else{
        errorTextCardNumber.classList.add("errorTextVisible")
        cardNumberIsValidated = false
    }
}

const CardOnlyNumbers = (input) =>{
    let cardNumber = input.value
    let cardArr = []
    for(let i = 0; i< cardNumber.length; i++){
        if(cardNumber[i] !== " "){
            cardArr.push(Number(cardNumber[i]))      
        }
    }
    let onlyNumbers = cardArr.filter(num =>  Number.isInteger(num));
    onlyNumbersJoined = onlyNumbers.join("")
    return onlyNumbersJoined
}

const allValidated = () =>{
    if(cardNumberIsValidated === true &&         
        cardBackCvcIsValidated === true &&         
        cardExpMMIsValidated === true &&         
        cardExpYYIsValidated === true &&
        cardHolder.value.length !== 0){
        console.log("Todas están validadas")
        thankYouSection.classList.add("thankYouSectionVisible")
        form.classList.add("formHidden")
    }else{
        console.log("faltan validaciones")
    }
}

inputBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    validateMMYY(inputMM, errorTextMM) 
    validateMMYY(inputYY, errorTextYY) 
    validateCVC()
    validateCardNumber(inputCardNumber)
    allValidated()
})

changeValue(cardHolder, cardName)
changeValue(inputCardNumber, cardNumber)
changeValue(CVC, cardBackCvc)
changeValue(inputMM, cardExpMM)
changeValue(inputYY, cardExpYY)
