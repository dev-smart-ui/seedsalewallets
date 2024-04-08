'use client'

import { useAccount } from "wagmi";
import { NotHolder } from "../layout/NotHolder"
import { redirect } from "next/navigation";
import { useHolder } from "@/hooks/useHolder";
import { PrimaryButton } from "../ui/buttons/PrimaryButton";
import { useEffect, useRef, useState } from "react";
import { checkAddAction } from "@/actions/checkAddAction";
import { addWalletAction } from "@/actions/addWalletAction";

export const AddView = () => {
  const { address } = useAccount();

  if (!address) redirect('/');

  const isHolder = useHolder(address);

  const [isAdd, setIsAdd] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [isButtonLoad, setIsButtonLoad] = useState(false);
  const [isValueError, setIsValueError] = useState(false);
  const inputRef = useRef(null);

  const checkAdd = async () => {
    const check = await checkAddAction(isHolder.Wallet);
    check.length ? setIsAdd(true) : setIsAdd(false);
    setIsLoad(true);
  }

  const addWalletHandler = async () => {
    setIsButtonLoad(true);
    setIsValueError(false);

    const newWallet = inputRef.current.value;

    if (newWallet == '') {
      setIsButtonLoad(false);
      setIsValueError(true);      
      return
    }

    const add = await addWalletAction(isHolder.Wallet, newWallet, isHolder.Amount);

    if (add) setIsAdd(true)

    setIsButtonLoad(false);
  }

  useEffect(() => { checkAdd() }, []);

  return isHolder ? (
    isLoad ? (
      !isAdd ? (
        <div className="py-[36px] font-bold">
          <p>
            {/* TEXT */}

          </p>
          <div className="bg-[var(--bg-input)] pl-9 pr-4 py-6 rounded-[36px] mt-[61px] sm:mt-[92px]">
            <input 
              ref={inputRef} 
              className={`
                border-b border-b-[var(--border-input)] text-xs sm:text-base text-center 
                sm:text-left placeholder-[var(--border-input)] bg-[var(--bg-input)] 
                w-full outline-none ${isValueError ? 'border-b-[var(--color-input-error)] placeholder-[var(--color-input-error)]' : ''}
              `} 
              type="text" 
              name="wallet" 
              placeholder="ENTER YOUR SOLANA WALLET" 
            />
          </div>
          <PrimaryButton
            placeHolderClassName=""
            className="mt-[48px]"
            onClick={addWalletHandler}
            disabled={isButtonLoad}
          >
            SAVE WALLET
          </PrimaryButton>
        </div>
      ) : (
        <div className="py-[36px] font-bold">Your SOLANA wallet was added!</div>
      )
    ) : 'loading...'
  ) : <NotHolder />
}
