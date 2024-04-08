import mongoose from 'mongoose';

const SeedSaleWalletsHolders = new mongoose.Schema({
  bnb_bsc: { type: String, required: true },
  sol: { type: String, required: true },
  amount: { type: String, required: true },
})

const SeedSaleWalletsHoldersModel = mongoose.models.SeedSaleWalletsHolders || mongoose.model('SeedSaleWalletsHolders', SeedSaleWalletsHolders);

export default SeedSaleWalletsHoldersModel;
