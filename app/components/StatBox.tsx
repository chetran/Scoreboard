import {useState} from "react";

export default function Statbox(prop: {title: string; value: string, win ?: boolean, handleWin: (fromPlayer: string) => void, selectWinner: (player: string) => void, winner ?: string}) {

    
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 p-4 border border-gray-500 mx-auto">
            <div className="flex flex-col items-center w-full">
                <span className="text-lg font-semibold">{prop.title}</span>
                <div className="flex flex-row items-center w-full">
                    <div className="flex-1 flex justify-start">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold rounded px-4">
                        Edit
                    </button>
                    </div>

                    <div className="flex-1 flex justify-center">
                    <span className="text-2xl">{prop.value}</span>
                    </div>

                    <div className="flex-1 flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4">
                        Active
                    </button>
                    </div>
                </div>

                {prop.win && !(prop.winner === prop.title) ? (
                    <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={() => prop.handleWin(prop.title)}
                    >
                    Discarder!
                    </button>
                ) : prop.win ? (
                    <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={() => prop.handleWin(prop.title)}
                    >
                    Self Win!
                    </button>
                ) : (
                    <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={() => prop.selectWinner(prop.title)}
                    >
                    Win
                    </button>
                )}
            </div>

        </div>
    );
}