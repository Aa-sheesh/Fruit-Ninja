import Order from '../models/Order.js';
const createOrder = async (req, res) => {
  try {
    const { name, phone, items, totalPrice } = req.body;
    const order = await Order.create({ name, phone, items, totalPrice });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

const getOrdersByPhone = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { phone: req.params.phone } });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

export { createOrder, getOrdersByPhone };