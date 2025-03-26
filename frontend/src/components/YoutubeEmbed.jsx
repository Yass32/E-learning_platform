// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactPlayer from 'react-player';

// eslint-disable-next-line react/prop-types
const YouTubeEmbed = ({url}) => {
  return (
    <div className="relative w-full pb-[50%] h-0 ">
      <ReactPlayer
        url={url}
        controls
        className="absolute w-full"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default YouTubeEmbed;
