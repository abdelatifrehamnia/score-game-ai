
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Games
  const game1 = await prisma.game.create({
    data: {
      title: 'Cyberpunk 2077',
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7h.jpg',
    },
  });

  const game2 = await prisma.game.create({
    data: {
      title: 'The Witcher 3: Wild Hunt',
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wz4.jpg',
    },
  });

  const game3 = await prisma.game.create({
    data: {
      title: 'Red Dead Redemption 2',
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg',
    },
  });

  // Create Devices
  const device1 = await prisma.device.create({
    data: {
      name: 'PlayStation 5 - 1',
      type: 'PS5',
    },
  });

  const device2 = await prisma.device.create({
    data: {
      name: 'PlayStation 5 - 2',
      type: 'PS5',
    },
  });

  const device3 = await prisma.device.create({
    data: {
      name: 'Xbox Series X - 1',
      type: 'Xbox',
    },
  });

  // Associate Games with Devices
  await prisma.deviceGame.create({
    data: {
      deviceId: device1.id,
      gameId: game1.id,
    },
  });

  await prisma.deviceGame.create({
    data: {
      deviceId: device1.id,
      gameId: game2.id,
    },
  });

  await prisma.deviceGame.create({
    data: {
      deviceId: device2.id,
      gameId: game3.id,
    },
  });

  await prisma.deviceGame.create({
    data: {
      deviceId: device3.id,
      gameId: game1.id,
    },
  });

  await prisma.deviceGame.create({
    data: {
      deviceId: device3.id,
      gameId: game3.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
