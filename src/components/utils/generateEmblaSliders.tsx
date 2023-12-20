import Img1 from '@/components/assets/img-1.jpg'
import Img2 from '@/components/assets/img-2.jpg'
import Img3 from '@/components/assets/img-3.jpg'
import ImgClientContrato from '@/components/assets/img-client-contrato.jpg'
import ImgClientDepoimento from '@/components/assets/img-client-depoimento.jpg'
import Image, { StaticImageData } from 'next/image'
import { EmblaSlide } from '../embla/embla'

type DataSlider = {
  src: StaticImageData
  alt: string
}

const dataSlider: DataSlider[] = [
  {
    src: Img1,
    alt: 'description1',
  },
  {
    src: Img2,
    alt: 'description2',
  },
  {
    src: Img3,
    alt: 'description3',
  },
  {
    src: ImgClientContrato,
    alt: 'descriptionContrato',
  },
  {
    src: ImgClientDepoimento,
    alt: 'descriptionDepoimento',
  },
]

function GenerateEmblaSliders() {
  return (
    <>
      {dataSlider.map(({ src, alt }) => (
        <EmblaSlide key={alt}>
          <div className="relative h-56 w-full overflow-hidden rounded">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </EmblaSlide>
      ))}
    </>
  )
}

export default GenerateEmblaSliders
