'use server'

import { DB_CONNECT } from "@/db"
import HoldersModel from '@/db/models/HoldersModel'

export const addWalletAction = async (oldWallet, newWallet, amount) => {
  try {
    if (!oldWallet || !newWallet) return false

    await DB_CONNECT();    

    const candidate = await HoldersModel.findOne({ bnb_bsc: oldWallet });

    if (candidate) {
      console.log('wallet is already added!');
      return false
    }  
    
    const req = await HoldersModel.create({
      bnb_bsc: oldWallet,
      sol: newWallet, 
      amount
    });

    const result = req._id ? true : false; 
    
    return result
  } catch(err) {
    console.log(err);
  }
}
