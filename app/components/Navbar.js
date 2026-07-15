export default function Navbar() {
    return (
        <div>
            <nav className="flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Ganesh Darshan Live</h1>
            <ul className ="flex gap-6">
                <li>Home </li>
                <li>Mandals</li>
                <li>Live</li>
                <li>About</li>
            </ul>
            </nav>
        </div>
    );

}