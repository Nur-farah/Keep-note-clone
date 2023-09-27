
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

const addNoteToLocalStorage = (note) =>{
    if(note.length < 0){
        return;
    }

    let oldNote;
    if(localStorage.getItem('notes') === null){
        oldNote = [];
    }else{
        oldNote = JSON.parse(localStorage.getItem('notes'));
    }
    oldNote.push(note);

    localStorage.setItem('notes',JSON.stringify(oldNote));
}

const getNotesFromLocalStorage = () => {
    let oldNote;
    if(localStorage.getItem('notes') === null){
        oldNote = [];
    }else{
        oldNote = JSON.parse(localStorage.getItem('notes'));
    }

    oldNote.forEach(note => {
        notes.innerHTML += `
        <div class="note">
            <h3 class="title-text" id="title-text">${note[0]}</h3>
            <p class="note-blog">${note[1]}</p>
            <i class="fa fa-trash "></i>
        </div>`;
    })

}

const deleteFromLocalStorage = (deleteNote) => {
    let oldNote;
    if(localStorage.getItem('notes') === null){
        oldNote = [];
    }else{
        oldNote = JSON.parse(localStorage.getItem('notes'));
    }

    oldNote.map((note,index) => {

        if(note[0] == deleteNote.children[0].textContent && note[1] === deleteNote.children[1].textContent ){
            // console.log('nuur');
            oldNote.splice(index,1);
            return oldNote;
        }
    });

localStorage.setItem('notes', JSON.stringify(oldNote));

}

document.addEventListener("DOMContentLoaded",getNotesFromLocalStorage);

const addNote = (ciwaan,xog) => {

    notes.innerHTML += `
    <div class="note">
        <h3 class="title-text" id="title-text">${ciwaan}</h3>
        <p class="note-blog">${xog}</p>
        <i class="fa fa-trash "></i>
    </div>`;

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
            addNoteToLocalStorage([title.value, noteText.value]);
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
        deleteFromLocalStorage(event.target.parentElement);
    }
})



// localStorage.setItem('labin','jamac');

// console.log(localStorage.getItem(magac));
