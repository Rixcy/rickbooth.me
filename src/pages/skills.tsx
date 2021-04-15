import { Heading, List, Text } from '@dracula/dracula-ui'

export default function SkillsPage() {
  return (
    <>
      <Heading color="purpleCyan" size="md">
        Skills/Tools
      </Heading>
      <List variant="unordered" color="purple" className="pl-4 md:pl-6">
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
    </>
  )
}
