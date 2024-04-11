// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.user.create({
      data: {
        username: 'tanay',
        password: 'tanay',
        email: 'test@tanayvaswani.com',
        firstName: 'tanay',
        lastName: 'vaswani',

        post: {
          create: [
            {
              code: 'console.log()',
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
