import { Badge } from '@dracula/dracula-ui'
import { Heading } from 'components/Heading'

export default function SkillsPage() {
  return (
    <>
      <Heading>Skills/Tools</Heading>
      <div className="my-4 flex-row flex flex-wrap">
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
          <div key={skill} className="mx-2 my-6">
            <Badge color="animated">{skill}</Badge>
          </div>
        ))}
      </div>
    </>
  )
}
