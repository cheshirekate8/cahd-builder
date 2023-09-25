import prisma from '../lib/prisma';
import cardsData from '../public/cah-all-compact.json';

async function main() {
  await prisma.user.create({
    data: {
      username: 'DemoUser',
      email: 'demo@user.com',
      password: 'dEl!ciou$',
    },
  });

  for (const whiteCard of cardsData.white) {
    await prisma.white.create({
      data: {
        text: whiteCard,
      },
    });
    console.log(`Created white card: ${whiteCard}`);
  }

  for (const blackCard of cardsData.black) {
    await prisma.black.create({
      data: {
        text: blackCard.text,
        pick: blackCard.pick,
      },
    });
    console.log(`Created black card: ${blackCard.text}`);
  }

  for (const packData of cardsData.packs) {
    const pack = await prisma.pack.create({
      data: {
        name: packData.name,
        user: undefined,
        whites: {
          connect: packData.white.map((id) => ({ id })),
        },
        blacks: {
          connect: packData.black.map((id) => ({ id })),
        },
      },
    });
    console.log(`Created pack: ${pack.name}`);
  }

  // Close Prisma client
  await prisma.$disconnect();
}

main().catch((e) => {
  throw e;
});
