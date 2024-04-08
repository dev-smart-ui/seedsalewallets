'use client'

import { useAccount } from "wagmi";
import { WalletButton } from "../ui/buttons/WalletButton";
import { redirect } from "next/navigation";

export const HomeView = () => {
  const { address } = useAccount();

  if (address) redirect('/add');

  return (
    <div className="pt-[77px] pb-[100px] font-bold">
      <p>Connect with your Airdrop wallet</p>
      <WalletButton className="mt-[48px]" />
      <p className="mt-[48px]">
        {/* TEXT */}
        </p>
    </div>
  )
}
