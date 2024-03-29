"use client";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

type TodoItem = {
  title: string;
  description: string;
};

type filteredItem = {
  completedOn: string;
  title: string;
  description: string;
};

export default function Home() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setAllTodos] = useState<TodoItem[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState<filteredItem[]>([]);

  const handleAddTodo = () => {
    let newTodoItem: TodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setAllTodos(updatedTodoArr);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoArr));
  };

  const handleDeleteTodo = (index: number) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index);

    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setAllTodos(reducedTodo);
  };

  const handleComplete = (index: number) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = `${dd} - ${mm} - ${yyyy} at ${h} : ${m} : ${s}`;

    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn,
    };

    // let updatedCompletedArr = [...completedTodos];
    let updatedCompletedArr: filteredItem[] = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist") as string);
    if (savedTodo) {
      setAllTodos(savedTodo);
    }
  }, []);

  return (
    // Wrapper
    <main className="min-h-screen bg-gray-950 flex justify-center overflow-hidden">
      <div className="">
        <h1 className="mt-6 mb-8 text-white text-center text-2xl font-bold">
          My Todos
        </h1>

        <div className="p-6 bg-gray-800">
          {/* inputs and button */}
          <form action="">
            <div className="w-fit pb-6 border-b border-gray-400 flex gap-6 justify-center items-end">
              <div className="">
                <label className="mb-2 text-white font-bold">Title:</label>
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="px-2 border-transparent outline-none w-64 focus-within:outline focus-within:outline-[rgba(0,230,122)]"
                  type="text"
                  placeholder="What's the title of your To Do?"
                />
              </div>

              <div className="w-full">
                <label className="mb-2 text-white font-bold">
                  Description:
                </label>
                <input
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="px-2 border-transparent outline-none w-64 focus-within:outline focus-within:outline-[rgba(0,230,122)]"
                  type="text"
                  placeholder="What's the task description?"
                />
              </div>

              <div className="w-full">
                <button
                  type="button"
                  onClick={handleAddTodo}
                  className="primaryBtn text-white capitalize bg-green-600 p-1 px-2 rounded-sm hover:bg-green-800"
                >
                  Add
                </button>
              </div>
            </div>
          </form>

          {/* button area*/}
          <div className="flex mt-8 btn-area">
            <button
              className={`secondaryBtn ${
                isCompleteScreen === false && "active"
              }  bg-gray-600 text-white p-2 w-fit`}
              onClick={() => setIsCompleteScreen(false)}
            >
              To Do
            </button>

            <button
              className={`secondaryBtn ${
                isCompleteScreen === true && "active"
              }  bg-gray-600 text-white p-2 w-fit`}
              onClick={() => setIsCompleteScreen(true)}
            >
              Completed
            </button>
          </div>

          {/* todo list */}
          <div className="todo-list">
            {isCompleteScreen === false &&
              allTodos.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="todo-list-item bg-gray-900 p-6 px-3 mt-4 flex justify-between items-center "
                  >
                    <div className="shadow-4xl text-gray-500 flex flex-col mb-3">
                      <h3 className="font-bold text-2xl text-green-600">
                        {item.title}
                      </h3>
                      <p>{item.description}</p>
                    </div>

                    <div className="icons flex gap-2 text-4xl cursor-pointer">
                      <AiOutlineDelete
                        onClick={() => handleDeleteTodo(index)}
                        title="Delete?"
                        className="delete-icon text-white hover:text-red-600"
                      />
                      <FaCheck
                        onClick={() => {
                          handleComplete(index);
                        }}
                        title="Complete?"
                        className="check-icon text-green-600 hover:text-green-800"
                      />
                    </div>
                  </div>
                );
              })}

            {isCompleteScreen === true &&
              completedTodos.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="todo-list-item bg-gray-900 p-6 px-3 mt-4 flex justify-between items-center "
                  >
                    <div className="shadow-4xl text-gray-500 flex flex-col mb-3">
                      <h3 className="font-bold text-2xl text-green-600">
                        {item.title}
                      </h3>
                      <p>{item.description}</p>
                      <p>
                        <small>Completed on: {item.completedOn}</small>
                      </p>
                    </div>

                    <div className="icons flex gap-2 text-4xl cursor-pointer">
                      <AiOutlineDelete
                        onClick={() => handleDeleteTodo(index)}
                        title="Delete?"
                        className="delete-icon text-white hover:text-red-600"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
