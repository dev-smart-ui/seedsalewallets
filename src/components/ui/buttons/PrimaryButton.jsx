'use client'

import Image from "next/image"

export const PrimaryButton = ({
  className = '',
  placeHolderClassName = '',
  children,
  imageSrc,
  onClick,
  disabled = false
}) => {

  return (
    <button 
      className={`
        rounded-[35px] bg-white shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] 
        flex items-center mx-auto 
        ${imageSrc ? 'px-4 py-[19px]' : 'px-[44px] py-[23px]'} 
        ${disabled ? 'opacity-50' : 'hover:opacity-80'}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {imageSrc ? <Image className="mr-2" src={imageSrc} width={50} height={30} alt="" /> : null }        
      <span className={placeHolderClassName}>{children}</span>
    </button>
  )
}
