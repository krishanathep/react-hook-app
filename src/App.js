import { useState } from "react/cjs/react.development";
import NoteList from "./components/note";
import CreateNote from "./components/note/CreateNote";

function App() {
  const notes = [
    {id: 1, title: 'Title 1', amount: 5000},
    {id: 2, title: 'Title 2', amount: 6000},
    {id: 3, title: 'Title 3', amount: 1000},
    {id: 4, title: 'Title 4', amount: 7000},
    {id: 5, title: 'Title 5', amount: 9000},
  ]

  const [items, setItems]=useState(notes)

  const onAddItem = (newItem) => {
    setItems((prevItem)=>{
      return [...prevItem, newItem]
    })
  }

  return (
    <div>
      <h1>Expense Note</h1>
      <CreateNote onAddItem = {onAddItem}/>
      <NoteList notes = {items}/>
    </div>
  );
}

export default App;
