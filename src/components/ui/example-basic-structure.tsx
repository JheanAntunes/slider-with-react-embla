import { EmblaContainer } from '../embla/embla'
import EmblaWrapper from '../embla/embla-wrapper'
import GenerateEmblaSliders from '../utils/generateEmblaSliders'

export const EmblaCarousel = () => {
  return (
    <div className="w-full max-w-3xl">
      <EmblaWrapper>
        <EmblaContainer>
          <GenerateEmblaSliders />
        </EmblaContainer>
      </EmblaWrapper>
    </div>
  )
}
