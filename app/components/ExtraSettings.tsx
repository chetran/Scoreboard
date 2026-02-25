export default function ExtraRules({ Kong, setKong }: { Kong: number; setKong: (value: number) => void }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 p-4 border border-gray-500 mx-auto">
            <div className="m-2"> 
                <h2 className="text-xl font-bold">Extra Settings</h2>
                <ul className="list-none ">
                <li className="text-gray-700 text-base"> 
                    Kong: 
                    <input className="ml-5" type="number" placeholder="0" min={0} value={Kong} onChange={(e) => setKong(Number(e.target.value))} />              
                </li>
                </ul>
            </div>
        </div>
    );
}