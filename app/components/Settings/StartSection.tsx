export default function StartSection(prop: {handleStart: () => void}) {

    return (
        <div className="flex flex-col items-center">
          <button
            onClick={prop.handleStart}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ">
            Start
          </button>
        </div>
    );
}