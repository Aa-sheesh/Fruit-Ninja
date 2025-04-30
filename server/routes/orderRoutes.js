import express from 'express';
import { createOrder, getOrdersByPhone } from '../controllers/orderController.js';
const router = express.Router();

router.post('/', createOrder);
router.get('/:phone', getOrdersByPhone);

export default router;
