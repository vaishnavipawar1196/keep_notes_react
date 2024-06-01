import React from "react";

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    };

    return(
        <>
            <div className="content-box">
                <div className="inner-content-box">
                    <input type='text' value={props.title} placeholder='Title' readOnly />
                    <textarea value={props.contents} rows="5" column="" placeholder='Write a note..' readOnly />
                    <div className='cont_btn box_btn'><button onClick={deleteNote}><i class="fa fa-trash-o" aria-hidden="true"></i></button></div>
                </div>
            </div>
        </>
    )
}

export default Note;