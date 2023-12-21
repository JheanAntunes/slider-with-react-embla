import React from 'react'

function TypographyH1({ children, ...restProps }: React.ComponentProps<'h1'>) {
  return (
    <h1 {...restProps} className="text-2xl md:text-3xl lg:text-4xl">
      {children}
    </h1>
  )
}

export default TypographyH1
