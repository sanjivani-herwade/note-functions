//Generate DOM structure
const generateNoteDom = function (note) {
    let el = document.createElement('p')
    let button = document.createElement('button')
    button.textContent = 'delete';
    button.setAttribute('id', note.title)
    button.addEventListener('click', (e) => {
        removeNote(e.target.id)
    })
        el.textContent = note.title
        el.appendChild(button)
            return el
    }

//existing data saved
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if(notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}


//Save the notes for local storage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))

}

//Render application note
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter (function (note) {
         return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
        })
    
        document.querySelector('#notes').innerHTML = ""
    
        filteredNotes.forEach (function (note) {
             const noteEl = generateNoteDom (note)
             document.querySelector('#notes').appendChild(noteEl)
      })
 }

 let removeNote = (id) => {
let notes = getSavedNotes();
let filteredNotes = notes.filter ((note) => {
    if (note.title === id) {
        return false
    }
    return true
})
saveNotes(filteredNotes)
renderNotes(filteredNotes, {searchText: ''}) 
 }
