import { useEffect, useState } from "react";

// export const Answer=({ele,index,total})=>{

// const[head,sethead]=useState(false)
// const[answer,setanswer]=useState(ele)
// useEffect(()=>{

//     if(check(ele)){
//         sethead(true)
//         let replaced=replace(ele)
//         setanswer(replaced)
//     }else{
//         setanswer(ele)
//         sethead(false)
//     }
//     console.log(answer)
// },[ele])

// function check(ele){
//   return /\*\*/.test(ele);
// }
// // console.log(check(ele))
// function replace(ele) {
//   return ele
//     .replace(/\*\*/g, "")
//     .replace(/#+\s*/g, "");  // removes ###, ##, # + space
// }
//     return(
// <>
// {/* <div>{answer}</div> */}

// {index===0 && total>1?<span style={{color:"yellow"}}>{answer}</span>:head?<div className="bold">{answer}</div>:<div className="superman">{answer}</div>}


// </>
//     )
// }
// export const Answer = ({ ele, index, total }) => {
  

// const[head,sethead]=useState(false)
// const[answer,setanswer]=useState(ele)

// function check(ele){
//    return /\*\*/.test(ele);
// }
// function replace(ele){
//   return  ele.replace(/\*\*/g, "")
//     .replace(/#+\s*/g, "");

// }

// useEffect(()=>{
    
//     let complet=replace(ele)
//     if(answer===complet) return  //mtlab agar ans or jo replace kra hai agar dono same hai kuch bhi laga nhi hai esa koi chota mota sentence ho jisme special character na hou usme infinite re render se bachata hai 
//     if(check(ele)){
//         sethead(true)
//         setanswer(complet)
//     }else{
//         sethead(false)
//         setanswer(complet)
//     }

// },[ele])

 
//   // FIRST LINE SPECIAL CASE (yellow)
//   if (index === 0 && total > 1) {
//     return <span style={{ color: "yellow" }}>{answer}</span>;
//   }

//   // BOLD Headings
//   if (head) {
//     return <div className="bold">{answer}</div>;
//   }

//   // Normal Answer Line
//   return <div className="superman">{answer}</div>;
// };

export const Answer = ({ ele, index, total,option }) => {
  
  // Check bold (**)
  const isBold = /\*\*/.test(ele);

  // Clean headings and bold
  const cleaned = ele
    .replace(/\*\*/g, "")
    .replace(/#+\s*/g, "");

  // FIRST LINE SPECIAL CASE (yellow)
  if (index === 0 && total > 1) {
    return <span style={{ color: "yellow" }}>{cleaned}</span>;
  }

  // BOLD Headings
  if (isBold) {
    return <div className={`bold ${option==="light"?"lightli":""}`}>{cleaned}</div>;
  }

  // Normal Answer Line
  return <div >{cleaned}</div>;
};
