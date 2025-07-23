import { Router } from 'express';
const router = Router();

router.get('/:matchId', (req, res) => {
  res.json([]);
});

export default router;
