const quoteText = document.querySelector(".quote"),
   authorName = document.querySelector(".author .name"),
   quoteBtn = document.querySelector("button"),
   copyBtn = document.querySelector(".copy"),
   twitterBtn = document.querySelector(".twitter");

// Random Quote Function
function randomQuote() {
   quoteBtn.classList.add("loading");
   quoteBtn.innerText = "Loading Quote...";
   // Fetching Random Quotes From The API and Parsing it
   fetch("https://api.quotable.io/random").then((res) =>
      res.json().then((result) => {
         quoteText.innerText = result.content;
         authorName.innerText = result.author;
         quoteBtn.innerText = "Next Quote";
         quoteBtn.classList.remove("loading");
      })
   );
}

copyBtn.addEventListener("click", () => {
   // Copying the Quote Text on copyBtn Click
   navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
   let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
   window.open(tweetUrl, "_blank"); // Opening Twitter Tab Window
});

quoteBtn.addEventListener("click", randomQuote);
