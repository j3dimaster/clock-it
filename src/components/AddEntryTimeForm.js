import React, { useState } from "react";
import firebase from '../firebase'

const AddEntryTimeForm = () => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()

    await firebase 
    .firestore()
    .collection('times')
    .add({
      title,
      time_seconds: parseInt(time)
    })

    setTime('')
    setTitle('')

  }
  return (
    <form onSubmit={onSubmit}>
      <h2>Add time entry</h2>
      <>
        <label>Title</label>
        <input
          type="test"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </>
      <>
        <label>Time</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.currentTarget.value)}
        />
      </>
      <button>Ad time entry</button>
    </form>
  );
};

export default AddEntryTimeForm;
