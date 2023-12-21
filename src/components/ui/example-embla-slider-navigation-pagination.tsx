'use client'
import TypographyH1 from '../typography'
import GenerateEmblaSliders from '../utils/generateEmblaSliders'
import {
  DotButton,
  NextButton,
  PrevButton,
} from './embla-carrousel-arrows-buttons-dots'
import { useEmblaSliderPaginationNavigation } from './useEmblaSliderPaginationNavigation'

const ExampleEmblaSliderNavigationPagination = () => {
  const {
    emblaRef,
    nextBtnDisabled,
    prevBtnDisabled,
    scrollNext,
    scrollPrev,
    scrollSnaps,
    scrollTo,
    selectedIndex,
  } = useEmblaSliderPaginationNavigation()

  return (
    <div className="flex flex-col gap-8">
      <TypographyH1>Slider com navigation e pagination</TypographyH1>
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
    </div>
  )
}

export default ExampleEmblaSliderNavigationPagination
