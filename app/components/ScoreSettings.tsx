import { useState } from "react";
import Player from "./Player";
import AddPlayers from "./AddPlayers";
import ListPlayers from "./ListPlayers";
import GameSettings from "./GameSettings";
import ExtraSettings from "./ExtraSettings";
import StartSection from "./StartSection";
import { useNavigate } from "react-router";
import Rule from "./Rule";

export default function ScoreSettings() {

  const navigate = useNavigate();

  
  const [discardLoss, setDiscardLoss] = useState<number>(5);
  const [discarder, setDiscarder] = useState<number>(10);
  const [selfWin, setSelfWin] = useState<number>(15);
  const [Kong, setKong] = useState<number>(0);

  const [playerNumber, setPlayerNumber] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [players, setPlayers] = useState<string[]>([]);
  const [data, setData] = useState<Map<string, number>>(new Map());
  
  const addPlayer = (name: string) => {
    setPlayerNumber(prev => prev + 1);

    const newData = new Map(data);
    const count = newData.get(name) ?? 0;
    newData.set(name, count + 1);
    setData(newData);

    const realName = count === 0 ? name : `${name}${count}`;
    setPlayers(prev => [realName, ...prev]);
  };

  const removePlayer = (name: string) => {
  setPlayerNumber(prev => prev - 1);

  setPlayers(prev => prev.filter(p => p !== name));
};

  const startGame = () => {
    if (players.length < 2) {
      alert("Please add at least two players to start the game.");
      return;
    }

    const gameRules =  {
      discardLoss,
      discarder,
      selfWin,
    };

    const ExtraRules = {
      Kong
    }

    navigate(`/score?players=${JSON.stringify(players)}&gamerules=${JSON.stringify(gameRules)}&extrarules=${JSON.stringify(ExtraRules)}`);
  }

  const updateGameSettings = (settings: {discardLoss: number; discarder: number; selfWin: number}) => {
    setDiscardLoss(settings.discardLoss);
    setDiscarder(settings.discarder);
    setSelfWin(settings.selfWin);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 p-4 border border-gray-500 mx-auto">
        <GameSettings onSubmit={updateGameSettings} />
        <ExtraSettings Kong={Kong} setKong={setKong} />
        <AddPlayers players={playerNumber} addPlayer={addPlayer} />
        <ListPlayers playerNumber={playerNumber} players={players} removePlayer={removePlayer} />
        <StartSection handleStart={startGame} />
    </div>
  );
}