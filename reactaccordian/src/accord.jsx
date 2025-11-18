export const Accord=({ele,open,toggle})=>{
    return(
        <>
        {/* const{id,answer,question}=ele */}
     <div className="q">
      <p>{ele.question} </p>
     <button onClick={toggle} className={open?"active":""}>{open?"Hide":"show"} </button></div>
     <div className="ans">
      {open && <p>{ele.answer}</p>}
     </div>

        </>
    )
}