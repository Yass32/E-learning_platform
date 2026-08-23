// h-[15vh]import React from "react";

// eslint-disable-next-line react/prop-types 
const OutputConsole = ({ output }) => {
    return (
      <div className="bg-[#1e1e1e] text-white p-4 rounded-xl mt-4 shadow-lg border border-black/20">
        <h4 className="font-semibold text-sm text-gray-400 mb-2 uppercase tracking-wide">Output</h4>
        <pre className="whitespace-pre-wrap break-words font-mono text-sm">{output || "..."}</pre>
      </div>
    );
  };

export default OutputConsole;
