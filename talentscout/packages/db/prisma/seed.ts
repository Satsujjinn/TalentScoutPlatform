import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('demo', 10);
  await prisma.user.create({ data: { email: 'demo@demo.com', password, role: 'athlete' } });
  await prisma.user.create({ data: { email: 'recruiter@demo.com', password, role: 'recruiter' } });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(() => prisma.$disconnect());
