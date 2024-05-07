"use client"
import { useEffect, useState } from 'react';
import SongCard from '../components/SongCard';
import { Song } from '@/types/types';

const Songs: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetch('/api/songs')
      .then(response => response.json())
      .then(data => setSongs(data));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {songs.map(song => (
        <SongCard key={song.song} song={song} />
      ))}
    </div>
  );
};

export default Songs;
