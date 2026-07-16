import Button from "./Button";
export default function MandalCard(props){
    return(
        <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-lg p-4 ">
            <h1 className="text-xl font-bold">{props.name}</h1>
            <p className="text-gray-600" >📍{props.location}</p>
            <Button text="Watch Live"/>

        </div>
    );
}