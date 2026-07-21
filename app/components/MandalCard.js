import Button from "./Button";
export default function MandalCard(props) {
    return (
        <div className="flex flex-col gap-4   rounded-lg p-4 shadow-lg transition-all duration-300 hover:translate-y-2 hover:shadow-2xl cursor-pointer ">
            <div className="h-40 w-full bg-gray-200 rounded-lg flex justify-center items-center">
                🛕
            </div>
            <h1 className="text-xl font-bold">{props.name}</h1>
            <p className="text-gray-600" >📍{props.location}</p>
            <Button text="📺 Watch Live" />
            <div className="rounded-lg px-3 py-1 text-sm bg-red-500 text-white flex items-center justify-center">LIVE</div>

        </div>
    );
}