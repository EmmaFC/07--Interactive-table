let wordList = []
let i=0
let colorWord

let btnShowWords = document.getElementById('btn_show_words')
let wordsContainer = document.getElementById('container_color_words')
wordsContainer.style.display = 'none'

btnShowWords.addEventListener('click', () =>{

    if( wordsContainer.style.display != 'none'){
        wordsContainer.style.display = 'none'
        btnShowWords.innerHTML = 'Show'
        console.log(':(')
        return;
    }
        wordsContainer.style.display = 'inherit'
        btnShowWords.innerHTML = 'Hide'
        console.log(':)')
})

let add = (i,colorWord) => {  
    wordList.push(colorWord)
}
let b = (colorWord) => {
for (i=0; i<=wordList.length; i++){
    colorWord = document.getElementsByClassName('color_word')[i].innerText;   
    add(i,colorWord)    
} }

console.log(wordList)
b(colorWord)


/* function hideEachItem (wordList, colorWord, i) {

    for (i=0; i<wordList.length; i++){
        console.log(wordList)
        setTimeout(() => {wordlist[i].style.display = 'inherit'}, 5000); 
    
    }
} 
 */