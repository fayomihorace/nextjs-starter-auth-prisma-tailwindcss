const { PrismaClient } = require('@prisma/client');


const prismaClient = new PrismaClient()
async function main() {
  
  // Process seeding
}

main()
  .then(async () => {
    await prismaClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prismaClient.$disconnect()
    process.exit(1)
  })
