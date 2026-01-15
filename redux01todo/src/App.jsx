import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtask } from './feature/slice'

const App = () => {

  const [text, settext] = useState("")
  const dispatch = useDispatch()
  const count = useSelector((state) => state.content.task)

  const submithandler = (e) => {
    e.preventDefault()
    dispatch(addtask(text))
    settext("")
  }

  return (
    <>
      <div className="app-container">

        <form className="todo-form" onSubmit={submithandler}>
          <input
            className="todo-input"
            type="text"
            placeholder="enter text...."
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
          <button className="todo-btn">enter</button>
        </form>

        <ul className="todo-list">
          {count && count.map((ele, i) => {
            return (
              <li className="todo-item" key={i}>
                <span className="todo-index">{i + 1}.</span>
                <span className="todo-text">{ele}</span>
              </li>
            )
          })}
        </ul>

      </div>
    </>
  )
}

export default App
