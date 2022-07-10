let textarea = document.getElementById("text");

let upper_case = document.getElementById("upper-case");
upper_case.addEventListener("click", function () {
    let text = textarea.value;
    text = text.toUpperCase();
    textarea.value = text;
})
let lower_case = document.getElementById("lower-case");
lower_case.addEventListener("click", function () {
    let text = textarea.value;
    text = text.toLowerCase();
    textarea.value = text;
})

let proper_case = document.getElementById("proper-case");
proper_case.addEventListener("click", function () {
    let text = textarea.value;
    let words = text.split(' ');
    let new_words = [];
    for ( let word of words) {
        let first = word.slice(0, 1);
        let second = word.slice(1);
        second = second.toLowerCase();
        first = first.toUpperCase();
        let new_word = first + second;
        new_words.push(new_word);
    }
    textarea.value = new_words.join(" ");
})
let sentence_case = document.getElementById("sentence-case");
sentence_case.addEventListener("click", function (){
    let text = textarea.value;
    let words = text.split(' ');
    let new_words = [];
    let first_word = true;
    for (let word of words) {
        if (first_word === true) {
            let first = word.slice(0, 1);
            let second = word.slice(1);
            first = first.toUpperCase();
            let new_word = first + second;
            new_words.push(new_word);
            first_word = false;
        } else {
            word = word.toLowerCase();
            new_words.push(word);
        }
        let last = word.slice(-1);
        if (last === "."|| last ==="!"||last === "?") {
            first_word = true;
        }
    }
    textarea.value = new_words.join(" ");
})
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
let save_text_file = document.getElementById("save-text-file");
save_text_file.addEventListener("click", function (){
    let text = textarea.value;
    download("text.txt", text);
})