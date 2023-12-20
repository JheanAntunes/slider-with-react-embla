'use client'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
function EmblaWrapperAutoScroll({
  children,
  ...restProps
}: React.ComponentProps<'div'>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

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

export default EmblaWrapperAutoScroll
