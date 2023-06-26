import React,{useState,useEffect} from 'react'
import Comments from './Comments';
import {v4 as uuid} from "uuid";


function Form() {

const [name, setName] = useState("");
const [message,setMessage] = useState ("");
const [messages,setMessages] = useState(() => {
   const storedMessages = window.localStorage.getItem('messages');
  return storedMessages ? JSON.parse(storedMessages) : [];
});

useEffect(() => {
  localStorage.setItem("messages", JSON.stringify(messages));
}, [messages]);

const handleSubmit = (e) => {
    e.preventDefault();

    if(name === "" || message === ""){
      alert("Please enter a name or a comment")
      setMessage("")
      setName ("")
    return;
    }
      
 const currentTime = new Date().toLocaleString("de-DE", {
   year: "numeric",
   month: "long",
   day: "numeric",
   hour: "2-digit",
   minute: "2-digit",
      
  
  });
  
      // (Date.UTC(year, monthIndex, day, hour, minute)) => hat nicht funktioniert
  
 const newMessage = {
   _id: uuid(),
        // crypto.randomUUID(),
   name: name.trim(),
   //email: email.trim(),
   message: message.trim(),
   createdAt: currentTime,
        // .toUTCString(),
};
      
setMessages([...messages,newMessage]); //altes array mit Daten + neuer Name und Message

  // setMessages([...messages,{message:message,name:name}]) ici on met en objet quand on na pas encore enregistré dans une variable

setMessage("")
setName ("")
      
    
  };


  return (
    <div className='wrapper'>
        
        
        <Comments messages={messages} setMessages={setMessages}  /> {/*ici on a importer Comments Datei pour que sa reconnaisse les donnees du Comment Datei car on a declarer le useState avec messages ici et on donne les props ki sont definis pour que sa reconnaisse*/}

        <div> <hr className="line1n"/></div>
        <h3>Schreib  einen Kommentar</h3>
        <h4 className='info'>Deine E-Mailadresse wird nicht öffentlich angezeight. Erfordelichefelder sind mit * markiert.</h4>
        
        <form className="form" onSubmit={handleSubmit}>
        <div className='inputfield' >
         <label className='comments'>Kommentar</label>
          <input className='textarea'
          placeholder='Kommentar'
          type="text"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}//Wert von Kommentar/message ändern
          />
        </div>

        <div className='inputfield'>
          <label>Name*</label>
          <input className='input'
          placeholder='name'
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </div>

          
          <label className='email'>E-Mail*</label>
          

        <div className='inputfield terms'>
          <label className='check'> 
          <input type='checkbox'/>
          <span className='checkmark'></span>
          </label> 
          <p>Meinen Namen, Email und Website in deinen Browser speichern, bis ich wieder kommentiere </p>
        </div>
          
        <div className='inputfield terms'>
          <label className='check'> 
          <input type='checkbox'/>
          <span className='checkmark'></span>
          </label>
          <p>Ich habe die Datenschutzerklärung gelesen und akzeptiere sie *</p>
        </div>
          
          <div className='inputfield'>
          <button type='submit' className='btn'>Kommentar abschicken</button>
          </div>


    </form>
    </div>
  )
}

export default Form;