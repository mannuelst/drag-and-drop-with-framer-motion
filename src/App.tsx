import { Reorder } from 'framer-motion';
import { useState } from "react";
import song_list from './data/songs.json';
type Song = {
  id: number,
  title: string,
  artist: string,
  duration: string,
  image: string
}
function App() {
  const [songs, setSongs] = useState<Song[]>(song_list)
  function handleReorder(novo_valores: Song[]) {
    // console.log(novo_valores)
    setSongs(novo_valores)
  }
  return (
    <div className="flex items-center justify-center min-h-screen text-slate-800 bg-zinc-700">
      <div className="w-full max-w-lg px-4 py-10 my-10 bg-white rounded-lg shadow-2xl">
        <div className="h-56 -mx-4 -mt-10 bg-[url('/background-header.jpg')] bg-cover  flex items-end mb-8">
          <h1 className="w-full p-6 text-3xl font-bold text-left text-white bg-black bg-opacity-50">
            Playlist - Soft Pop Hits
          </h1>
        </div>
        <div className="">
          <Reorder.Group as='div' axis='y'
            values={songs}
            onReorder={handleReorder}>
            {songs.map((song) => (
              <Reorder.Item as='div'
                value={song}
                key={song.id}
                className="flex items-center w-full gap-6 p-4 mx-auto mb-4 card "
              >
                <span className="text-slate-400 border-slate-200 cursor-grab">
                  <img src="/grab-icon.svg" alt="grab icon" className="pointer-events-none w-8 h-8" />
                </span>
                <img src={song.image} alt="" className=" pointer-events-none w-14 hue-rotate-30" />
                <div className="w-full card-header">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold ">{song.title}</h3>
                    <p className="text-sm text-slate-600">{song.duration}</p>
                  </div>
                  <p className="text-sm text-slate-400">{song.artist}</p>
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
}

export default App;
