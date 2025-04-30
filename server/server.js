import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import connectMongo from './config/mongo.js';
import sequelize from './config/postgres.js';
import menuRoutes from './routes/menuRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(bodyParser.json());

// Connect DBs
connectMongo();
sequelize.sync().then(() => console.log('PostgreSQL synced'));

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
