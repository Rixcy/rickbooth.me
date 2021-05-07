import { Box, Card } from '@dracula/dracula-ui'
import { Header } from 'components/Header'
import { Tabs } from 'components/Tabs'

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.VFC<LayoutProps> = (props) => {
  const { children } = props
  return (
    <Card
      variant="subtle"
      rounded="lg"
      color="purple"
      className="max-w-5xl mx-auto sm:px-6 lg:px-8 lg:my-16 py-8 px-6 md:p-8"
    >
      <Header />
      <Tabs />
      <Box px="sm">{children}</Box>
    </Card>
  )
}
