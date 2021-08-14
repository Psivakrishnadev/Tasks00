import React from "react";

const index = ({ items }) => {
  const { id, title, description } = items;
  return (
    <>
      <main className="mt-8">
        <div className="text-2xl font-bold mt-5 flex gap-3">
          <span className="text-blue-600 mb-2">0{id}</span>
          {title}
        </div>
        <div className="w-96">
          <div className="w-96 h-1 bg-blue-600"></div>
          <p className=" text-gray-600 font-semibold text-left mt-4">{description}</p>
        </div>
      </main>
    </>
  );
};

export default index;
