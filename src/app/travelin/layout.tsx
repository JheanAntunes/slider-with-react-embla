import HeaderTravelin from '@/components/travelin/layout/header/header-travelin'

function LayoutTravelin({ children }: React.PropsWithChildren) {
  return (
    <>
      <HeaderTravelin />
      {children}
    </>
  )
}

export default LayoutTravelin
