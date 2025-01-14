import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const wishes = Array.from({ length: 15 }, (_, i) => ({
    name: `User ${i + 1}`,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }));

  for (const wish of wishes) {
    await prisma.wish.create({ data: wish });
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });