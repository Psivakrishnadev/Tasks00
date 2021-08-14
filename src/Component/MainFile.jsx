import React from "react";
import First from "./ChildComponent/First";


const data = [
  {
    id: 1,
    title: "Metadata creation",
    description: `  Text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`,
  },
  {
    id: 2,
    title: "Program scheduling",
      description: `  Ipsum is simply dummy text of the printing and
     been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`,
  },
  {
    id: 3,
    title: "Dynamic graphics",
    description: ` Graphic designing  is simply dummy text typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`,
  },
  {
    id: 4,
    title: "Storage and archival",
    description: `  Some websites is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the  dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`,
  },

  {
    id: 5,
    title: "Storage and archival",
    description: `  Some websites is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the  dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`,
  },
];
const MainFile = () => {
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
            <div className=" w-96">
              <First key={index} items={items} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default MainFile;
