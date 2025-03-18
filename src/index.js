function displayIdea(response) {
    console.log("Ideas generated");
     new Typewriter('#ideas', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,    
});
    
}

function GenerateOneshot(event) {
    event.preventDefault();

    let instructionsInput = document.getElementById("user-instructions");
    let apiKey = "21b0o158462fba6c2a0f6eca1t37c8ec";
    let prompt = `User instructions: Create a concise and engaging Dungeons & Dragons oneshot idea. The entire adventure MUST revolve around the following hook: "${instructionsInput.value}".Requirements:1. Only include the Plot Hook and Twist. Keep both sections very brief (2-3 sentences each).2. The Plot Hook and Twist must clearly relate to ${instructionsInput.value}.3. Format the response as HTML with the following structure:<h2>Plot Hook</h2>.<p>...</p>. <h2>Twist</h2>.<p>...</p>`;
    let context = `You are a highly skilled Dungeon Master known for creating immersive and thrilling DnD oneshot ideas in HTML format. Your task is to generate a very short adventure based entirely around the provided hook: "${instructionsInput.value}". Only include the Plot Hook and Twist, and keep the descriptions extremely brief. Output must be in valid, well-structured HTML.`;
    
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    console.log("Generating ideas...");
    console.log(`Prompt:${prompt}`);
    console.log(`Context:${context}`);

    axios.get(apiUrl).then(displayIdea);

   
}



let formElement = document.getElementById("generator-form");
formElement.addEventListener("submit", GenerateOneshot);

