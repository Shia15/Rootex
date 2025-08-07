
export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 border-b border-white/10 backdrop-blur-lg bg-white/5 sticky top-0 z-50">
      <div className="text-xl font-bold tracking-wider">Rootex</div>
      <nav className="space-x-4 text-sm">
        <a href="#modules" className="text-gray-300 hover:text-white">Modules</a>
        <a href="#api" className="text-gray-300 hover:text-white">API Access</a>
        <a href="https://github.com/Shia15/rootex" target="_blank" className="bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-500">GitHub</a>
      </nav>
    </header>
  );
}
