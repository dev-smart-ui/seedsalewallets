'use client'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { PrimaryButton } from './PrimaryButton';

export const WalletButton = ({
  className = ''
}) => {
  const { open } = useWeb3Modal();

  return (
    <PrimaryButton 
      placeHolderClassName="text-[var(--color-wallet)]"
      imageSrc="/walletconnect.png"
      onClick={() => open()}
      className={className}
      >
      WalletConnect
    </PrimaryButton>
  )
}
