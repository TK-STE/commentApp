import React from "react";
import { FaComment  } from "react-icons/fa";
import { BsFillChatLeftFill } from 'react-icons/bs';

function Comments({ messages, setMessages}) {  // ici messages est le parametre qui correspond au useState[messages, setMessage] dans le Form Datei qui est la pour mettre les valeurs des commentaires dans un nvo array et les redonner sur le browser}
  
  
  const handleDelete = (index) => {
       //index = "234hjdf9324df"
   // const updatedMessages = [...messages];
   // updatedMessages.splice(index, 1);
   const updatedMessages = messages.filter((message)=>message._id !== index);
    setMessages(updatedMessages);
};
  
  return (
    <div>
        <h2 className="meinung"> < FaComment/> Teile deine Meinung zu diesem Artikel!</h2>
        <h2> <BsFillChatLeftFill style={{fontSize:"13px"}}    /> {messages.length}{' '} {messages.length > 1 ? (<span>Kommentare</span>):(<span>Kommentar</span>)} </h2>         {/* ici pour voir le nbre de commentaire et la logik de commentaire au singulier ou au pluriel*/}
        <div> <hr className="line"/></div>
        {messages.map((comment, index) => ( //ici pour que chaque message et nom a une clé différente pour s'afficher sur l'ecran
            <div key={comment._id} 
            className= "user-container">
              <h2>Name:{comment.name}</h2>
              <h2>{comment.createdAt}</h2>
              <h2>Kommentar:{comment.message}</h2>
              <button onClick={()=> handleDelete(comment._id)}>Delete</button>
             
            </div>  
      ))}
    </div>
  );
}

export default Comments;
