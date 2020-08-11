import React, { useState, useEffect } from 'react'
import firebase from '../firebase'

const SORT_OPTIONS = {
  TIME_ASC: {
    colum: 'time_seconds',
    direction: 'asc',
  },
  TIME_DESC: {
    colum: 'time_seconds',
    direction: 'desc',
  },
  TITLE_ASC: {
    colum: 'title',
    direction: 'asc',
  },
  TITLE_DESC: {
    colum: 'title',
    direction: 'desc',
  },
}

function useTimes(sortBy = 'TIME_ASC') {
  const [times, setTimes] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('times')
      .orderBy(SORT_OPTIONS[sortBy].colum, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setTimes(newTimes)
      })
    return () => unsubscribe() // drop websocket connection
  }, [sortBy])

  return times
}

const Timeslist = () => {
  const [sortBy, setSortBy] = useState('TIME_ASC')
  const times = useTimes(sortBy)

  return (
    <>
      <h2>Times list</h2>
      <>
        <label htmlFor="timeSort">Sort by</label>
        <select
          name="timeSort"
          id="timeSort"
          value={sortBy}
          onChange={(e) => setSortBy(e.currentTarget.value)}
        >
          <option value="TIME_ASC">Time(fastest first</option>
          <option value="TIME_DESC">Time(slowest first</option>
          <option disabled>---</option>
          <option value="TITLE_ASC">Title (a-z)</option>
          <option value="TITLE_DESC">Title (z-a)</option>
        </select>
      </>
      <ol>
        {times.map((time) => (
          <li key={time.id}>
            <div className="time-entry">
              {time.title}
              <code className="time">{time.time_seconds}</code>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}

export default Timeslist
