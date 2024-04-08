'use client'

export const DangerButton = ({
  className = '',
  placeHolderClassName = '',
  children,
  onClick,
  disabled = false
}) => {

  return (
    <button 
      className={`
        rounded-[35px] text-white bg-[var(--bg-danger)] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] 
        flex items-center mx-auto px-[44px] py-[23px]
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >      
      <span className={placeHolderClassName}>{children}</span>
    </button>
  )
}
