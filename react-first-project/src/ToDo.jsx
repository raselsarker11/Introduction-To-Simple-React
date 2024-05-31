// export default function ToDo ({task}){
//     return(
//         <h1>Task: {task}</h1>
//     )
// }



// conditional Rendering Options--> 01
//==============================================
// export default function ToDo ({ task, isDone = false }) {
//     if (isDone) {
//       return <h1>The work is already finished</h1>;
//     } else {
//       return <h1>The work is ongoing</h1>;
//     }
//   }



// conditional Rendering Options--> 02
//==============================================
export default function DoList({ task = "Default Task", isDone = false }) {
  if (isDone) {
    return <h1>This is almost done well</h1>;
  }
  return <h1>Now I am working hard</h1>;
}