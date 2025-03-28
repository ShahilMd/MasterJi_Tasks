
const previewArea = document.getElementById("preview-area");
const inputText = document.getElementById("input-text");
const copyBtn = document.getElementById("copy-btn");
const clearBtn = document.getElementById("clear-btn");

// Example placeholder text
inputText.value = `# Welcome to Modern Markdown

## Explore Powerful Formatting

This is a **modern** and *stylish* Markdown converter.

### Key Features
- Real-time preview
- Beautiful typography
- Responsive design

[Learn More](https://example.com)`;
function clearInitial(){
  inputText.value='';
}
function updatePreview() {
  previewArea.innerHTML=inputText.value;
  inputText.addEventListener('click',clearInitial)
  previewArea.innerHTML = marked.parse(inputText.value);
};


        // Copy Markdown
        copyBtn.addEventListener('click', function() {
          navigator.clipboard.writeText(previewArea.textContent).then(() => {
              this.textContent = 'Copied!';
              this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
              
              setTimeout(() => {
                  this.textContent = 'Copy Markdown';
                  this.style.background = 'linear-gradient(135deg, #22d3ee, #06b6d4)';
              }, 2000);
          }).catch(err => {
              console.error('Copy failed', err);
          });
      });

      // Clear input and preview
      clearBtn.addEventListener('click', function() {
        inputText.value = '';
        previewArea.innerHTML = '';
    });



setInterval(updatePreview, 100);