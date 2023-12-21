'use client'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'

type MyAutoplayOptions = {
  delay: number
  jump: boolean
  playOnInit: boolean
  stopOnFocusIn: boolean
  stopOnInteraction: boolean
  stopOnMouseEnter: boolean
  stopOnLastSnap: boolean
  rootNode: ((emblaRoot: HTMLElement) => HTMLElement | null) | null
}

function EmblaWrapperAutoScroll({
  children,
  ...restProps
}: React.ComponentProps<'div'>) {
  const autoplayOptions: Partial<MyAutoplayOptions> = {
    delay: 4000,
    stopOnInteraction: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  }
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay(autoplayOptions),
  ])

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
