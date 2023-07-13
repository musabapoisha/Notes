import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  // ===================================
  //   const content = props.content.split(/(?:\r\n|\r|\n)/g);
  //   const todos = content.map((li) => {
  //     return { id: crypto.randomUUID(), title: li, complet: false };
  //   });
  //   const [state, setState] = useState(todos);
  // ===================================

  // useEffect(() => {
  //   localStorage.setItem("state", JSON.stringify(state));
  // }, [state]);

  // ===================================
  //   function how(id, completed) {
  //       console.log(completed);
  //       console.log(id);

  //       setState((currentTodos) => {
  //           return currentTodos.map((todo) => {
  //               if (todo.id === id) {
  //                   return { ...todo, complet: completed };
  //                 }
  //                 return todo;
  //             });
  //         });
  //     }
  //     console.log(todos);
  // ===================================

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>
        {/* {state.map((todo) => {
          return (
            <p key={todo.id} style={todo.complet ? { color: "#c7c2c2" } : {}}>
              <input
                type="checkbox"
                checked={todo.complet}
                onChange={(e) => {
                  how(todo.id, e.target.checked);
                }}
              />
              {todo.title}
            </p>
          );
        })} */}
        {props.content}
        {/* {content.map((prop, index) => {
          return (
            <p id={index} style={a}>
              <input type="checkbox" onClick={change} />
              {prop}
            </p>
          );
        })} */}
      </p>
      <button onClick={handleClick}>
        <MdDelete />
      </button>
    </div>
  );
}

export default Note;
