import express from 'express';

import { createExpData, getExpenseData } from '../controllers/data.js';

const router = express.Router();

router.get('/', getExpenseData);
router.post('/', createExpData);

export default router;
