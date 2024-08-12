import "./App.css";
import React, { useEffect, useState } from "react";

function getLocalStorageData() {
  const data = localStorage.getItem("todo");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function App() {
  const [input, setInput] = useState("");
  const [todo, setToDo] = useState(getLocalStorageData());
  const [editToDoId, setEditToDoId] = useState("");
  let completed = 0;
  let total = 0;

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function addTask() {
    if (!input) {
      return alert("enter some text");
    } else if (input && editToDoId) {
      setToDo(
        todo.map((curElem) => {
          if (curElem.id === editToDoId) {
            return {
              ...curElem,
              task: input,
            };
          }
          return curElem;
        })
      );
      setEditToDoId("");
      setInput("");
    } else {
      const taskObj = {
        id: new Date().getTime().toString(),
        task: input,
        isComplete: false,
        toEdit: false,
        date: new Date().getDate(),
        month: new Date().getMonth(),
      };

      setToDo([...todo, taskObj]);
      setInput("");
    }
  }

  function deleteTask(key) {
    const updatedTask = todo.filter((curElem) => {
      return curElem.id !== key;
    });
    setToDo(updatedTask);
  }
  function toggleComplete(key, index) {
    const data = todo[index];
    setToDo(
      todo.map((curElem) => {
        if (curElem.id === key) {
          return {
            ...curElem,
            isComplete: data.isComplete === false ? true : false,
          };
        }
        return curElem;
      })
    );
  }
  function editToDo(key, index) {
    setEditToDoId(key);
    setInput(todo[index].task);
  }

  function taskStatus() {
    todo.map((curElem) => {
      if (curElem.isComplete === true) {
        completed += 1;
      }
      total += 1;
    });
  }
  taskStatus();
  return (
    <div className="App">
      <div className="to-do-list">
        <div className="container d-flex justify-content-center align-items-center p-5">
          <div className="to-do-list-body position-relative d-flex flex-column bg-white rounded-5">
            <div className="dots position-absolute overflow-hidden">
              <div className="dot"></div>
            </div>
            <div className="to-do-list-header"></div>
            <div className="to-do-list-tasks p-5 text-center">
              <div className="title text-center">
                <h1 className="fw-bold">To-do list</h1>
                <p id="tasksInfo" className="fw-bold">
                  {total} Total, {completed} Completed, {total - completed}{" "}
                  Pending
                </p>
              </div>
              <div className="input-group mb-3">
                <input
                  id="taskInput"
                  type="text"
                  className="form-control"
                  placeholder="Add your task ..."
                  aria-label="Add your task"
                  aria-describedby="button-addon2"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="addTaskBtn"
                  onClick={addTask}
                >
                  <i className="fa-solid fa-pencil"></i>
                </button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Num</th>
                    <th className="w-50">Task</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody id="tasksBody">
                  {todo.map((curElem, index) => {
                    return (
                      <tr key={curElem.id}>
                        <th className={curElem.isComplete ? "wavy" : ""}>
                          {index + 1}
                        </th>
                        <th className={curElem.isComplete ? "wavy" : ""}>
                          {curElem.task}
                        </th>
                        <th
                          className={`${
                            curElem.isComplete ? "wavy" : ""
                          } task-date d-flex justify-content-center`}
                        >
                          <span>{curElem.date}</span> /{" "}
                          <span>{curElem.month}</span>
                        </th>
                        <th>
                          {!curElem.isComplete ? (
                            <i
                              className="fa-regular fa-square-check"
                              onClick={() => toggleComplete(curElem.id, index)}
                            ></i>
                          ) : (
                            <i
                              className="fa-solid fa-square-check"
                              onClick={() => toggleComplete(curElem.id, index)}
                            ></i>
                          )}
                        </th>
                        <th>
                          <i
                            className="fa-solid fa-edit"
                            onClick={() => editToDo(curElem.id, index)}
                          ></i>
                        </th>
                        <th>
                          <i
                            className="fa-solid fa-trash-can"
                            onClick={() => deleteTask(curElem.id)}
                          ></i>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button
                className="btn btn-outline-secondary my-5"
                type="button"
                onClick={() => {
                  setToDo([]);
                }}
              >
                Delete All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
