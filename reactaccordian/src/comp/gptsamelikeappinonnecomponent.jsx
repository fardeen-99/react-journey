import { useEffect, useState } from "react";
import faq from "./comp/faq.json";
import "./App.css";

const App = () => {
  const [data, setdata] = useState([]);
  const [openId, setOpenId] = useState(null); // which accordion is open

  useEffect(() => {
    setdata(faq);
  }, []);

  const handle = (id) => {
    setOpenId(openId === id ? null : id);  
    // if already open → close it
    // if closed → open it
  };

  return (
    <>
      <h1>the accordion</h1>

      <ul>
        {data.map((ele) => {
          const { id, answer, question } = ele;

          return (
            <li key={id}>
              <div className="q">
                <p>{question}</p>
                <button onClick={() => handle(id)}>
                  {openId === id ? "hide" : "show"}
                </button>
              </div>

              {openId === id && (
                <div className="ans">
                  <p>{answer}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
