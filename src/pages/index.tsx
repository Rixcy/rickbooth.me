import { Card, Divider, Heading, List, Text } from '@dracula/dracula-ui'
import { Header } from 'components/Header'
import { JobHistory } from 'components/JobHistory'

export default function Home() {
  return (
    <Card
      variant="subtle"
      rounded="lg"
      p="md"
      borderColor="purple"
      className="max-w-5xl mx-auto sm:px-6 lg:px-8 lg:my-16"
    >
      <Header />
      <Divider color="purple" my="md" />
      <JobHistory />
      <Divider color="purple" my="md" />
      <Heading color="purpleCyan" size="md">
        Skills/Tools
      </Heading>
      <List variant="unordered" color="purple">
        <li className="drac-text drac-text-white">
          <Text color="white">
            React, TypeScript, Next.JS, StoryBook, Jest, React Testing Library,
            Node, TailwindCSS, CSS-in-JS, Styled Components, GraphQL, Nexus,
            Prisma, Vue, Svelte, React Native
          </Text>{' '}
        </li>
      </List>
    </Card>
  )
}
