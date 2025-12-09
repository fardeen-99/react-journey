import { useEffect, useRef, useState } from "react";
import "./App.css";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  let [val, setval] = useState("");
  let [input, setinput] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [edit, setedit] = useState({});
  const [search, setsearch] = useState("");

  let isempty = Object.keys(edit).length === 0;

let aloo=useRef()

  const submit = (e) => {
    e.preventDefault();

    const action = e.nativeEvent.submitter.value;

    // ADD TODO
    if (action === "add") {
      if (val.trim() === "") return;

      setinput((prev) => [
        ...prev,
        { id: Date.now(), text: val, completed: false },
      ]);

      toast.success("Task added!", {
        position: "top-right",
        autoClose: 700,
        style: { fontSize: "14px", padding: "6px 12px" },
      });

      setval("");
      aloo.current.focus()
    }
    
    // EDIT TODO
    if (action === "edit") {
      setinput((prev) =>
        prev.map((todo) =>
          todo.id === edit.id ? { ...todo, text: val } : todo
        )
      );

      toast.info("Task updated!", {
        position: "top-right",
        autoClose: 700,
        style: { fontSize: "14px", color:"black"},
      });
      
      setval("");
      setedit({});
      aloo.current.focus()
    }
  };

  const dlt = (id) => {
    setinput((prev) => prev.filter((todo) => todo.id !== id));

    toast.error("Task deleted!", {
      position: "top-right",
      autoClose: 600,
      style: { fontSize: "14px", padding: "6px 12px" ,color:"plum", backgroundColor:"black"},
    });
  };

  const tog = (id) => {
    setinput((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

    toast("Status changed!", {
      position: "top-right",
      autoClose: 500,
      style: { fontSize: "13px" },
    });
  };

  const ed = (ele) => {
    setval(ele.text);
    setedit(ele);
  };

  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(input));
  }, [input]);

  // FILTERED SEARCH
  const filteredTodos = input.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Add/Edit Form */}
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter task..."
          value={val}
          ref={aloo}
          onChange={(e) => setval(e.target.value)}
        />
        <button type="submit" value={isempty ? "add" : "edit"}>
          {isempty ? "Add" : "Edit"}
        </button>
      </form>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        ref={aloo}
        onChange={(e) => setsearch(e.target.value)}
        style={{ marginTop: "10px", padding: "5px" }}
      />

      {/* Todos List */}
      <section>
        {filteredTodos.map((ele) => (
          <div key={ele.id}>
            <p
              style={
                ele.completed
                  ? { textDecoration: "line-through", color: "gray" }
                  : { color: "green" }
              }
            >
              {ele.text}
            </p>

            <button onClick={() => tog(ele.id)}>Checked</button>
            <button onClick={() => dlt(ele.id)}>Delete</button>
            <button onClick={() => ed(ele)}>Edit</button>
          </div>
        ))}
      </section>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        newestOnTop={true}
        pauseOnHover={false}
        theme="color"
        closeOnClick
        className="kalu"
      />
    </>
  );
};

export default App;
