// SongCard.js
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

const SongCard = ({ song }) => {
  const [playAudio, setPlayAudio] = useState(false);

  const handleClick = () => {
    setPlayAudio(true);
    console.log("Clicked! Song color:", song.color);
  };

  const videoId = song.audio.split('v=')[1]?.split('&')[0];

  return (
    <div className={`bg-${song.color}  p-4 m-2 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105`}>
      <h2 className="text-xl font-bold mb-2">{song.song}</h2>
      <p className="text-gray-600">Singers: {song.singer.join(', ')}</p>
      <p className="text-gray-600">Type: {song.type}</p>
      <p className="text-gray-600">Language: {song.language}</p>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
        Play Audio
      </button>
      {playAudio && (
        <>
          <YouTube
            videoId={videoId}
            opts={{ width: '0', height: '0' }}
          />
          <ReactPlayer
            url={song.audio}
            playing={true}
            controls={true}
            width="0"
            height="0"
          />
        </>
      )}
    </div>
  );
};

export default SongCard;
