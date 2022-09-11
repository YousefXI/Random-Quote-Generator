const quoteText = document.querySelector(".quote"),
   authorName = document.querySelector(".author .name"),
   quoteBtn = document.querySelector("button");
//soundBtn = documen.querySelector(".sound"),
//copyBtn = documen.querySelector(".copy"),
//twitterBtn = documen.querySelector(".twitter");

// Random Quote Function
function randomQuote() {
   quoteBtn.classList.add("loading");
   quoteBtn.innerText = "Loading Quote...";
   // Fetching Random Quotes From The API and Parsing it
   fetch("https://api.quotable.io/random").then((res) =>
      res.json().then((result) => {
         console.log(result);
         quoteText.innerText = result.content;
         authorName.innerText = result.author;
         quoteBtn.innerText = "Next Quote";
         quoteBtn.classList.remove("loading");
      })
   );
}

soundBtn.addEventListener("click", () => {
   // the SpeechSynthesisUtterance is a Web Speech API That Represents a Speech Request
   let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
   speechSynthesis.speak(utterance); // Speak Method of SpeechSynthesisUtterance
});
//FIXA BUG

quoteBtn.addEventListener("click", randomQuote);
