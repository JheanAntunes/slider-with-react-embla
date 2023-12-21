'use client'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import GenerateEmblaSliders from '../utils/generateEmblaSliders'
import {
  DotButton,
  NextButton,
  PrevButton,
} from './embla-carrousel-arrows-buttons-dots'

const ExampleEmblaSliderNavigationPagination = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <>
      <div className="embla relative">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <GenerateEmblaSliders />
          </div>
        </div>

        <div className="embla__buttons">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => scrollTo(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : '',
              )}
            >
              {index}
            </DotButton>
          ))}
        </div>
      </div>
    </>
  )
}

export default ExampleEmblaSliderNavigationPagination
