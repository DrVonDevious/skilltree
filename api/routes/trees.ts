import { Branch, Tree, PrismaClient } from '@prisma/client';
import { Request, Response, Router } from 'express';

const prisma = new PrismaClient();
const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const trees: Tree[] = await prisma.tree.findMany();
  res.json(trees);
});

router.post('/', async (req: Request, res: Response) => {
  // TODO: require a valid user token matching the userId in the request body
  const tree: Tree = await prisma.tree.create({
    data: req.body,
  });
  res.json(tree);
});

router.get('/:id', async (req: Request, res: Response) => {
  const tree: Tree | null = await prisma.tree.findUnique({
    where: { id: req.params.id },
  });
  res.json(tree);
});

router.delete('/:id', async (req: Request, res: Response) => {
  // TODO: require a valid user token matching the userId in the request body
  const tree: Tree | null = await prisma.tree.delete({
    where: { id: req.params.id },
  });
  res.json(tree);
});

router.patch('/:id/name', async (req: Request, res: Response) => {
  // TODO: require a valid user token matching the userId in the request body
  const tree: Tree | null = await prisma.tree.update({
    where: { id: req.params.id },
    data: { name: req.body.name },
  });
  res.json(tree);
});

router.patch('/:id/description', async (req: Request, res: Response) => {
  // TODO: require a valid user token matching the userId in the request body
  const tree: Tree | null = await prisma.tree.update({
    where: { id: req.params.id },
    data: { description: req.body.description },
  });
  res.json(tree);
});

router.post('/:id/branches', async (req: Request, res: Response) => {
  // TODO: require a valid user token matching the userId in the request body
  const { name, position } = req.body;
  const branch: Branch = await prisma.branch.create({
    data: {
      treeId: req.params.id,
      name,
      position,
    },
  });
  res.json(branch);
});

router.get('/:id/branches', async (req: Request, res: Response) => {
  const branches: Branch[] = await prisma.branch.findMany({
    where: { treeId: req.params.id },
  });
  res.json(branches);
});

export default router;
