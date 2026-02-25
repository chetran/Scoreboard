import { useState } from "react";

export default function GameRules(prop : {onSubmit: (settings: {discardLoss: number; discarder: number; selfWin: number}) => void}) {
    const [discardLoss, setDiscardLoss] = useState<number>(5);
    const [discarder, setDiscarder] = useState<number>(10);
    const [selfWin, setSelfWin] = useState<number>(10);

    const handleSubmit = (discardLoss: number, discarder: number, selfWin: number) => {
        setDiscardLoss(discardLoss);
        setDiscarder(discarder);
        setSelfWin(selfWin);
        prop.onSubmit({discardLoss, discarder, selfWin});
    };


    return (
        <div className="max-w-3xl rounded overflow-hidden shadow-lg m-5 p-4 border border-gray-500 mx-auto">
            <div className="m-2 flex flex-col"> 
                <h2 className="text-xl font-bold mr-35">Game Settings</h2>
                <ul className="list-none ">
                <li className="text-gray-700 text-base"> 
                    Discard Loss: 
                    <input className="ml-5" type="number" min={0} value={discardLoss} onChange={(e) => handleSubmit(Number(e.target.value), discarder, selfWin)} />              
                </li>
                <li className="text-gray-700 text-base"> 
                    Discarder (Sek): 
                    <input className="ml-5" type="number" min={0} value={discarder} onChange={(e) => handleSubmit(discardLoss, Number(e.target.value), selfWin)} />              
                </li>
                <li className="text-gray-700 text-base"> 
                    Self Win (Zimo): 
                    <input className="ml-5" type="number" min={0} value={selfWin} onChange={(e) => handleSubmit(discardLoss, discarder, Number(e.target.value))}/>              
                </li>
                </ul>
            </div>
        </div>
    );
}