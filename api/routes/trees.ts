// import { PrismaClient } from '@prisma/client';
import { Request, Response, Router } from 'express';

// const prisma = new PrismaClient();
const router = Router();

router.get('/:id', async (_req: Request, res: Response) => {
  res.json({ name: 'Test' });
});

export default router;
