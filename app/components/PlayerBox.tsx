export default function PlayerBox(prop: { player: string; removePlayer: (name: string) => void }) {
    var name = prop.player.trim().replace(/[\n\r\t]/gm, "-");
    var maxLength = 10;
    if (prop.player.length > maxLength) {
        name = prop.player.substring(0, maxLength - 3) + "...";
    }

    return (
        <div className="container border border-gray-400 rounded p-4 mb-4 grid grid-cols-4">
            <div className="col-span-2">
                <h3 className="text-lg font-semibold m-4 mr-32">{name}</h3>
            </div>

            <div className="text-sm justify-end m-auto">
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                Edit
                </button>
            </div>
            <div className="text-sm justify-end m-auto">
                    <button
                    onClick={() => prop.removePlayer(prop.player)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                    Delete
                    </button>
                </div>
            
        </div>
    );
}         