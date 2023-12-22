import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigation } from './useNavigation'

export const useEmblaSliderPaginationNavigation = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const {
    nextBtnDisabled,
    setNextBtnDisabled,
    scrollNext,
    prevBtnDisabled,
    setPrevBtnDisabled,
    scrollPrev,
  } = useNavigation(emblaApi)

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback(
    (emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    },
    [setNextBtnDisabled, setPrevBtnDisabled],
  )

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    selectedIndex,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
  }
}
