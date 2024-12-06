function displayFact(response) {
   
    new Typewriter("#fact", {
  strings: response.data.answer,
  autoStart: true,
  delay: 30,
  cursor: "",
}); 
}

function factGenerator(event) {
event.preventDefault();

let apiKey = "ab9dbat743ca61fc97fbb6cb364o3017";
let context = "You are an AI Assistant that is an intelligent, expert in everything that has to do with dogs not just dogs but all the different kinds of dogs.Your mission is to generate one line fact in basic HTML.Make sure to follow user intructions.Please be very precise, simple and to the point. Make the facts interesting a bit funny very easy to understand.Can you please include atleast one emojis inside the fact.";
let prompt = "User instructions are: Generate a fact about dogs";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let factElement = document.querySelector("#fact");
factElement.innerHTML = `<div class="generating">⌛Unleashing a paw-some fact!🐕...</div>`;
axios.get(apiUrl).then(displayFact);
}

let factGeneratorElement = document.querySelector("#fact-generator");
factGeneratorElement.addEventListener("click", factGenerator);