'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import GenerateEmblaSliders from '../utils/generateEmblaSliders'

export const ExampleBasicSliderWithNavigation = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 'auto',
    containScroll: 'trimSnaps',
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <GenerateEmblaSliders />
        </div>
      </div>
      <button
        className="embla__prev absolute top-1/2 -translate-y-1/2 rounded px-8 py-2 text-white"
        onClick={scrollPrev}
      >
        Prev
      </button>
      <button
        className="embla__next absolute right-0 top-1/2 -translate-y-1/2 rounded px-8 py-2 text-white"
        onClick={scrollNext}
      >
        Next
      </button>
    </div>
  )
}
