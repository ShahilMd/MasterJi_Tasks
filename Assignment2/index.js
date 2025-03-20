const api_key="https://api.freeapi.app/api/v1/public/quotes/quote/random"

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-quote');

const sound = document.getElementById('volume');

const copy = document.getElementById('copy-quote');

const twitterBtn = document.getElementById('share-twitter')

//generating random quotes
function randomquote(){
 fetch(api_key).then(res=>res.json()).then(result=>{
  quote.textContent=result.data.content;
  author.textContent=result.data.author;
 })

}
randomquote()
newQuote.addEventListener('click',randomquote);

//sound generator
sound.addEventListener('click',()=>{
  let utterance = new SpeechSynthesisUtterance(`${quote.textContent} by ${author.textContent}`);
  speechSynthesis.speak(utterance);

})

// copy to clip bord
copy.addEventListener('click',()=>{
  navigator.clipboard.writeText(`${quote.innerText}`)
})

twitterBtn.addEventListener("click" ,()=>{
  let tweetUrl =`https://twitter.com/intent/tweet?text=${quote.textContent}--${author.textContent}`;
  window.open(tweetUrl,'_blank');

});


