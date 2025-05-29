document.addEventListener('DOMContentLoaded',()=>{
    const markdownInput = document.getElementById("markdown-input");
    const htmlOutput = document.getElementById("html-output");

    function updatePreview(){
        const markdownText = markdownInput.value;
        htmlOutput.innerHTML = marked.parse(markdownText)
    }

    markdownInput.addEventListener('input', updatePreview);

    const exemplo =`# Markdown`
})