import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from "react";
import {db} from './config';

function App() {

  const [notes, setNotes] = useState([]);
  // const [content, setContent] = useState("");
  const content = useRef(null);
  const addNote = () => {
    let myNote = content.current.value;
    if(!notes) setNotes([]);
    let currentNotes = notes;
    currentNotes.push(myNote)
    // setNotes(newNote);
    console.log(currentNotes, "CUR NOTES");
    db.ref('/').set(currentNotes).then(result => {
      alert("Note Added")
    })
  }

  useEffect(() => {
    db.ref('/').on("value", (snapshot)=>{
      let allNotes = snapshot.val();
      // snapshot.forEach(note => {
      //   allNotes.push(note.val());
      // });
      // console.log(allNotes, "ALL NOTES")
      if(allNotes != null){
        setNotes(allNotes);
      }
    })
  }, [])

  return (
    <div className="container mt-5 ">
        <div className="row">
            <div className="col">
                <input type="text" className="form-control" ref={content} /> <br></br>
                <button className="btn btn-danger" onClick={addNote}>Add Note</button>
            </div>
            <div className="col">
                <h1>MY NOTES</h1>
                {notes && notes.map((n, index) => {
                  return <p key={index}>{n}</p>
                })}
                <p></p>
            </div>
        </div>
    </div>
  );
}

export default App;
