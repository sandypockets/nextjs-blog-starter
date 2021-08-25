export default function PageHeading({ children }) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-tight md:pr-8">
        {children}
      </h1>
    </section>
  )
}