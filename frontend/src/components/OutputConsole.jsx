// h-[15vh]import React from "react";

// eslint-disable-next-line react/prop-types 
const OutputConsole = ({ output }) => {
    return (
      <div className=" bg-[#1e1e1e] text-white p-4 rounded-md mt-4 shadow-lg">
        <h4 className="font-semibold text-lg mb-2">Output:</h4>
        <pre className="whitespace-pre-wrap break-words">{output || "..."}</pre>
      </div>
    );
  };

export default OutputConsole;
