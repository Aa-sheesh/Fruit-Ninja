import { DataTypes } from 'sequelize';
import sequelize from '../config/postgres.js';

const Order = sequelize.define('Order', {
  name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  items: { type: DataTypes.JSON, allowNull: false },
  totalPrice: { type: DataTypes.FLOAT, allowNull: false },
});

export default Order;
