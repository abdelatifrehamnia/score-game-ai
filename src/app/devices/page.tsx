import { PrismaClient } from '@prisma/client';
import Image from 'next/image';

const prisma = new PrismaClient();

async function getDevices() {
  const devices = await prisma.device.findMany({
    include: {
      games: {
        include: {
          game: true,
        },
      },
    },
  });
  return devices;
}

export default async function DevicesPage() {
  const devices = await getDevices();

  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Devices</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {devices.map((device) => (
          <div key={device.id} className="bg-gray-800 text-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{device.name}</h2>
            <p className="text-lg mb-2">{device.type}</p>
            <p className={`text-lg mb-4 ${device.status === 'AVAILABLE' ? 'text-green-400' : 'text-red-400'}`}>
              {device.status}
            </p>
            <div className="flex gap-2">
              {device.games.map((deviceGame) => (
                <Image
                  key={deviceGame.game.id}
                  src={deviceGame.game.image || ''}
                  alt={deviceGame.game.title}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}