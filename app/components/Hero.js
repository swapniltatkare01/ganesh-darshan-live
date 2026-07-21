import Button from "./Button";
export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 m-4 text-center ">
            <div className="text-6xl">🕉️</div>
            <h1 className="text-3xl font-bold">Ganesh Darshan Live</h1>

            <p className="text-gray-600">Experience live darshan of famous Ganpati</p>
            <Button text="live view"/>
        </div>
    );
}