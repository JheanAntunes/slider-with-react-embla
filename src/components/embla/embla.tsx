export const EmblaContainer = ({
  children,
  ...restProps
}: React.ComponentProps<'div'>) => (
  <div className="embla__container" {...restProps}>
    {children}
  </div>
)
export const EmblaSlide = ({
  children,
  ...restProps
}: React.ComponentProps<'div'>) => (
  <div className="embla__slide" {...restProps}>
    {children}
  </div>
)
