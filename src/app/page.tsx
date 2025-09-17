import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Game Center</h1>
      <div className="flex gap-4">
        <Link href="/devices">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Browse Devices
          </button>
        </Link>
        <Link href="/games">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Browse Games
          </button>
        </Link>
      </div>
    </main>
  );
}