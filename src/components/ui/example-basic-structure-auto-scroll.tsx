import { EmblaContainer } from '../embla/embla'
import EmblaWrapperAutoScroll from '../embla/embla-wrapper-auto-scroll'
import GenerateEmblaSliders from '../utils/generateEmblaSliders'

function ExampleBasicStructureAutoScroll() {
  return (
    <div className="w-full max-w-3xl">
      <EmblaWrapperAutoScroll>
        <EmblaContainer>
          <GenerateEmblaSliders />
        </EmblaContainer>
      </EmblaWrapperAutoScroll>
    </div>
  )
}

export default ExampleBasicStructureAutoScroll
