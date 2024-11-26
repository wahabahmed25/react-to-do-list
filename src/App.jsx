import { useState } from 'react';

const App = () => {
  const [myArray, setMyArray] = useState([]); // Holds the list of tasks
  const [inputValue, setInputValue] = useState(''); // Holds the value of the input field

  const handleAddTask = () => {
    // Adds a new task to the list
    if (inputValue.trim()) {
      setMyArray([...myArray, inputValue]);
      setInputValue(''); // Clears the input field after adding
    }
  };

  return (
    <>
      <div className="mx-auto p-4">
        <nav className="flex justify-center items-center space-x-5 bg-gray-800 p-4 rounded-md">
          <input
            type="text"
            id="input"
            placeholder="Enter ToDo: "
            name="toDo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Updates input value
            className="border-solid border-blue-500 rounded w-[45%] p-[5px]"
          />
          <button
            className="text-white border p-[5px] border-white text-[14px] hover:bg-gray-600"
            onClick={handleAddTask} // Calls the function to add tasks
          >
            Add Task
          </button>
        </nav>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Your To-Do List:</h3>
        {myArray.length === 0 ? (
          <p className="text-gray-500">No tasks added yet!</p>
        ) : (
          <ul className="list-disc pl-5">
            {myArray.map((task, index) => (
              <li key={index} className="mb-1 text-gray-700">
                {task}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default App;
