import { useState, useEffect } from 'react'



import './App.css'
import { Todoapp } from './assets/todo';
import { Todolist } from './assets/todolist';
import { Clearbtn } from './assets/allclear';

function App() {
  const [input, setinput] = useState("")
  const [edit,setedit]=useState(null)
  const [task, settask] = useState(() => {
    const local = localStorage.getItem("todos")
    if (!local) return []
    return JSON.parse(local)
  })
  const [date, setdate] = useState("")

  const formsubmit = (e) => {
    e.preventDefault() 
    if (input.trim() === "") return;
    if (task.includes(input)) {


      setinput("")
      return
    };


  if (edit !== null) {
    settask((prev) =>
      prev.map((todo, i) =>
        i === edit ? { ...todo, text: input } : todo
      )
    );
    setinput("");
    setedit(null);
    return;
  }

    settask((prev) =>
      [...prev, { text: input, completed: false }]
    )

    setinput("")


  }

  localStorage.setItem("todos", JSON.stringify(task))

  useEffect(() => {

    setInterval(() => {

      let date = new Date()
      let pro = date.toLocaleDateString()
      let time = date.toLocaleTimeString()
      setdate(`${pro}-${time}`)
    }, 1000);
  }, [])

  const kato = (value) => {
    settask((prev) => prev.filter((todo) => todo.text !== value))

  }


  const toggleComplete = (text) => {
    settask((prev) =>
      prev.map((todo) =>
        todo.text === text ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  const editing=(index)=>{
setinput(task[index].text)

setedit(index)
  }
  

  return (
    <>
      <div className="cont">

        <h1>my-todo-app</h1>


        <div className="date">{date}</div>



        <Todoapp addtodo={formsubmit} setinput={setinput} input={input} />
        <div className="list">
          <ul>
            {task.map((ele, index) => {
              return (
                <Todolist  edit={edit} ele={ele} index={index} kato={kato} toggleComplete={toggleComplete} editing={editing} />
              )
            })}
          </ul>
          <Clearbtn settask={settask} />

        </div>


      </div>


    </>
  )
}



export default App
