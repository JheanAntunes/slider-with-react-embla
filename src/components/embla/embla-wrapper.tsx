"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
function EmblaWrapper({children, ...restProps}:React.ComponentProps<"div">) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true})
    
    React.useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])
  

    return (
    <div className="embla" ref={emblaRef}>{children}</div>
  )
}

export default EmblaWrapper