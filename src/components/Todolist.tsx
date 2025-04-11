import { useState } from "react";
const Todolist = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newtask, setNewTask] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newtask.trim() !== ""){
      setTasks(t=>[...t, newtask]);
      setNewTask("");
    }
  };
  const deleteTask = (index: number) => {
    const UpdatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(UpdatedTasks);
  };

  const moveTaskUp = (index:number) => {
    if (index > 0 ) {
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index -1 ]] = [updatedTasks[index -1],updatedTasks[index]];
      setTasks(updatedTasks);


    }
  }
  const moveTaskDown = (index : number) =>{
  if (index < tasks.length - 1) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  }
  }

  
  return (
    <div className="bg-black h-screen w-screen flex justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold font-sans p-5 text-white mt-20 ">
          To-Do-List
        </h1>
        <input
          className="text h-10 w-80 border-2 rounded-l-xl text-center text-white placeholder-gray-400 bg-black "
          type="text"
          placeholder="Add Your Task"
          value={newtask}
          onChange={handleInputChange}
        />
        <button
          className="border-2 hover:bg-green-800 w-15 h-10 rounded-r-xl bg-green-400"
          onClick={addTask}
        >
          Add
        </button>
        <ol className="mt-5 p-0">
          {tasks.map((task, index) => (
            <li
              className="text-2xl text-center p-2 font-bold bg-gray-100 mb-2.5 border-2 border-gray-300 rounded-xl flex items-center  "
              key={index}
            >
              <span className="flex-1">{task}</span>
              <button
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 rounded-lg p-2 "
                onClick={() => moveTaskUp(index)}
              >
                👆
              </button>
              <button
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 rounded-lg p-2 ml-2"
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
              <button
                className="cursor-pointer bg-red-500 hover:bg-red-700 rounded-lg p-2 ml-2"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Todolist;
