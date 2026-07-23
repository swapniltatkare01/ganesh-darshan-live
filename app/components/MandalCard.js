import Button from "./Button";
export default function MandalCard(props) {
    return (
        <div className="flex flex-col gap-4   rounded-lg p-4 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ">
            <div className="h-40 w-full  rounded-lg overflow-hidden relative">
                <img src={props.image} alt={props.name} className="w-full h-full object-cover" />
                 <div className="rounded-full px-3 py-1 text-sm bg-red-500 text-white flex items-center justify-center absolute top-2 left-2">LIVE</div>
            </div>
            <h1 className="text-xl font-bold">{props.name}</h1>
            <p className="text-gray-600" >📍{props.location}</p>
            <Button text="📺 Watch Live" />
           

        </div>
    );
}