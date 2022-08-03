// Elements

const form = document.querySelector("#registerForm");
const steps = document.querySelectorAll(".step");
const indicators = document.querySelectorAll(".indicator");
const nexBtn = document.querySelector("#nexBtn");
const prevBtn = document.querySelector("#prevBtn");

// Step

let currentStep = 0;

// Moving trough Steps
const move = (n) => {
    //Stop Movement if Form is not valid
    if(n === 1 && !validateForm()) return false;

    // Remove current step and pass value for next one 
    steps[currentStep].style.display = "none";
    currentStep = currentStep + n;

    // submit Form and Stop register if Submit button in Cliked
    if(currentStep >= steps.length){
        form.submit();
        return false;
    }

    // Show next Step
    showStep(currentStep);
}

// Validation for Form
const validateForm =( ) =>{
    //Set Initial Date
    let inputs = steps[currentStep].querySelector("input");
    let valid = true;

    //Check if Any of Inputs is Empty
    for( let i = 0 ; i < inputs.length; i++){
        if(inputs[i].value == ""){
            inputs[i].className += "invalid";
            valid = false;
        } else{
            inputs[i].className = inputs[i].className.replace("invalid", " ");
        }
    }

    // If Everythig is okay, Continue with Movement
    if(valid){
        indicators[currentStep].className += "finish"
    }

    return valid

}

// Show Exact Step
const showStep = (n) => {
    // Show Next Step
    steps[n].style.display = "Block";

    // Update Buttons based on changes
    if(n == 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "Block";
    }
    if (n == (steps.length - 1)){
        nexBtn.innerHTML = "Enviar";
    } else {
        nexBtn.innerHTML = "Siguiente";
    }


    // Update Indicators
    stepIndicator(n);
}


// Set step indicator
const stepIndicator = (n) => {

    // Remove active indicators Styling
    for (i = 0 ; i < indicators.length; i++){

    indicators[i].className = indicators[i].className.replace("active"," ");
    }

    // Show active indicator
    indicators[n].className += "active";
}

// Show First Step
showStep(currentStep);