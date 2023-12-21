import { EmblaContainer } from '../embla/embla'
import EmblaWrapper from '../embla/embla-wrapper'
import TypographyH1 from '../typography'
import GenerateEmblaSliders from '../utils/generateEmblaSliders'

export const EmblaCarousel = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <TypographyH1>Slider Básico</TypographyH1>
      <EmblaWrapper>
        <EmblaContainer>
          <GenerateEmblaSliders />
        </EmblaContainer>
      </EmblaWrapper>
    </div>
  )
}
