// seed.ts
import prisma from '../lib/prisma';
import cardsData from "../public/cah-all-compact.json"


async function main() {
  await prisma.user.create({
    data: {
      username: 'DemoUser',
      email: 'demo@user.com',
      password: 'dEl!ciou$',
    },
  });

  for (let i = 0; i < cardsData.white.length; i++) {
    console.log(cardsData.white[i])
    await prisma.white.create({
      data: {
        text: `${cardsData.white[i]}`
      },
    });
  }

  for (let i = 0; i < cardsData.black.length; i++) {
    console.log(cardsData.black[i])
    await prisma.black.create({
      data: {
        text: `${cardsData.black[i].text}`,
        pick: cardsData.black[i].pick
      },
    });
  }

  // Close Prisma client
  await prisma.$disconnect();
}

main().catch((e) => {
  throw e;
});
