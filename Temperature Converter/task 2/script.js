function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitSpan = document.getElementById("fahrenheit");

    
    if (!isNaN(celsiusInput.value)) {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitSpan.textContent = fahrenheit.toFixed(2) + " °F";
    } else {
        fahrenheitSpan.textContent = "Invalid input";
    }
}
