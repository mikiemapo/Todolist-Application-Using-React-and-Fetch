import React, { useEffect, useState } from "react";

export default function Todo() {

  // list is stored in use state
  const [task, setTask] = useState([]);
  const [displayx, setDisplayx] = useState(true);
  const [newTodo, setNewTodo] = useState([
    "do something",
    "do something else",
    "do something again",
  ]);

    // API call 1. save the todo list items in console 2 use console log to access the text array.labal.... 3 make it show up on to do list replace do something etc
  let PostUrl = 'https://assets.breatheco.de/apis/fake/todos/user/mikiemapo';
  const GetTodoItem = () => {
    fetch(PostUrl)
    .then(
      (recived)=>{
        return recived.json()
      }
    )
    .then(
      (represent)=>{
        console.log(represent,"ÏAMHER")

      }
    )
    .catch((Ierror)=> console.error(Ierror))
  }

  useEffect(()=>{
GetTodoItem();
  },[])


  // remove task from the list
  function removeTask(i) {
    let remItem = newTodo.filter((repItem, repIndex) => {
      return repIndex != i;
    });
    setNewTodo(remItem);
  }

  
  // map is used to output the template in our case its the do something array
  let todoI = newTodo.map((item, index) => {
    return (
      // on mouse enter is the same as hover key property keeps track of each unique item is allways preceeded by map
      <li
        onMouseEnter={() => setDisplayx(false)}
        onMouseLeave={() => setDisplayx(true)}
        className="todoItem"
        key={index}
      >
        {item}
        <div
          className={displayx ? "d-none" : "remove"}
          // remove task index reffering the function up top
          onClick={() => {
            removeTask(index);
          }}
        >
          X
        </div>
      </li>
    );
  });
  // add task to the list and . . . is a spread opp spread opp is used to allow itarables to be spread individually.
  const addTodo = (onKeyDownEvent) => {
    if (onKeyDownEvent.key === "Enter") {
      const newTask = [...newTodo, task];
      setNewTodo(newTask);
      setTask("");
    }
  };

  return (
    <div className="spawn">
      <h1>To Do List</h1>
      <div className="Main">
        <input
          className="input"
          placeholder="please enter task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          type="text"
          onKeyDown={addTodo}
        />
      </div>
      <ul className="RemoveBullet">{todoI}</ul>
      <div>{todoI.length} task left</div>
    </div>
  );
}