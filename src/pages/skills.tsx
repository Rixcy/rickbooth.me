import { Heading, List, Text } from '@dracula/dracula-ui'
import { Layout } from 'components/Layout'

export default function Home() {
  return (
    <Layout>
      <Heading color="purpleCyan" size="md">
        Skills/Tools
      </Heading>
      <List variant="unordered" color="purple">
        {[
          'React',
          'TypeScript',
          'Next.JS',
          'StoryBook',
          'Jest',
          'React Testing Library',
          'Node',
          'TailwindCSS',
          'CSS-in-JS',
          'Styled Components',
          'GraphQL',
          'Nexus',
          'Prisma',
          'Vue',
          'Svelte',
          'React Native',
        ].map((skill) => (
          <li key={skill}>
            <Text color="purpleCyan">{skill}</Text>
          </li>
        ))}
      </List>
    </Layout>
  )
}
