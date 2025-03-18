function GenerateOneshot(event) {
    event.preventDefault();

    new Typewriter('#ideas', {
  strings: ['The ideas go there'],
        autoStart: true,
        delay: 1,
});
    
}



let formElement = document.getElementById("generator-form");
formElement.addEventListener("submit", GenerateOneshot);

