"use client";
import { useState } from "react";

export default function Home() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);

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
                  className="px-2 border-transparent outline-none w-64 focus-within:outline focus-within:outline-[rgba(0,230,122)]"
                  type="text"
                  placeholder="What's the task description?"
                />
              </div>

              <div className="w-full">
                <button className="primaryBtn text-white capitalize bg-green-600 p-1 px-2 rounded-sm hover:bg-green-800">
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
          <div className="todo-list-item text-white mt-4">
            <h3>Task 1</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
    </main>
  );
}
