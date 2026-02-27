import { useState } from "react";


export default function AddPlayers(prop: {players: number, addPlayer: (name: string) => void}) {
    const [name, setName] = useState<string>("");

    const incrementPlayers = () => {
        prop.addPlayer('Player');
    }
    // TODO This function can be implemented to remove the last player added or a specific player if needed.
    const decrementPlayers = () => {
        console.log("Decrement players");
    }

    return (
        <div>
            <div className="m-2"> 
            <div className="container grid grid-cols-2 max-w-3xl rounded overflow-hidden shadow-lg m-5 p-4 border border-gray-500 mx-auto">
                <div className="col-span-1 flex justify-start items-center">
                    <h2 className="text-xl font-bold ml-2">Players: </h2>
                </div>

                <div className="col-span-1 flex justify-end items-center">
                    <svg onClick={decrementPlayers} className="mr-4 content-center" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20m5-11H5v2h10z"/></svg>
                    <p className="text-lg font-bold ml-2 mr-2">{prop.players}</p>
                    <svg onClick={incrementPlayers} className="ml-4" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"/></svg>
                </div>
                
            </div>
            
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