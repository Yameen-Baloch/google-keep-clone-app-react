import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const CreateNote = (props) =>{

    const [note, setNote] = useState({
        title: '',
        content: ''
    })


    const [expand, setexpand] = useState(false);

    const inputEvent = (e) =>{
        e.preventDefault();
        //used object destructuring..
       const {name, value} = e.target;
       
       //setNote for updating the data of note
        setNote((oldData) =>{
            return{
                ...oldData,
                [name] : value
            }
        })
        console.log(note)
       
    }

    const addEvent = () =>{
        props.passNote(note)
       setNote({
        title: '',
        content: ''
       })
    }

    const expandIt = () =>{
        setexpand(true)
    }

    const shrinkIt = () =>{
        setexpand(false)
    }
    return(
        <>
            <div className='main_note' onDoubleClick={shrinkIt}>
                <form>

             {/* Input feild for getting Tilte input */}
                {expand ? (
                    <input type = 'text'
                    onChange={inputEvent}
                    value={note.title}
                    name='title'
                    placeholder='Title'
                    autoComplete='off'
                    />) : null}

            {/* text area for getting content */}
                    <textarea rows='' column = ''
                    value={note.content}
                    name='content'
                    placeholder='Write a note...'
                    onClick={expandIt}
                    onChange={inputEvent}/>


            {/* Botton fot adding new notes */}
                {expand ?(
                    <Button onClick={addEvent}>
                        <AddIcon className='plus_sign'/>
                    </Button>) : null}

                </form>
            </div>
        </>
    )
}

export default CreateNote;