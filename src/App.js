import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Note from './Note';

function App() {

  const [addItem,setAddItem] = useState([]);

  const addNote = (note) => {
    //alert("Clicked!")
    setAddItem((preData) => {
      return [...preData,note];
    }); 
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((old_data) => 
      old_data.filter((currData,indx) => {
        return indx !== id;
      })
    );
  }

  return (
      <div className="App">
        <Header />
        <Content passNote={addNote} />
        <div className='note-box'>
          {addItem.map((val,index) => {
            return (
              <Note 
              key={index}
              id={index}
              title={val.title}
              contents={val.contents}
              deleteItem={onDelete}
              />
            );
          })
          }
        </div>
        <Footer />
      </div>
  );
};

export default App;
