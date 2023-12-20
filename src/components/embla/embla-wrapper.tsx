'use client'
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
function EmblaWrapper({ children, ...restProps }: React.ComponentProps<'div'>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  React.useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef} {...restProps}>
      {children}
    </div>
  )
}

export default EmblaWrapper
