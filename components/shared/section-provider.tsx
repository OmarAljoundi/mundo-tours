const SectionProvider: React.FC<{
  children: React.ReactNode
  title?: string
  sub?: string
}> = ({ children, title, sub }) => {
  return (
    <section className="my-2 lg:my-5 ">
      {title && (
        <div className="grid items-center justify-items-center">
          <h1 className="text-7xl font-secondary ">{title}</h1>
          {sub && <h3 className="font-primary font-bold text-4xl">{sub}</h3>}
        </div>
      )}

      {children}
    </section>
  )
}

export default SectionProvider
