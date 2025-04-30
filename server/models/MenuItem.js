import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
});

export default mongoose.model('MenuItem', MenuItemSchema);
