import { ScrollText, Mail } from "lucide-react";
import React from "react";

function AlertNote() {
  return (
    <div className="border-2 border-dotted border-[#646cff] p-5 bg-[#646cff14] text-[#bcc0ff] m-5 max-w-[800px] rounded-lg mx-auto">
      <div className="alert-header flex flex-col gap-4 justify-between ">
        <div className="title-icon-header flex items-center gap-2 ">
          <span>
            <ScrollText size={30} />
          </span>
          <h3 className="text-2xl sm:text-4xl">Note</h3>
        </div>

        <div className="flex justify-between">
          <h2 className="flex items-center  gap-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-lg sm:text-2xl">
            All items will sent via Email
            <Mail className="text-white" />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AlertNote;
