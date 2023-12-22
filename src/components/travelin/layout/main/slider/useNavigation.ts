import { EmblaCarouselType } from 'embla-carousel-react'
import { useCallback } from 'react'

export const useNavigation = (emblaApi: EmblaCarouselType | undefined) => {
  const handleClickBtnPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const handleClickBtnNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  return {
    handleClickBtnPrev,
    handleClickBtnNext,
  }
}
