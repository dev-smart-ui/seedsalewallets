'use server'

import { DB_CONNECT } from "@/db"
import HoldersModel from '@/db/models/HoldersModel'

export const checkAddAction = async (wallet) => {
  try {
    if (!wallet) return false

    await DB_CONNECT();    
    
    const req = await HoldersModel.find({ bnb_bsc: wallet });

    const result = JSON.parse(JSON.stringify(req)); 
    
    return result
  } catch(err) {
    console.log(err);
  }
}
