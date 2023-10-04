"use client";
import React,{ MouseEventHandler, useState } from "react";




const Form = () => {
   const [tasks, setTasks] = React.useState("");
   const [desc, setDesc] = React.useState("");
   const [mainTask, setMainTask] = React.useState<any[]>([]);

   const handleSubmit  = (e: any) => {
      e.preventDefault();
      setMainTask([...mainTask, {tasks, desc}])
      console.log(mainTask);
      setTasks("");
      setDesc("");

   };

   const deleteHandler = (i: any) => {
    const copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);


   }
  
   return (
    <div className="flex flex-col m-14 p-14
         bg-purple-300 text-white">
   <form className="flex justify-start gap-10 w-3/4" 
   onSubmit={handleSubmit}
   >
    <div className="flex items-center">
    <label className="block text-white bg-pink-400
      text-3xl font-bold m-2 text-center p-2 "
     htmlFor="task">
        Tasks
      </label>
    <input 
     type="text"
     name="task"
     placeholder="Enter task name"
     value={tasks}
     onChange={(e) => setTasks(e.target.value)}
     className="m-3 p-3 text-black"
    />
    </div>
    <div className="flex items-center">
    <label className="block text-white text-3xl bg-pink-400
    font-bold m-2 p-2 text-center"
     htmlFor="desc">
        Descrip
      </label>
    <input 
     type="text"
     name="desc"
     placeholder="Enter Description here"
     value={desc}
     onChange={(e) => setDesc(e.target.value)}
     className="m-3 p-3  text-black"
    />
    </div>

    <button className="bg-blue-500  hover:bg-blue-700
    rounded  text-white
     font-semibold m-3 p-3">
        Add Tasks
    </button>

   </form>

       <div className="flex justify-between gap-5 
                bg-white text-orange-500 m-3 p-3 text-lg
                 font-semibold">
        { (mainTask.length === 0 ) ? <h5 className="text-black
         text-xl">No Tasks Available</h5> :
             (mainTask.map((t, i) => (
                <li key={i}>
                  <h5>{t.tasks.toUpperCase()}</h5> 
                   <h6>{t.desc.toUpperCase()}</h6>
                   
                   <button className="bg-red-700  hover:bg-red-900
                     rounded  text-white
                     font-semibold m-2 p-2"
                     onClick ={() => deleteHandler(i)}
                   >Delete</button>
                </li>
                
            ))
            )
        }
       </div>

    </div>
  )
};

export default Form;