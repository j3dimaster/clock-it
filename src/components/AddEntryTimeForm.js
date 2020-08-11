import React, { useState } from 'react'
import firebase from '../firebase'


const AddEntryTimeForm = () => {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    await firebase
      .firestore()
      .collection('times')
      .add({
        title,
        time_seconds: parseInt(time, 10),
      })

    setTime('')
    setTitle('')
  }
  return (
    <form onSubmit={onSubmit}>
      <h2>Add time entry</h2>
      <>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </>
      <>
        <label htmlFor="time">Time</label>
        <input
          name="time"
          id="time"
          type="number"
          value={time}
          onChange={(e) => setTime(e.currentTarget.value)}
        />
      </>
      <button type="submit">Ad time entry</button>
    </form>
  )
}

export default AddEntryTimeForm
