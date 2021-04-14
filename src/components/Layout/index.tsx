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
      p="md"
      borderColor="purple"
      className="max-w-5xl mx-auto sm:px-6 lg:px-8 lg:my-16"
    >
      <Header />
      <Tabs />
      <Box px="sm">{children}</Box>
    </Card>
  )
}
