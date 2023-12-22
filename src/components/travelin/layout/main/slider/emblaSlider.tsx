'use client'

import ImgExample1 from '@/components/assets/img-1.jpg'
import ImgExample2 from '@/components/assets/img-2.jpg'
import ImgExample3 from '@/components/assets/img-3.jpg'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback } from 'react'

function EmblaSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: true,
  })

  const handleClickBtnPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const handleClickBtnNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

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
          <button className="h-10 w-10 text-white" onClick={handleClickBtnPrev}>
            <ArrowLeftIcon />
          </button>
          {/* <div className="flex gap-8">
            <div className="">01</div>
            <div className="">02</div>
            <div className="">03</div>
          </div> */}
          <button
            className="h-10 w-10 rounded-full text-white"
            onClick={handleClickBtnNext}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmblaSlider
