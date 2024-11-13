import { useState } from "react";                    // importing useState from React

const Todolist = () => {                             //it defines a functional component
  const [TodoInput, setTodoInput] = useState("");    //TodoInput stores the value of text input field, setTodoInput used to update the state
  const [Todolist, setTodoList] = useState([]);      //TodoList will hold the tasks, initially it sets to an empty array ([]), setTodoList update the state.
  
  const addtodolist = () => {                         //a function to add a new task
    if (TodoInput.trim() === "") return;              //Check if input is empty
    setTodoList((prev) => [...prev, TodoInput]);      //Add the task to the todo list
    setTodoInput("");                                 //resetting the TodoInput to empty string
  };

  return (  
    <div style={{ height: "100vh", backgroundColor: "#9EDF9C" }} >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "30vh", backgroundColor: "#9EDF9C" }}
      >
        <input
          value={TodoInput}                               //it binds the input field to TodoInput state
          className="ms-1 px-3 py-2"
          type="text"
          placeholder="Enter the task"
          onChange={(e) => setTodoInput(e.target.value)}  //onChange(); event handler updates the TodoInput
        />
        <button
          className="bg-success ms-1 border border-white px-3 py-2 text-white"
          onClick={addtodolist}                          //it runs addtodolist on every click
          >                          
          Add
        </button>
      </div>


      <div className="d-flex justify-content-center align-items-center flex-column">
        {Todolist.length === 0 ? (                               //This is conditional rendering
          <h4 className="fs-2 text-success fw-bold">The task will be shown here...</h4>
        ) : (
          Todolist.map((todo, index) => (                        //Iterates over each item in TodoList
            <div 
              key={index} 
              className="d-flex justify-content-between align-items-center w-25"
            >
              <h4 className="mt-3 text-success fw-bold">                     
                {todo}                                           {/*This prints the task*/}
              </h4>           
              <button
                className="btn btn-danger my-2"
                onClick={() => {                                 //this event handler runs on every click
                  const newTodoList = Todolist.filter((item, i) => i !== index);
                 
                  setTodoList(newTodoList);
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todolist;
