
const noteArea = document.querySelector(".note-aria");
const noteText = document.querySelector(".note-text");
const title = document.querySelector(".title");
const note = document.querySelector(".note");
const notes = document.querySelector("#notes");


const showNoteArea = () => {
    noteText.style = 'display: block';
    noteArea.classList.add(".note-now");
    title.setAttribute('placeholder', 'Title');

} 

const hideNoteArea = () => {
    noteText.style = 'display: none';
    noteArea.classList.remove('note-now');
}

const addNote = (ciwaan,xog) => {
        notes.innerHTML += `<div class="note">
        <h3 class="title-text" id="title-text">${ciwaan}</h3>
        <p class="note-blog">${xog}</p>
        <i class="fa fa-trash "></i>
    </div>`

    title.value = '';
    noteText.value = '';
}

noteArea.addEventListener('click', showNoteArea);

document.addEventListener('click', (event) => {
    let clicked = noteArea.contains(event.target);
    
    if(!clicked){
        hideNoteArea();

        if(title.value.length === 0 && noteText.value.length === 0){
            return
        }else{
            addNote(title.value, noteText.value);
        }

        
    }
})

document.addEventListener("mouseover", (event) => {
    if(event.target.classList.contains("note")){
        event.target.querySelector("i").classList.add('show');
    }
})

document.addEventListener("mouseout", (event) => {
    if(event.target.classList.contains("note")){
        event.target.querySelector("i").classList.remove('show');
    }
})

document.addEventListener("click", (event) => {
    if(event.target.classList.contains("fa-trash")){
        event.target.parentElement.remove();
    }
})

localStorage.setItem('labin','jamac');

console.log(localStorage.getItem(magac));
