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

  // cardsData.white.forEach((whiteCard) => {
  //   await prisma.white.create({
  //     data: {
  //       text: whiteCard
  //     }
  //   })
  // })


  // Close Prisma client
  await prisma.$disconnect();
}

main().catch((e) => {
  throw e;
});
