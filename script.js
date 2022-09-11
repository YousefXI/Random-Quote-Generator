const quoteText = document.querySelector(".quote"),
   authorName = document.querySelector(".author .name"),
   quoteBtn = document.querySelector("button"),
   soundBtn = documen.querySelector(".sound"),
   copyBtn = documen.querySelector(".copy"),
   twitterBtn = documen.querySelector(".twitter");

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

quoteBtn.addEventListener("click", randomQuote);
