export default function Navbar() {
    return (
        <aside className="w-64 h-screen bg-blue-400 text-white flex flex-col p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">652021053</h2>
            <nav className="flex flex-col gap-4">
                <a href="#" className="hover:bg-blue-700 p-2 rounded transition-colors">
                    Home
                </a>
                <a href="#" className="hover:bg-blue-700 p-2 rounded transition-colors">
                    About
                </a>
                <a href="#" className="hover:bg-blue-700 p-2 rounded transition-colors">
                    Services
                </a>
                <a href="#" className="hover:bg-blue-700 p-2 rounded transition-colors">
                    Contact
                </a>
            </nav>
        </aside>
    );
}