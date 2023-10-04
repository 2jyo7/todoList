import Form from "@/components/Form";

const Page = () => {
  return (
    <div className="bg-purple-200 h-screen">
      <div className="flex flex-col items-center m-3 p- 10 w-full">
     <h1 className="flex text-black 
       text-4xl font-semibold
      bg-purple-300 justify-center m-5
     p-10 ">My TODO'S Lists</h1>

     <p className="flex justify-center
        font-semibold text-xl
     text-black bg-gray-400
     m-3 p-5"> 
       Hello There! Welcome to your TODO List app.<br />
        Add as many Tasks you want, whos"s gonna stop you Love.
       </p>
     
       </div>
 
     <Form />
    
</div>
  )
};


export default Page;