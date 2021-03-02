function updateCountryView() {
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if(ddCountry.value == "Yes") {
        divCountry.classList.remove("invisible");
    }
    else {
        divCountry.classList.add("invisible");
    }
}

function validateForm() {

    var DoB = document.querySelector("#txtDoB");
    var divDoBError = document.querySelector("#divDoBError");
    var formIsValid = true;

    var elements = document.getElementsByTagName("input");

    // let's start by remove error indicators from all forms
    for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove("hasError");
    }

    // check 1
    // now add them if the value contains an invalid char
    var invalidChars = ['#', '!', '~', '&', '<', '>', '"', '`'];
    for(let i = 0; i < elements.length; i++){
        for(let j=0; j < invalidChars.length; j++){
            if(elements[i].value.indexOf(invalidChars[j]) != -1){
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
        }
    }

    // check 2
    // dob has value before today
    if(DoB.value == ""){
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The Date of birth cannot be empty";
        DoB.classList.add("hasError");
        formIsValid = false;
    } else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if(DoBDate >= todayDate){
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "Date of birth must be before today's date.";
            DoB.classList.add("hasError");
            formIsValid = false;
        }
        else {
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = "";
            DoB.classList.remove("hasError");
        }
    }

    // check 3
    // if user answered yes on travelling they entered a value for country
    var ddCountry = document.querySelector("#ddCountry");
    if(ddCountry.value == "Yes"){
        var txtCountry = document.querySelector("#txtCountry");
        var divCountryError = document.querySelector("#divCountryError");
        if(txtCountry.value == ""){
            divCountryError.classList.remove("invisible");
            divCountryError.innerHTML = "Must enter what countries you've visited";
            txtCountry.classList.add("hasError");
            formIsValid = false;
        }
        else {
            divCountryError.classList.add("invisible");
            divCountryError.innerHTML = "";
            txtCountry.classList.remove("hasError");
        }
    }

    return formIsValid;
}