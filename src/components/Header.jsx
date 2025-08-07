export default function Header() {
  return (
    <header className="flex justify-between items-center mb-10">
      <h1 className="text-2xl font-bold">Rootex</h1>
      <div className="space-x-4">
        <a href="#" className="text-sm text-gray-400 hover:text-white">Docs</a>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm">Launch Console</button>
      </div>
    </header>
  );
}
