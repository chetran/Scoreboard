import { useState } from "react";


export default function AddPlayers(prop: {players: number, addPlayer: (name: string) => void}) {
    const [name, setName] = useState<string>("");

    return (
        <div>
            <div className="m-2"> 
            <h2 className="text-xl font-bold inline ml-10 mr-35">Players: {prop.players}</h2>
            </div>
                <div className="m-6">
                    <div className="my-4">
                    <input
                        type="text"
                        placeholder="Player Name"
                        className="border border-gray-300 rounded px-3 py-2 mr-2"
                        id="playerName"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        
                        />
                    <button
                        onClick={() => {
                            if (name.trim() !== "") {
                                prop.addPlayer(name.trim());
                                setName("");

                            }
                        }}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold rounded-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-3 border-green-700 hover:border-green-500 rounded text-sm"
                        >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}