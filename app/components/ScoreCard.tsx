import {useState} from "react";
import Statbox from "./StatBox";
import GameRules from "./GameSettings";

export default function ScoreCard(props: {players: string[]; gameRules: any}) {
    console.log(props.gameRules);
    const info = new Map<string, number>();
    for (const player of props.players) {
        info.set(player, 0);
    }

    const [scores, setScores] = useState<Map<string, number>>(info);
    const [win, setWin] = useState(false);
    const [winner, setWinner] = useState<string>("");
    
    const handleWin = (fromPlayer: string) => {
        const newScores = new Map(scores);
        if (winner === fromPlayer) {
            newScores.set(winner, (newScores.get(winner) || 0) + props.gameRules.selfWin * (props.players.length - 1));
            props.players.forEach(player => {
                if (player !== winner) {
                    const currentScore = newScores.get(player) || 0;
                    newScores.set(player, currentScore - props.gameRules.selfWin);
                }
        } )} else {
            console.log("Discarder:", fromPlayer, "Winner:", winner);
            newScores.set(fromPlayer, (newScores.get(fromPlayer) || 0) - props.gameRules.discarder);
            newScores.set(winner, (newScores.get(winner) || 0) + props.gameRules.discarder + props.gameRules.discardLoss * (props.players.length - 2));
            props.players.forEach(player => {
                if (player !== winner && player !== fromPlayer) {
                    const currentScore = newScores.get(player) || 0;
                    newScores.set(player, currentScore - props.gameRules.discardLoss);
                }
                
            });
        }
        setScores(newScores);
        setWin(false);
        setWinner("");
    }
    

    const selectWinner = (player: string) => {
        setWin(true);
        setWinner(player);
    }
    
    return (<>
       <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 p-4 border border-gray-500 mx-auto">
        {props.players.map((player, index) => (
            <Statbox 
                key={index} 
                title={player} 
                value={scores.get(player)?.toString() || "0"} 
                win={win} 
                handleWin={handleWin}
                selectWinner={selectWinner}
                winner={winner}
        
            />
        ))}

       </div>
    </>);
}