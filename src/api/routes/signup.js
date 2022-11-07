import express from 'express';

const router = express.Router();

router.post('/', (req, res, next) => {
  const { email, password } = req.body;
});

export default router;
