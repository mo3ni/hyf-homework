// NonoNo ( Note taking application )

 //adding note
 function addNote(id,content){
    notes.push({content: content,id: id});
 }
const notes = [];

 //message error
 const message = {note: "Note is not in list"};

 //show note by ID
 function getNoteFromId(id){
     const note = notes.filter(item => item.id === id);
     if (!Array.isArray(note) || !note.length){
         return message.note;
     }
     return note;
 }
 //show note
 function logOutNotesFormatted(){
    for(note of notes){
       console.log("The note with" +note.id +" has the text: " + note.note);
    }
}

 //show alll notes 
 function getNotes(){
    return notes;
 }
/*
 function getNoteFromId(id){
     const note = notes.filter(item => item.id === id);
    //  if (!Array.isArray(note) || !note.length){
         return message.note;
     }
     return note;
 }
 //
 */ 