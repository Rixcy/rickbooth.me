export type HeadingProps = {
  children?: React.ReactNode
}

export const Heading: React.VFC<HeadingProps> = ({ children }) => {
  return (
    <h2 className="drac-heading drac-heading-lg drac-text-white">{children}</h2>
  )
}
