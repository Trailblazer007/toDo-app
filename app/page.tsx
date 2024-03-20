"use client";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

type TodoItem = {
  title: string;
  description: string;
};

export default function Home() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setAllTodos] = useState<TodoItem[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = () => {
    let newTodoItem: TodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setAllTodos(updatedTodoArr);
  };

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
            {/* <div className="todo-list-item bg-gray-900 p-6 px-3 mt-4 flex justify-between items-center ">
              <div className="shadow-4xl text-gray-500 flex flex-col mb-3">
                <h3 className="font-bold text-2xl text-green-600">Task 1</h3>
                <p>Description</p>
              </div>

              <div className="icons flex gap-2 text-4xl cursor-pointer">
                <AiOutlineDelete className="delete-icon text-white hover:text-red-600" />
                <FaCheck className="check-icon text-green-600 hover:text-green-800" />
              </div>
            </div> */}

            {allTodos.map((item, index) => {
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
                    <AiOutlineDelete className="delete-icon text-white hover:text-red-600" />
                    <FaCheck className="check-icon text-green-600 hover:text-green-800" />
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
