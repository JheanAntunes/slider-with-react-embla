import { ExampleBasicSliderWithNavigation } from '@/components/ui/example-basic-slider-with-navigation'
import { EmblaCarousel } from '@/components/ui/example-basic-structure'
import ExampleBasicStructureAutoScroll from '@/components/ui/example-basic-structure-auto-scroll'
import ExampleEmblaSliderNavigationPagination from '@/components/ui/example-embla-slider-navigation-pagination'

export default function Home() {
  return (
    <main className="container flex flex-col gap-8 py-8">
      <EmblaCarousel />
      <ExampleBasicStructureAutoScroll />
      <ExampleBasicSliderWithNavigation />
      <ExampleEmblaSliderNavigationPagination />
    </main>
  )
}
