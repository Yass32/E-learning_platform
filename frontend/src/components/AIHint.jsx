/* eslint-disable react/prop-types */
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";


const AIHint = ({ hint, hintVisibility, setHintVisibility }) => {
      return(
            <>
                  <button className="flex items-center text-sm text-gray-600 hover:text-rose-700 focus:outline-none" onClick={() => setHintVisibility(!hintVisibility)}>
                        <BiSolidRightArrow  className={`inline-block size- mr-1 transition-transform ${hintVisibility ? "rotate-90" : ""}`}/>
                        <strong>AI Hint:</strong> 
                  </button>
                  {/* Hint Text with Slide-In Transition */}
                  <div className={`transition-all duration-300 ease-in-out`}
                        style={{ maxHeight: hintVisibility ? '100px' : '0', opacity: hintVisibility ? 1 : 0 }}>
                        <div className="mt-1 text-sm text-gray-700">
                        {hint || "Loading hint..."}
                        </div>
                  </div>
            </>
      )
}

export default AIHint;