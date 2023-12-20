import Img1 from '@/components/assets/img-1.jpg'
import Img2 from '@/components/assets/img-2.jpg'
import Img3 from '@/components/assets/img-3.jpg'
import Image from 'next/image'
import EmblaWrapper from '../embla/embla-wrapper'

export const EmblaCarousel = () => {
  return (
    <div className="w-full max-w-3xl">
      <EmblaWrapper>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="relative h-56 w-full overflow-hidden rounded">
              <Image
                src={Img1}
                alt="descriptionImage"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="embla__slide">
            {' '}
            <div className="relative h-56 w-full overflow-hidden rounded">
              <Image
                src={Img2}
                alt="descriptionImage"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="embla__slide">
            {' '}
            <div className="relative h-56 w-full overflow-hidden rounded">
              <Image
                src={Img3}
                alt="descriptionImage"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </EmblaWrapper>
    </div>
  )
}
