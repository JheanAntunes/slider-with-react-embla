function HeaderTravelin() {
  return (
    <header className="container flex h-20 items-center bg-orange-500 shadow">
      <nav className="flex flex-grow items-center justify-between">
        <span className="font-serif text-2xl text-white md:text-4xl">
          Travelin
        </span>
        <search>
          <input />
        </search>
        <button>...</button>
      </nav>
    </header>
  )
}

export default HeaderTravelin
