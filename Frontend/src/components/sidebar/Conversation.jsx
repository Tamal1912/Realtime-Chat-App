import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-lime-500 rounded-lg p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded">
            <img src="https://avatar.iran.liara.run/public" alt="User Avatar" srcset="" />
          </div>
        </div>
        <div className="flex flex-1 flex-col ">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-white">John</p>
            <span className="text-xl">🫡</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-2"/>

    </>
  );
};

export default Conversation;
