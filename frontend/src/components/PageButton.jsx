// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const PageButton = ({url, text}) => {
  return (
    <a href={url}>
      <button className="text-white bg-rose-600 rounded-md p-2 w-fit text-xs hover:bg-rose-800 transition-all duration-200">
        {text}
      </button>
    </a>
  );
};

export default PageButton;
