const inputText = document.getElementById('input-text');
const previewArea = document.getElementById('preview-area')
const copyBtn = document.querySelector(".btn-copy");
const clearBtn = document.querySelector(".btn-clear");

function initialText(){
  //initial welcome message
 const iniText=`
  # Welcome to Modern Markdown
  
  ## Explore Powerful Formatting
    
  This is a **modern** and *stylish* Markdown converter.
    
  ### Key Features
  - Real-time preview
  - Beautiful typography
  - Responsive design
    
   [Learn More](https://example.com)`;
   //load initial value
    inputText.innerHTML=iniText

}
//clear input feild for writing
function clearInput(){
  inputText.innerHTML=''
  
}
function updateMd(){
  let text = marked.parse(inputText.value)
  previewArea.innerHTML=text
}
// copy button funcnality 
function copyText(){
  setTimeout(()=>{
   copyBtn.innerHTML='Copied';
  })
 



}

inputText.addEventListener('click',clearInput)
initialText()
copyBtn.addEventListener('click',copyText)
setInterval(updateMd, 100);