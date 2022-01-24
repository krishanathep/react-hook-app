import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

export default function CreateNote(props) {

  const [title,setTitle]=useState('')
  const [amount,setAmount]=useState(0)


  const inputTitle = (event) => {
    setTitle(event.target.value)
  }

  const inputAmount = (event) => {
    setAmount(event.target.value)
  }

  const submitItem = (event) => {
    event.preventDefault()
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount)
    }
    //console.log(itemData)
    props.onAddItem(itemData)
    setTitle('')
    setAmount(0)
  }

  return (
    <div>
      <h2>Create Note</h2>
      <form onSubmit={submitItem}>
        <div>
          Title :<br/>
          <input type="text" onChange={inputTitle} value={title} />
        </div>
        <div>
          Amount :<br/>
          <input type="text" onChange={inputAmount} value={amount} />
        </div>
        <div>
          <br/>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
