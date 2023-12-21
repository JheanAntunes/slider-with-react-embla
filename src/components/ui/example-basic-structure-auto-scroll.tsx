import { EmblaContainer } from '../embla/embla'
import EmblaWrapperAutoScroll from '../embla/embla-wrapper-auto-scroll'
import TypographyH1 from '../typography'
import GenerateEmblaSliders from '../utils/generateEmblaSliders'

function ExampleBasicStructureAutoScroll() {
  return (
    <div className="flex w-full flex-col gap-8">
      <TypographyH1>Slider com auto-scroll</TypographyH1>
      <EmblaWrapperAutoScroll>
        <EmblaContainer>
          <GenerateEmblaSliders />
        </EmblaContainer>
      </EmblaWrapperAutoScroll>
    </div>
  )
}

export default ExampleBasicStructureAutoScroll
