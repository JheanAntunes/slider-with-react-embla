'use client'

import ImgExample1 from '@/components/assets/img-1.jpg'
import ImgExample2 from '@/components/assets/img-2.jpg'
import ImgExample3 from '@/components/assets/img-3.jpg'
import { useEmblaSliderPaginationNavigation } from '@/components/ui/useEmblaSliderPaginationNavigation'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

function EmblaSlider() {
  const {
    emblaRef,
    scrollNext,
    scrollPrev,
    scrollSnaps,
    scrollTo,
    selectedIndex,
  } = useEmblaSliderPaginationNavigation()

  return (
    <div className="container absolute -top-8">
      <div className="relative flex flex-col gap-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="relative h-52 overflow-hidden rounded">
                <Image
                  src={ImgExample1}
                  alt="descriptionImage"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="embla__slide">
              <div className="relative h-52 overflow-hidden rounded">
                <Image
                  src={ImgExample2}
                  alt="descriptionImage"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="embla__slide">
              <div className="relative h-52 overflow-hidden rounded">
                <Image
                  src={ImgExample3}
                  alt="descriptionImage"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8">
          <button className="h-10 w-10 text-white" onClick={scrollPrev}>
            <ArrowLeftIcon />
          </button>
          <div className="flex gap-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`h-5 w-5 rounded-full ${
                  index === selectedIndex ? 'bg-orange-500' : 'bg-orange-500/35'
                }`}
                onClick={() => {
                  scrollTo(index)
                  return
                }}
              />
            ))}
          </div>
          <button
            className="h-10 w-10 rounded-full text-white"
            onClick={scrollNext}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmblaSlider
