interface HeadingProps {
  title: string
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <h2 className="text-2xl font-bold text-black dark:text-slate-50">
      {title}
    </h2>
  )
}

export default Heading
