import React, { useEffect, useState } from "react";

export default function Todo() {

  // 3 stored in use state
  const [task, setTask] = useState(""); // value of the input 
  const [displayx, setDisplayx] = useState(true); //boolean variable 'X' icon should be displayed or hidden for each task in the list.
  //array of objects representing the list
  const [newTodo, setNewTodo] = useState([
    "do something",
    "do something else",
    "do something again",
  ]);

  // useEffect hook to make an API call to fetch the initial list of tasks
  let PostUrl = 'https://assets.breatheco.de/apis/fake/todos/user/mikiemapo';
  useEffect(() => {
    getTodo();
  }, [])



  //  takes an index parameter and filters out the task at that index from the `newTodo` array and back end.
  function removeTask(i) {
    let remItem = newTodo.filter((repItem, repIndex) => {
      return repIndex != i;
    });
  
    fetch(`https://assets.breatheco.de/apis/fake/todos/user/mikiemapo`, {
      method: "PUT",
      body: JSON.stringify(remItem),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
      console.log(resp.ok);
      console.log(resp.status);
      console.log(resp.text());
    })

    .then(data => {
      getTodo()
    })

    .catch(error => {
      console.log(error);
    });
  }
  




  //`getTodo` updates the state variable `newTodo` with the new list of tasks abd calls `setNewtodo`.
  const getTodo = () => {
    fetch(PostUrl)
      .then(
        (recived) => {
          return recived.json()

        }
      )
      .then(
        (represent) => {
          console.log(represent, "ÏAMHERE")
          setNewTodo(represent)
        }
      )
      .catch((error) => console.error(error))
  }


  //event parameter listens and creates new array of tasks by spreading the existing `newTodo` array and adding the new task. It makes a PUT request updates the list, calls `getTodo` to update the state variable `newTodo`.
  const addTodo = (e) => {
    if (e.key === "Enter") {
      const newTask = [...newTodo, { label: task, done: false }];
      console.log(newTask)
      fetch('https://assets.breatheco.de/apis/fake/todos/user/mikiemapo', {
        method: "PUT",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => {
          console.log(resp.ok); // will be true if the response is successfull
          console.log(resp.status); // the status code = 200 or code = 400 etc.
          console.log(resp.text()); // will try return the exact result as string
          //return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
        })
        .then(data => {
          getTodo()
        })

        .catch(error => {
          //error handling
          console.log(error);
        });
    }
  };

  // renders a form input element
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
          onKeyDown={(e) => addTodo(e)}
        />
      </div>
      {/* {newTodo.map((item, index) => {
        return (
          <div key={index}>
              todo item:{item.label}
          </div>
        )
      })} */}

      
      <ul className="RemoveBullet">{newTodo.map((item, index) => {
        //"item" and "index". "item" represents the current element being processed in the array, and "index" represents the index of that element in the array.
        return (
          // event listener that sets the state of the variable "displayx" to either true or false depending on the mouse event that occurs.
          <li
            onMouseEnter={() => setDisplayx(false)}
            onMouseLeave={() => setDisplayx(true)}
            className="todoItem d-flex mx-3"
            key={index}

          >
            {item.label}
            <div
              className={displayx ? "d-none" : "remove"}
              // remove task index reffering the function up top
              onClick={() => {
                removeTask(index);
              }}
            >
              <span className="hidden">X</span>

            </div>
          </li>
        );
      })}</ul>
      <div>{newTodo.length} task left</div>
    </div>
  );
}