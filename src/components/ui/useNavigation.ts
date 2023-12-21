import { EmblaCarouselType } from 'embla-carousel-react'
import { useCallback, useState } from 'react'
export const useNavigation = (emblaApi: EmblaCarouselType) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )

  return {
    prevBtnDisabled,
    setPrevBtnDisabled,
    nextBtnDisabled,
    setNextBtnDisabled,
    scrollPrev,
    scrollNext,
  }
}
