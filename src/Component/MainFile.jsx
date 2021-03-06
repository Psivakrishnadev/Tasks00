import React, { useState } from "react";
import First from "./ChildComponent/First";

const jsonData = [
  {
    id: "1",
    title: "Metadata creation",
    description: `  Text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`,
  },
  {
    id: "2",
    title: "Program scheduling",
      description: `  Ipsum is simply dummy text of the printing and
     been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`,
  },
  {
    id: "3",
    title: "Dynamic graphics",
    description: ` Graphic designing  is simply dummy text typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`,
  },
  {
    id: "4",
    title: "Storage and archival",
    description: `  Some websites is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the  dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`,
  },
];
const MainFile = () => {
  const [data, setData] = useState(jsonData);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [order, setOrder] = useState("")

  const handleSubmit = () => {
    setData([...data, { "id": order, "title": title, "description": description }])
  }
  return (
    <>
      <main className="w-full md:w-9/12 mx-auto px-8 text-center ">
        <div>
          <h1 className="text-2xl font-bold mt-12 mb-4">
            Channel Creation
                  </h1 >
                  <p className="text-gray-600 font-semibold text-left w-11/12 mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
                  </p>
        </div>
        <section className="grid justify-between md:grid-cols-2 gap-10 lg:gap-9 xl:gap-9 w-11/12 mx-auto mt-10">
          {data.map((items, index) => (
            <div className=" w-96" key={index}>
              <First key={index} items={items} />
            </div>
          ))}
        </section>

          <form className="mt-12">
            <div className="flex flex-col gap-4  w-8/12 mx-auto mb-24"> 
              <div className=" flex flex-row items-center gap-4 w-96">
              <label >
              Title
            </label>
            <input
              id="title"
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
             
              className="w-96 border border-purple-500 py-2 rounded-lg pl-4"
            />
          </div>
              <div className="flex flex-row items-center gap-4 w-96">
              <label>
              Description
              </label>
            <input
              id="title"
              placeholder="Description"
              type="text"
              value={description}
                onChange={ (e)=> setDescription(e.target.value)}
              className="w-96 border border-purple-500 py-2 rounded-lg pl-4"
            />
          </div>
              <div className="flex flex-row items-center gap-4 w-96">
              <label htmlFor="email" >
              Order
              </label>
            <input
              id="title"
              placeholder="Order"
              type="text"
              value={order}
              onChange={(e)=>setOrder(e.target.value)}
              className="w-96 border border-purple-500 py-2 rounded-lg pl-4"
            />
          </div>
        

            <button
              type="button"
              className=" bg-blue-700 text-white rounded-lg px-10 py-2 w-32 mx-auto text-center"
              onClick={handleSubmit} 
            >
              Add
            </button>
           </div>
           
          </form>
      
      </main>
    </>
  );
};
    

export default MainFile;
