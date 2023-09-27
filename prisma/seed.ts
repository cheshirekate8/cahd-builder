import prisma from "../lib/prisma";
import cardsData from "../public/cah-cards-compact.json";

async function main() {
  await prisma.user.create({
    data: {
      username: "DemoUser",
      email: "demo@user.com",
      password: "dEl!ciou$",
    },
  });

  await prisma.white.createMany({
    data: cardsData.white.map((text) => ({ text })),
  });

  console.log(`Created white cards`);

  await prisma.black.createMany({
    data: cardsData.black.map((card) => ({
      text: card.text,
      pick: card.pick,
    })),
  });

  console.log(`Created black cards`);

  for (const packData of Object.values(cardsData.metadata)) {

    const pack = await prisma.pack.create({
      data: {
        name: packData.name,
        user: undefined,
        whites: {
          connect: packData.white.map((id) => ({ id: id + 1 })),
        },
        blacks: {
          connect: packData.black.map((id) => ({ id: id + 1 })),
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
