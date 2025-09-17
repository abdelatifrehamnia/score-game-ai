import { PrismaClient } from '@prisma/client';
import Image from 'next/image';

const prisma = new PrismaClient();

async function getGames() {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: { devices: true },
      },
    },
  });
  return games;
}

export default async function GamesPage() {
  const games = await getGames();

  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <div key={game.id} className="bg-gray-800 text-white rounded-lg p-6">
            <Image
              src={game.image || ''}
              alt={game.title}
              width={200}
              height={300}
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
            <p className="text-lg">Available on {game._count.devices} devices</p>
          </div>
        ))}
      </div>
    </main>
  );
}