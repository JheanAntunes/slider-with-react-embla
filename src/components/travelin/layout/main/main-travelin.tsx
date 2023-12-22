import EmblaSlider from './slider/emblaSlider'

function MainTravelin() {
  return (
    <main className="grid gap-16 pt-8">
      <section className="container grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-lg text-orange-500 lg:text-2xl">
            {'<'} Destination from {'>'}{' '}
          </span>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-8xl">
            Africa
          </h1>
          <span className="text-sm text-orange-500">Africa</span>
        </div>
        <div>Mapa</div>
      </section>
      <section className="relative">
        <div className="h-96 bg-orange-600">
          <EmblaSlider />
        </div>
      </section>
    </main>
  )
}

export default MainTravelin
