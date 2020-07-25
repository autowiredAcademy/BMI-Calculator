function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let weightUnit = document.getElementById("weight_dropdown").value;
    let heightUnit = document.getElementById("height_dropdown").value;

    let bmiValue = document.getElementById("bmi_value");
    let bmiOutput = document.getElementById("bmi_result");

    if(weightUnit === "lbs") {
        weight = getConvertedWeightInKg(weight);
    }

    if(heightUnit !== "m") {
        height = getConvertedHeightInMeters(height, heightUnit)
    }

    let calculatedBMI = weight / Math.pow(height, 2);

    bmiValue.innerHTML = calculatedBMI;
    bmiOutput.style.display = "block";
}

function getConvertedWeightInKg(weight) {
    // Add your conversion logic here from lbs -> kg
}

function getConvertedHeightInMeters(height, heightUnit) {
    if(heightUnit === "cms") {
        // Add conversion logic here from cm -> m
    } else if(heightUnit === "inches") {
        // Add conversion logic here from inches -> m
    } else if(heightUnit === "ft. inches") {
        // Add conversion logic here from ft. inches -> m
    }
}

function rotateCard() {
    const flipCardContainer = document.querySelector(".flip-card-container");
    flipCardContainer.classList.toggle("flip");
}