import { DangerButton } from "../ui/buttons/DangerButton"


export const NotHolder = () => {

  return (
    <div className="pt-[77px] pb-[100px] font-bold">
      <DangerButton className="px-[16px] sm:px-[44px]" disabled={true}>YOUR WALLET IS NOT ON THE LIST!</DangerButton>
      <p className="mt-8">Please contact the support!</p>
    </div>
  )
}
