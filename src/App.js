import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from './Footer';
import CreateNote from "./CreateNote";
import Note from "./Note";


const App = () =>{

  const [item, setItem] = useState([])

  const addNote = (note) =>{

    setItem((prevdata) =>{
      return [...prevdata, note]
    })

   
  }
  
  const onDelete = (id) =>{
    setItem((oldData) =>{
      return oldData.filter((currData, indx) =>{
        return indx !== id;
      })
    })
  }

  return(
    <>
      <Header />
      <CreateNote passNote = {addNote} />

      {
        item.map((val, index) =>{
          return (
            <Note 
              key = {index}
              id = {index}
              title = {val.title}
              content = {val.content}
              deleteItem = {onDelete}
            />
          )
        })
      }
      
      <Footer />
    </>
  )
}

export default App;