function bmi() {
    
const weight = document.getElementById("weight").value;
const height = document.getElementById("height").value;
console.log(weight)
console.log(height)


let calculate = weight / height;
console.log(calculate)

let resul = document.getElementById("result")
console.log(resul);


 if (weight ==="" && height=== ""){
        resul.innerHTML = "please enter a valid name"
    }

else{
        resul.innerHTML = `Your BMI result is ${calculate}`

        let heading = document.querySelector("#head")
        console.log(heading)

        if (calculate < 18.5) {
            heading.innerText = "You are Under weight"
        }
        if (calculate > 18.6 && calculate < 24.5) {
            heading.innerText = "Normal weight"
        }
        if (calculate > 24.6 && calculate < 29) {
            heading.innerText = "Overweight"
        }
        if (calculate > 29.1) {
            heading.innerText = "obese"
        }

            }
}



