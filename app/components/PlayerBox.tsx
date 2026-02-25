export default function PlayerBox(prop: { player: string; removePlayer: (name: string) => void }) {
    return (
        <div className="border border-gray-300 rounded p-4 mb-4">
            <h3 className="text-lg font-semibold inline m-4 mr-32">{prop.player}</h3>
    
                <button
                    onClick={() => prop.removePlayer(prop.player)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                    Remove
                </button>
        </div>
    );
}         