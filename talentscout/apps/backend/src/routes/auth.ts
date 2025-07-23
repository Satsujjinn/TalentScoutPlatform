import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).send('Invalid');
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).send('Invalid');
  const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET || 'secret');
  res.json({ token });
});

export default router;
