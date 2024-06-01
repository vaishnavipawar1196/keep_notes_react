import React, { useState } from 'react';

function Content(props) {

  const [note,setNote] = useState({
    title: "",
    contents: "",
  });

  const inputEvent = (event) => {

    const {value,name} = event.target;

    setNote((preValue) => {
      return{      
          ...preValue,
          [name]: value,          
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      contents: "",
    })
  }

  const [expand,setExpand] = useState(false);

  const expandIt = () => {
    setExpand(true);
  }
  const b2Normal = () => {
    setExpand(false);
  }

  return (
      <div className="content" onDoubleClick={b2Normal}>
        <div className="inner-content">
        {expand ? <input type='text' name="title" value={note.title} onChange={inputEvent} placeholder='Title' /> : null}            
        <textarea onClick={expandIt} name="contents" value={note.contents} onChange={inputEvent} rows="5" column="" placeholder='Write a note..' />
        </div>
        {expand ?<div className='cont_btn'><button onClick={addEvent}><i class="fa fa-plus" aria-hidden="true"></i></button></div> :null}

      </div>
  );
}

export default Content;
