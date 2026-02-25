import PlayerBox from "../PlayerBox";

export default function ListPlayers(prop: { playerNumber: number; players: string[]; removePlayer: (name: string) => void }) {
    return (
        <div>
            <div className="px-6 py-4">
          {prop.playerNumber === 0 ? (
            <p className="text-gray-700 text-base">No players added yet.</p>
          ) : (
            <ul className="list-none list-inside ">
                {Array.from(prop.players).map((player, index) => (
                    <li key={index} className="text-gray-700 text-base"> 
                    <PlayerBox player={player} removePlayer={(name) => {
                        prop.removePlayer(name);
                    }} />
                    </li>
                ))}
            </ul>
          )}
        </div>
        </div>
    );
}