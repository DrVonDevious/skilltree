import { PrismaClient, Tree } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  console.log('seeding database...');

  console.log('generating trees...');
  const tree01: Tree = await prisma.tree.create({
    data: {
      ownerId: 'auth0|626431bbfad45200691f15bc',
      name: 'Web Development',
      description: 'Learn to build a website from this in-depth Skilltree!',
    },
  });
  console.log(`created tree with id ${tree01.id}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
