// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.user.create({
      data: {
        username: 'tanayvaswani',
        password: 'tanay',
        email: 'new@tanayvaswani.com',
        firstName: 'tanay',
        lastName: 'vaswani',

        posts: {
          create: [
            {
              code: 'console.log()',
              published: true,
            },
          ],
        },
      },
    });
  } catch (error) {
    console.error('Error seeding default categories: ', error);
  } finally {
    await db.$disconnect();
  }
}

main();
